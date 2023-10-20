function first() {
  return new Promise((resolve, reject) => {
    resolve("first function");
  });
}

function second() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((user) => resolve(`second function ${user.name}`));
  });
}

function third() {
  return new Promise((resolve, reject) => {
    resolve("third function");
  });
}

// first().then((data) => {
//   console.log(data);
//   second().then((data) => {
//     console.log(data);
//     third().then((data) => console.log(data));
//   });
// });

//proper way to utilise a promise
first()
  .then((data) => console.log(data))
  .then(() =>
    second()
      .then((data) => console.log(data))
      .then(() => third().then((data) => console.log(data)))
  );
