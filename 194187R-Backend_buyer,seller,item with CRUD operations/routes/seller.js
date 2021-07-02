const router = require("express").Router();
let Seller = require("../models/Seller");

router.route("/add").post((req,res)=>{
   const userID = req.body.userID;
   const userName = req.body.userName;
   const password = req.body.password;
   const email = req.body.email;
   const telephone = Number(req.body.telephone);
   const NIC = Number(req.body.NIC);
   const address = req.body.address;
  

   const newSeller = new Seller({
    userID,
    userName,
    password,
    email,
    telephone,
    NIC,
    address
   })

   newSeller.save().then(()=>{
      res.json("Seller Added")
   }).catch((err)=>{
      console.log(err);
   })
})

router.route("/").get((req,res)=>{
    Seller.find().then((sellers)=>{
      res.json(sellers)
    }).catch((err)=>{
      console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const {userID, userName, password,email,telephone,NIC,address} = req.body;

  const updateSeller = {
    userID,
    userName,
    password,
    email,
    telephone,
    NIC,
    address
  }

  const update = await Seller.findByIdAndUpdate(userId, updateSeller)
  .then(() => {
    res.status(200).send({status: "Seller updated"})
  }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
  })
})

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Seller.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({status: "Seller deleted"});
    }).catch((errr) => {
      console.log(err.message);
      res.status(500).send({status: "Error with delete seller", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const seller = await Seller.findById(userId)
    .then((seller) => {
      res.status(200).send({status: "Seller fetched", seller})
    }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Error with get seller", error: err.message});
  })
})

module.exports = router;