//console.dir(document)

// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("#external-link"); // anchorElement = document.querySelector("p a");
anchorElement.href = "https://academind.com";

// ADD AN ELEMENT
// 1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to google!";

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element that should be removed

let firstH1Element = document.querySelector("h1");

// 2. Remove it!

// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); // for older browsers

// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph); // when you append you "paste" in the end of the element. Instead of append you canalso use insertBefore()

// innerHTML

firstParagraph.innerHTML = "Hi this is <strong>important!</strong>";