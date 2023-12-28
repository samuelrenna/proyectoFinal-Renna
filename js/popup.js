
const popup = {
    visible: false,
    mostrar(x, y, ancho, texto) {
    if (this.visible) {
        return;
    }
    x = Math.floor(x);
    y = Math.floor(y);
    const id = "popup";
    const popupElement = document.getElementById(id);
        popupElement.innerHTML = texto;
        popupElement.style.display = "block";
        popupElement.style.position = "absolute";
        popupElement.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        popupElement.style.width = `${ancho}px`;
        popupElement.style.zIndex = "11";
        popupElement.style.backgroundColor = "black";
        popupElement.style.color = "white";
        popupElement.style.border = "3px solid white";
        popupElement.style.padding = "0.5em";
        popupElement.style.textAlign = "center";
        this.visible = true;
    },
    ocultar() {
    if (!this.visible) {
        return;
    }
    const id = "popup";
    const popupElement = document.getElementById(id);
        popupElement.style.display = "none";
        popupElement.innerHTML = "";
    this.visible = false;
    }
};
