const db = require("./models");
(async () => {
  const courses = await db.Courses.findOne();
  console.log(courses);
  process.exit();
})();

(async () => {
  const Students = await db.Students.findOne();
  console.log(Students);
  process.exit();
})();
