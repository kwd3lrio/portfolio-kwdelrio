
//enable mobile menu function

function showMobileNav() {

    // get open button and drop menu
    var dropMenu = document.getElementById("mobileLinks");
    var openOFF = document.getElementById("openBTN");
      
    if (dropMenu.style.display === "block") {
        
        dropMenu.style.display = "none";        
        openOFF.style.display = "block";        

    } else {
        dropMenu.style.display = "block";
        openOFF.style.display = "none";        
    } 
} // END showMobileNav function

// enables mobile menu on when used in media queries below 650px viewport



// ORIGINAL SHOW Menu function

/* function showMobileNav() {
  
  var x = document.getElementById("mobileLinks");
  
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
    x.style.display = "block";
  } 
} */


// enables desktop nav sticky functionality

// window.onscroll = function() {deskNavFunction()};
// var navbar = document.getElementById("id_desktop_nav");
// var sticky = navbar.offsetTop;


// sticky menu function if needed

/* function deskNavFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("make_sticky")
  } else {
    navbar.classList.remove("make_sticky");
  }
} */