const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const multer = require("multer");
const { auth } = require("../middleware/auth");
const { Product } = require("../models/Product");

// Multer Code
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },

  // fileFilter: function (req, file, cb) {
  //   const ext = path.extname(file.originalname);
  //   if (ext !== ".jpg" || ext !== ".png") {
  //     return cb(
  //       res.status(400).end("only jpg an png files are allowed"),
  //       false
  //     );
  //   }
  //   cb(null, true);
  // },
});

var upload = multer({ storage: storage }).single("file");

//=================================
//           Products
//=================================

router.post("/uploadImage", auth, (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.json({ success: false, err });

    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
    ll;
  });
});

// creating user Product
router.post("/uploadProduct", auth, async (req, res) => {
  try {
    const newProduct = new Product({
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      title: req.body.title,
      images: req.body.images,
    });
    console.log(req.body);
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Profile-Server Error ");
  }
});

router.get("/getProducts", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
