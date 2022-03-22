const express = require("express");

const router = express.Router();

router.get("/", function (req, res, next) {
	res.render("index");
});

// Feel free to add more routes (and create about.html in public directory)
// router.get("/about", (req, res) => {
// 	res.send("about");
// });

module.exports = router;
