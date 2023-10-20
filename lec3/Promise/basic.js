console.log("first function");

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => res.json())
  .then((user) => console.log(`second function ${user.name}`));

console.log("third function");
