const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

// console.dir(productNameInputElement);

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacteres(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacteres = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacteres;
}

productNameInputElement.addEventListener("input", updateRemainingCharacteres);
