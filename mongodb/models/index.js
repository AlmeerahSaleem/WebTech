//mongoose ko object bana liya tha
const mongoose = require("mongoose");

//db server connection string
(async () => {
  await mongoose.connect(`mongodb://127.0.0.1:27017/academic`); //loopnback ip address
})();

//models ko export karidya
module.exports = {
  Course: require("./Course"), //refrence kar diya
};
