const db = require("../db/db.js");
const path = require("path");
//Upload Image

const UPLOAD_IMAGE = async (req, res, next) => {
  try {    
    res.sendStatus(204);  
  } catch (error) {
    
    res.status(401).send("Invalid file ext.");
  }
};

const GET_IMAGE = async (req, res, next) => {
  try {
    const file = path.join(`${__dirname}/../images/${req.user.id}.png`);
    res.sendFile(file);
  } catch (error) {}
};
module.exports = {
  UPLOAD_IMAGE,
  GET_IMAGE,
};
