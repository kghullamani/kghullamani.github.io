var navStatus = 1;

function toggleNav() {
    if (navStatus == 1) {
        closeNav();
    }
    else {
        openNav();
    }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    var main = document.getElementById("main");
    main.style.marginLeft = "250px";
    document.getElementById("bars").style.left = "280px";
    navStatus = 1;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var main = document.getElementById("main");
    main.style.marginLeft = "0px";
    document.getElementById("bars").style.left = "30px";
    navStatus = 0;

}