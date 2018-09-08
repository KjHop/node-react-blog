const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uuidv4 = require("uuid/v4");
const path = require("path");
//Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    const newFileName = `${new Date().getUTCFullYear() +
      "-" +
      new Date().getMonth() +
      "-" +
      new Date().getDay() +
      "-" +
      new Date().getHours() +
      "-" +
      new Date().getMinutes() +
      "-" +
      new Date().getSeconds() +
      ".jpg"}`;
    cb(null, newFileName);
  }
});
const upload = multer({ storage });
