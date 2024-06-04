const express = require('express')
const users = require("./MOCK_DATA.json")
const fs = require('fs')

const app = express();
const PORT = 8000;

// middleware - plugin
app.use(express.urlencoded({extended : false})) // next is function after this function

// as of now it didnt even process req or send resp to next which make it unable to process the request further
// app.use((req,res,next) => {
//   console.log("Hello , from  middleware 1")
// })

// app.use((req,res,next) => {
//   console.log("msg: Hello from middleware 1")
//   req.myUsername = "neharikarout"
//   next();
// })
// app.use((req,res,next) => {
//   console.log( "Hello from middleware 2", req.myUsername)
//   next();
// })

// creating log files using middlewares
app.use((req,res,next) => {
  fs.appendFile("log.txt",`${Date.now()} : ${req.method} : ${req.path}\n`, (err,data) => {
    next();
  })
})

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
  console.log(req.headers)
  res.setHeader("X-myName","Neharika") // custom header
  // always add X to the custom headers
    return res.json(users);
})

// grouped requests for same path/route
app.route('/api/users/:id')
.get((req,res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id );
    if(!user) return res.status(404).json({error: "User  not found"})
    return res.json(user)
  })
.patch((req,res) => {
    // todo : edit the user with id
    // get hte id of the user
    const id = Number(req.params.id);
    // get the body which is sent on patch request
    const body = req.body;
    // find the user in users array
    const user = users.find((user) => user.id === id)
    // override the user id and the body with new data
    const updatedUser = { ...user, ...body };
    // making sure that updated user id should be same as id sent of patch 
    updatedUser.id=id;
    // updated on the users array with updated user
    users[id-1]=updatedUser

    // write updated data on file
   fs.writeFile('MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "Success", updatedUser });
   })
})

.delete( (req,res) => {
    // todo : delete the user with id
  //Get the id of the user
  const id = Number(req.params.id);

  //Find out the index of the user with above id from the array "users"
  const userIdx = users.findIndex((user)=> user.id === id);

  //Get the deleted user object using splice. Mind we need to get the object and not array as returned by splice method, so '[0]' satisfies this requirement. The resulting object is just for the sake of displaying, you may neglect storing it if you don't want to display.
  const delUser = users.splice(userIdx, 1)[0];

  //Write the changes into the json file.
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", delUser });
  });
})


app.post("/api/users" , (req,res) => {
  //todo : create new user
  const body = req.body;
  if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
    return res.status(400).json({msg:"all fields are required"})
  }
  console.log(body)
  users.push({id: users.length+1 , ...body})
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users) , (err,data) => {
    return res.status(201).json({status : "success",id: users.length});
  })
})



app.listen(PORT, () => console.log(`Server start at ${PORT}`));