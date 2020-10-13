//navbar snaping
window.onscroll = function() {myFunction()};
  
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop-70;
  
function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.remove("sticky");
      navbar.classList.add("hidden")
    }
  }

  