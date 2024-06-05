const express = require("express")

const router = express.Router()


// Routes
router.get("/users" , async (req,res) => {
   const allDbUsers = await User.find({});
   const html = `
   <ul>
      ${allDbUsers.map(user => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

router.get("/" , async (req,res) => {
  const allDbUsers = await User.find({})
    return res.json(allDbUsers);
})

// grouped requests for same path/route
router.route('/:id')
.get(async (req,res) => {
    const id = Number(req.params.id);
    const user = await User.findById(req.params.id)
    if(!user) return res.status(404).json({error: "User  not found"})
    return res.json(user)
  })
.patch(async (req,res) => {
  await User.findByIdAndUpdate(req.params.id,{lastName: "Changed"}) ;
  return res.json({status: "Success"})
})

.delete(async  (req,res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({status: "Success"})

})


router.post("/" , async (req,res) => {
  const body = req.body;
  if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
    return res.status(400).json({msg:"all fields are required"})
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  })

  return res.status(201).json({msg: "success"})
})

module.exports = router;