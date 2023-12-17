const express = require("express");
var router = express.Router();

//import controllers
const { dummyLink } = require("../controllers/likecontroller");
const { createcomment } = require("../controllers/commentcontroller");

//map controllers
router.get("/dummyroute", dummyLink);
router.get("/comments/create", createcomment);
//exports
module.exports = router;
