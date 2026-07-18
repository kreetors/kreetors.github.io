function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}

function toggleDropdown() {
    document.getElementById("menu").classList.toggle("show");
}

window.onclick = function(event) {

    if (!event.target.matches('.action')) {
        document.getElementById("menu").classList.remove("show");
    }

}