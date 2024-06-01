const express = require('express')
const users = require("./MOCK_DATA.json")
const fs = require('fs')

const app = express();
const PORT = 8000;

// middleware - plugin
app.use(express.urlencoded({extended : false}))

// Routes
app.get("/users" , (req,res) => {
    /* 
    <ul>
       <li> Neharika </li>
    </ul>
    */
   const html = `
   <ul>
      ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

app.get("/api/users" , (req,res) => {
    return res.json(users);
})

// grouped requests for same path/route
app.route('/api/users/:id')
.get((req,res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id );
    return res.json(user)
  })
.patch((req,res) => {
    // todo : edit the user with id
    const id = Number(req.params.id);
    const body = req.body;
    const user = users.find((user) => user.id === id)
    const updatedUser = { ...user, ...body };
    updatedUser.id=id;
    users[id-1]=updatedUser

   fs.writeFile('MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "Success", updatedUser });
   })
})

.delete( (req,res) => {
    // todo : delete the user with id
    return res.json({status : "pending"})
})

app.post("/api/users" , (req,res) => {
  //todo : create new user
  const body = req.body;
  console.log(body)
  users.push({id: users.length+1 , ...body})
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users) , (err,data) => {
    return res.json({status : "success",id: users.length});
  })
})



app.listen(PORT, () => console.log(`Server start at ${PORT}`));