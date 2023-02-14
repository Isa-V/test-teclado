const titulo = document.getElementById("titulo");

function onKeyboardOnOff(isOpen) {
    // Write down your handling code
    if (isOpen) {
        // keyboard is open
        titulo.innerText = "Teclado abierto";
    } else {
        // keyboard is closed
        titulo.innerText = "cerrado";
    }
}
