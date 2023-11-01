//Read Evaluate Print Loop
const db = require("./models");

db.Student.find().then((students) => {
  students.map((student) => {
    console.log(student.regno);
  });
});

// db.Student.findOne().then((students) => {
//   students.map((student) => {
//     console.log(student.regno);
//   });
// });

// db.Course.find()
//   .then((courses) => console.log(courses))
//   .then(() => process.exit());

// (async () => {
//   const data = await db.Mark.find();
//   console.log(data);
//   process.exit();
// })();
