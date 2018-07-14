var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/data.js");

router.route('/')
      .get(helpers.getAllData)
      .post(helpers.postData)

router.route('/:dataId')
      .get(helpers.getData)
      .put(helpers.updateData)
      .delete(helpers.deleteData)

module.exports = router;