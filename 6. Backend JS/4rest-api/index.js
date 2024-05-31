const express = require('express')
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

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
.post((req , res) => {
    // todo : create new user
    return res.json({status : "pending"})
})
.patch((req,res) => {
    // todo : edit the user with id
    return res.json({status : "pending"})
})
.delete( (req,res) => {
    // todo : delete the user with id
    return res.json({status : "pending"})
})



app.listen(PORT, () => console.log(`Server start at ${PORT}`));