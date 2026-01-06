let display = document.getElementById("display");

/* Calculator Logic */
function append(value) {
  let last = display.value.slice(-1);
  if ("+-*/.".includes(last) && "+-*/.".includes(value)) return;
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function func(type) {
  let v = parseFloat(display.value);
  if (isNaN(v)) return;

  switch (type) {
    case "sqrt": display.value = Math.sqrt(v); break;
    case "pow": display.value = Math.pow(v, 2); break;
    case "sin": display.value = Math.sin(v * Math.PI / 180); break;
    case "cos": display.value = Math.cos(v * Math.PI / 180); break;
    case "tan": display.value = Math.tan(v * Math.PI / 180); break;
    case "log": display.value = Math.log10(v); break;
    case "ln": display.value = Math.log(v); break;
  }
}

/* String Operations */
function reverseString() {
  result.innerText = stringInput.value.split("").reverse().join("");
}

function toUpper() {
  result.innerText = stringInput.value.toUpperCase();
}

function toLower() {
  result.innerText = stringInput.value.toLowerCase();
}

function removeSpaces() {
  result.innerText = stringInput.value.replace(/\s/g, "");
}

function wordCount() {
  let words = stringInput.value.trim().split(/\s+/);
  result.innerText = "Words: " + (stringInput.value.trim() ? words.length : 0);
}

function charCount() {
  let count = stringInput.value.replace(/\s/g, "").length;
  result.innerText = "Characters: " + count;
}

function titleCase() {
  let s = stringInput.value
    .toLowerCase()
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  result.innerText = s;
}

function checkPalindrome() {
  let s = stringInput.value.toLowerCase().replace(/\s/g, "");
  result.innerText = s === s.split("").reverse().join("")
    ? "Palindrome"
    : "Not Palindrome";
}

/* Keyboard Support */
document.addEventListener("keydown", e => {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) append(e.key);
  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") backspace();
});
