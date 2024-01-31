const db = require("../models");
const Upload = db.Upload;

const handleFileUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const { originalname, filename, path } = req.file;

    const newUpload = new Upload({
      filename: originalname,
      path: path,
    });

    await newUpload.save();

    res.send(`File uploaded successfully. Path: ${path}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { handleFileUpload };
