// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"

//console.dir(document);
//let firstButton = document.body.children[2].children[4];

let firstButton = document.querySelector("button");
console.log(firstButton);

let secondButton = document.getElementById("second-button");
console.log(secondButton);

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

function consoleDirFirstButton () {
    console.dir(firstButton);
}

//firstButton.addEventListener("click", consoleDirFirstButton);

function consoleDirSecondButton (event) {
    console.dir(event.target);
}

//secondButton.addEventListener("click", consoleDirSecondButton);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

let firstParagraph = document.body.children[2].children[1];
let thirdParagraph = document.body.children[2].children[3];

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

function removeParagraph () {
    thirdParagraph.remove();
}

//firstButton.addEventListener("click", removeParagraph);

function changeBackgroundColor () {
    firstParagraph.style.backgroundColor = "blue";
}

//secondButton.addEventListener("click", changeBackgroundColor);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

function removeParagraph2 () {
    thirdParagraph.classList.add("clicked");
}

firstButton.addEventListener("click", removeParagraph2);

function changeBackgroundColor2 () {
    firstParagraph.classList.add("clicked");
}

secondButton.addEventListener("click", changeBackgroundColor2);