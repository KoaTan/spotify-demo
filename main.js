window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("nav-bar").className = "container-change";
    } else {
        document.getElementById("nav-bar").className = "container";
    }
}