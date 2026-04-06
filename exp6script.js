let heading = document.getElementById("Heading");
let input = document.getElementById("input");
let paragraph = document.getElementById("paragraph");

let fontsize = 16;
document.getElementById("changebtn").addEventListener("click", function () {
    if (input.value.trim() !== "") {
        heading.innerHTML = input.value;
    }
});
document.getElementById("bkgbtn").onclick = function () {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = color;
};
document.getElementById("incfontbtn").onclick = function () {
    fontsize += 2;
    heading.style.fontSize = fontsize + "px";
    paragraph.style.fontSize = fontsize + "px";
};
document.getElementById("showbtn").onclick = function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
};
document.getElementById("Reset").onclick = function () {
    heading.innerHTML = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "white";

    fontsize = 16;
    heading.style.fontSize = fontsize + "px";
    paragraph.style.fontSize = fontsize + "px";

    paragraph.style.display = "block";

    input.value = "";
};