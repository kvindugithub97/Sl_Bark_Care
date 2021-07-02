const router = require("express").Router();
let Buyer = require("../models/Buyer");

router.route("/add").post((req,res)=>{
   const userID = req.body.userID;
   const userName = req.body.userName;
   const password = req.body.password;
   const email = req.body.email;
   const telephone = Number(req.body.telephone);
  

   const newBuyer = new Buyer({
    userID,
    userName,
    password,
    email,
    telephone
   })

   newBuyer.save().then(()=>{
      res.json("Buyer Added")
   }).catch((err)=>{
      console.log(err);
   })
})

router.route("/").get((req,res)=>{
  Buyer.find().then((buyer)=>{
      res.json(buyers)
    }).catch((err)=>{
      console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const {userID, userName, password,email,telephone} = req.body;

  const updateBuyer = {
    userID,
    userName,
    password,
    email,
    telephone
  }

  const update = await Buyer.findByIdAndUpdate(userId, updateBuyer)
  .then(() => {
    res.status(200).send({status: "Buyer updated"})
  }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
  })
})

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Buyer.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({status: "Buyer deleted"});
    }).catch((errr) => {
      console.log(err.message);
      res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const user = await Buyer.findById(userId)
    .then((buyer) => {
      res.status(200).send({status: "Buyer fetched", buyer})
    }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Error with get buyer", error: err.message});
  })
})

module.exports = router;
