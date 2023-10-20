function first() {
  console.log("first function");
}

async function second() {
  await fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json())
    .then((user) => console.log(`second function ${user.name}`));
}

function third() {
  console.log("third function");
}

//funtion();
(async () => {
  first();
  await second();
  third();
})();
