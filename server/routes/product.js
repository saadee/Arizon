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

router.post("/getProducts", async (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);
  // console.log("Skip  " + req.body.skip);
  // console.log("Limit  " + req.body.limit);
  let findArgs = {};
  // console.log(req.body.filters);

  // for (let key in req.body.filters) {
  //   if (req.body.filters[key].length > 0) {
  //     if (key === "price") {
  //       findArgs[key]={
  //         $gte=req.body.filters[key][0],
  //         $lte=req.body.filters[key][1]
  //       }
  //     } else {
  //       findArgs[key] = req.body.filters[key];
  //     }
  //   }
  // }

  let term = req.body.search;
  // console.log(term);
  try {
    if (term) {
      const products = await Product
        .find({ $text: { $search: term } })
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(12);
      res.json(products);
    } else {
      const products = await Product.find()
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(12);
      res.json(products);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/Product/id
// @desc    Get Product by ID
// @access  Publice

router.get('/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) {
			return res.status(400).json({ msg: 'product not Found' });
		}
		res.json(product);
	} catch (err) {
		console.error(err.message);
		if (err.kind == 'ObjectId') {
			return res.status(400).json({ msg: 'Post not Found' });
		}
		res.status(500).send('Server Error');
	}
});


module.exports = router;
