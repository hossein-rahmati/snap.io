function openNav() {
    document.getElementById("Menu").style.display = "block"
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closeNav() {
    document.getElementById("Menu").style.display = "none"
    document.body.style.backgroundColor = "white";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}