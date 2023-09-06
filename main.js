const preview = document.getElementById("preview");
const styles = document.getElementById("styles");
const copyButton = document.getElementById("copy-styles");
const ranges = document.querySelectorAll(".settings input")

ranges.forEach((slider) => {
    slider.addEventListener("input", generatorStyles);
});

function generatorStyles() {
    const xShadow = document.getElementById("x-shadow").value;
    const yShadow = document.getElementById("y-shadow").value;
    const blurRadius = document.getElementById("blur-r").value;
    const spreadRadius = document.getElementById("spread-r").value;
    const shadowColor = document.getElementById("shadow-color").value;
    const shadowOpacity = document.getElementById("shadow-opacity").value;
    const shadowInset = document.getElementById("inset-shadow").checked;
    const borderRadius = document.getElementById("border-r").value;

    const boxShadow = `${shadowInset ? "inset " : ""}${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(
        shadowColor,
        shadowOpacity
    )}`;

    preview.style.boxShadow = boxShadow;
    preview.style.borderRadius = `${borderRadius}px`;

    styles.textContent = `box-shadow: ${boxShadow};\nborder-radius: ${borderRadius}px`;
}

function hexToRgba(hex, opacity) {
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function copyStyles() {
    styles.select();
    document.execCommand("copy");
    copyButton.innerText = "Copied!";
    setTimeout(() => {
        copyButton.innerText = "Copy Styles";
    }, 3000);
}

generatorStyles();
