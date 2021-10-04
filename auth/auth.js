const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      res.send("Security header is necessary.");
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET, (err, info) => {
        if(err){
            res.send('You are not authorized.');                      
        }
        req.user = info.data;
        next();
    });   
    
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
