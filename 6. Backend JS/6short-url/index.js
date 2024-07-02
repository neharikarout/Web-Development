const express = require("express");
const { connectToMongoDB } = require("./connect");
const path = require("path")
const cookieParser = require("cookie-parser")
const {restrictToLoggeninUserOnly, checkAuth} = require('./middleware/auth')

const URL = require("./models/url");

const urlRoute = require("./routes/url");
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')

const app = express();
const PORT = 8001;

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

connectToMongoDB("mongodb://localhost:27017/short-url").then(
  console.log("mongodb connected")
);

app.set("view engine","ejs")
app.set('views', path.resolve("./views"));

app.use("/url", restrictToLoggeninUserOnly, urlRoute);
app.use("/",checkAuth, staticRoute);
app.use("/user", userRoute);



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
