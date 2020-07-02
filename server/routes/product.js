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
      subcategory: req.body.subcategory,
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

// Get Men's Denim
router.post("/getMensDenim", async (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let skip = parseInt(req.body.skip);
  try {
    const products = await Product.find({category:'Mens',subcategory:'Denim'})
      // .sort([[sortBy, order]])
      // .skip(skip)
      // .limit(12);
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// Get Men's Shirts
router.post("/getMensShirts", async (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let skip = parseInt(req.body.skip);
  try {
    const products = await Product.find({category:'Mens',subcategory:'Shirts'})
      // .sort([[sortBy, order]])
      // .skip(skip)
      // .limit(12);
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Get Men's T-Shirts

router.post("/getMensTshirts", async (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let skip = parseInt(req.body.skip);
  try {
    const products = await Product.find({category:'Mens',subcategory:'T-Shirts'})
      // .sort([[sortBy, order]])
      // .skip(skip)
      // .limit(12);
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
  
});// Get Men's Denim
router.post("/getMensShoes", async (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let skip = parseInt(req.body.skip);
  try {
    const products = await Product.find({category:'Mens',subcategory:'Shoes'})
      // .sort([[sortBy, order]])
      // .skip(skip)
      // .limit(12);
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/Product/id
// @desc    Get Product by ID
// @access  Publice

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ msg: "product not Found" });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Post not Found" });
    }
    res.status(500).send("Server Error");
  }
});

// Add to Cart

router.post("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ msg: "product not Found" });
    }
    (product.size = req.body.size),
      (product.units = req.body.quantity),
      Product.updateOne(
        { _id: req.params.id },
        { $set: product },
        (err, rsp) => {
          console;
        }
      );
    // console.log(product);
    res.json(product);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Post not Found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
