//data fetching
const db = require("./models");

(async () => {
  const courses = await db.Course.findOne();
  console.log(courses);
  process.exit();
})();
