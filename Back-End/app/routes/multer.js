module.exports = (app) => {
  const express = require("express");
  const multer = require("multer");
  const upload = multer({ dest: "uploads/" });
  const tutorials = require("../controllers/multer.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", upload.single("file"), tutorials.handleFileUpload);

  app.use("/upload", router);
};
