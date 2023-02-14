
const text = document.querySelector("#titulo");

// resize event listener to detect change in screen height
window.addEventListener("resize", (e) => {
    text.innerHTML = "Virtual keyboard detected!!!";
});