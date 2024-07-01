const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");
const path = require("path")
const staticRoute = require('./routes/staticRouter')

const app = express();
const PORT = 8001;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

connectToMongoDB("mongodb://localhost:27017/short-url").then(
  console.log("mongodb connected")
);

app.set("view engine","ejs")
app.set('views', path.resolve("./views"));

app.use("/url", urlRoute);
app.use("/", staticRoute);



app.get("/url/:shortid", async (req, res) => {
  const shortId = req.params.shortid;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
