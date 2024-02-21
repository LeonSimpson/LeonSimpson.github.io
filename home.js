function toggleMenu() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " mobile";
    } else {
        x.className = "nav";
    }
}