const mongoose = require("mongoose");
(async () => {
  await mongoose.connect(`mongodb://127.0.0.1:27017/recapsheet`);
  //pata kaisay chalay ga us ip ka??
})();

module.exports = {
  Courses: require("./Courses"),
  Students: require("./Student"),
};
