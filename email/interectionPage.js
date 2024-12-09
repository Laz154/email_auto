function pegandoInfosDoCliente(){
    
}

document.addEventListener("DOMContentLoaded", function () {
    const toggleArrow = document.getElementById("toggle-html");
    const htmlContainer = document.getElementById("html-attachment-container");

    toggleArrow.addEventListener("click", function () {
        if (htmlContainer.classList.contains("hidden")) {
            htmlContainer.classList.remove("hidden");
            toggleArrow.textContent = "▲"; // Altera a seta para cima
        } else {
            htmlContainer.classList.add("hidden");
            toggleArrow.textContent = "▼"; // Altera a seta para baixo
        }
    });
});