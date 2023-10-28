const db = require("./models");
(async () => {
  const courses = await db.Courses.findOne();
  console.log(courses);
  process.exit();
})();
