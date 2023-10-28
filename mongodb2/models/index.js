const mongoose = require("mongoose");
(async () => {
  await mongoose.connect(`mongodb://127.0.0.1:27017/academic`);
  //pata kaisay chalay ga is ip ka??
})();

module.exports = {
  Courses: require("./Course"),
};
