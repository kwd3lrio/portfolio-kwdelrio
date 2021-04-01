// enables desktop nav sticky functionality

// window.onscroll = function() {deskNavFunction()};
// var navbar = document.getElementById("id_desktop_nav");
// var sticky = navbar.offsetTop;



//FUNCTIONS

//enable mobile menu function

// enables mobile menu on when used in media query 468px viewport

function showMobileNav() {
  
  var x = document.getElementById("mobileLinks");
  
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  
} //END mobileNavFunction



// sticky menu function if needed
/* function deskNavFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("make_sticky")
  } else {
    navbar.classList.remove("make_sticky");
  }
} */