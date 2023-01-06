const myName = "Pedro";

if (myName === "Pedro") {
  console.log("Heloo!");
}

let isLoggedIn = true;

if (isLoggedIn) {
  console.log("User is logged in");
}

if (!isLoggedIn) {
  console.log("User is NOT logged in");
}

const enteredUserName = "Pedro"; // empty string or the number 0 is treated as false

if (enteredUserName.length) {
  console.log("Input is valid!");
}
