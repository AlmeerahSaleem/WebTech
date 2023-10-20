function first(callback) {
  console.log("first function");
  callback();
}

function second(callback) {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json())
    .then((user) => console.log(`second function ${user.name}`))
    .then(() => callback());
}

function third(callback) {
  console.log("third function");
}

// first(function () {
//   second(function () {
//     third();
//   });
// });

//arrow function: gives exactly same output, more elegantly
first(() => second(() => third()));
