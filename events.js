// option - 2
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

// option -3
const blueButton = document.getElementById("make-blue");
blueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option - 4
const greenButton = document.getElementsByClassName("make-green");
// console.log(greenButton);
greenButton[0].onclick = function makeGreen() {
  document.body.style.backgroundColor = "green";
};

// option - 5
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

document.getElementById("update-btn").addEventListener("click", function () {
  const inputText = document.getElementById("input");
  inputValue = inputText.value;

  const p = document.getElementById("p-update");
  p.innerText = inputValue;
  inputText.value = "";
});
