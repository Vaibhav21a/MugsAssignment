let is_true = True;
let bgContainer = document.getElementById("bgHome");
let button = document.getElementById("button");

function change() {
    if (is_true) {
        bgContainer.style.backgroundColor = "#000000";
        button.style.color = "#ffffff";
        button.textContent = "Light";
        is_true != is_true;
    }
    else {
        bgContainer.style.backgroundColor = "#ffffff";
        button.style.color = "#323f4b";
        button.textContent = "Dark";
        is_true != is_true;
    }

}