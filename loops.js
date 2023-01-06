for (let i = 0; i < 10; i++) {
    console.log(i);
}

const users = ["Max", "Anna", "Joel"];

for (const user of users) {
    console.log(user);
}

const loggedInUser = {
    name: "Pedro",
    age: 29,
    isAdmin: true,
}

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);    // loggedInUser.name = loggedInUser["name"]
}

let isFinished = false

while (!isFinished) {
    isFinished = confirm("Do you want to quit?");
}