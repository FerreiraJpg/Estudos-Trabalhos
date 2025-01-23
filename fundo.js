function changeBackgroundColor() {
    const body = document.body;
    const currentColor = body.style.backgroundColor;
    body.style.backgroundColor = currentColor === "gray" ? "white" : "gray";
}