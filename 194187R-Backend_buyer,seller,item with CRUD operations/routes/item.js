const router = require("express").Router();
let Item = require("../models/Item");

router.route("/add").post((req,res)=>{
   const itemID = req.body.itemID;
   const itemName = req.body.itemName;
   const unitCount = Number(req.body.unitCount);
   const unitPrice = Number(req.body.unitPrice);
  

   const newItem = new Item({
    itemID,
    itemName,
    unitCount,
    unitPrice
    
   })

   newItem.save().then(()=>{
      res.json("Item Added")
   }).catch((err)=>{
      console.log(err);
   })
})

router.route("/").get((req,res)=>{
    Item.find().then((item)=>{
      res.json(items)
    }).catch((err)=>{
      console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) => {
  let itemId = req.params.id;
  const {itemID, itemName, unitCount,unitPrice} = req.body;

  const updateItem = {
    itemID,
    itemName,
    unitCount,
    unitPrice
    
  }

  const update = await Item.findByIdAndUpdate(itemID, updateItem)
  .then(() => {
    res.status(200).send({status: "Item updated"})
  }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
  })
})

router.route("/delete/:id").delete(async (req, res) => {
  let itemID = req.params.id;

  await Item.findByIdAndDelete(itemID)
    .then(() => {
      res.status(200).send({status: "Item deleted"});
    }).catch((errr) => {
      console.log(err.message);
      res.status(500).send({status: "Error with delete item", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
  let itemID = req.params.id;
  const item = await Item.findById(itemID)
    .then((item) => {
      res.status(200).send({status: "Item fetched", item})
    }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Error with get item", error: err.message});
  })
})

module.exports = router;
