const text = "Hello";
const display = document.getElementById("display");
let index = 0;

function typeText() {
    display.textContent = text.slice(0, index + 1);
    index++;
    if (index > text.length) {
        index = 0;
        setTimeout(() => display.textContent = "", 500);
    }
    setTimeout(typeText, 1000);
}

typeText();
