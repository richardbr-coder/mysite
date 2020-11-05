$(document).ready(function() {

  // Transition effect for navbar and back-to-top icon
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 300) { 
        $('.navbar').addClass('solid');
        $('.back-to-top').addClass('visible'); 
    } else {
        $('.navbar').removeClass('solid');
        $('.back-to-top').removeClass('visible');  
    }

  });


  // Scrolling effect for Arrow icons
  $("#scrollIcon").click(function(e) {
      e.preventDefault();
      $.scrollTo($("#about"), 1000);
  });
  $("#nav-about").click(function(e) {
      e.preventDefault();
      $.scrollTo($("#about"), 1000);
  });
  $("#nav-portfolio").click(function(e) {
      e.preventDefault();
      $.scrollTo($("#portfolio"), 1000);
  });
  $("#nav-contact").click(function(e) {
      e.preventDefault();
      $.scrollTo($("#contact"), 1000);
  });
  $(".navbar-brand").click(function(e) {
      e.preventDefault();
      $.scrollTo(0, 1000);
  });
    
});


//I am a developer typing
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  
  const textArray = ["Developer", "Designer", "Programmer", "Photographer", "Drone Pilot", "Husband", "Dad"];
  const typingDelay = 150;
  const erasingDelay = 100;
  const newTextDelay = 1000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
      if (charIndex > 0) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if(textArrayIndex>=textArray.length) textArrayIndex=0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
  });

  




  const ctx = document.getElementById("myChart").getContext("2d");
const data = {
  labels: ["Website Design", "UX Design", "Marketing", "Javascript", "HTML & CSS", "Ruby on Rails", "Tech Demos", "Leading Teams"],
  datasets: [{
    label: "Percieved Interest",
    fillColor: "rgba(43,176,212,.4)",
    strokeColor: "rgba(43,176,212,1)",
    pointColor: "rgba(43,176,212,1)",
    pointHighlightStroke: "rgba(43,176,212,1)",
    data: [100, 70, 85, 90, 95, 75, 90, 100]
  }, {
    label: "Relative Skill",
    fillColor: "rgba(140,200,50,.4)",
    strokeColor: "rgba(140,200,50,1)",
    pointColor: "rgba(140,200,50,1)",
    pointHighlightStroke: "rgba(140,200,50,1)",
    data: [85, 75, 70, 80, 85, 60, 75, 50]
  }]
};
new Chart(ctx).Radar(data, {
  animationSteps: 30,
  animationEasing: "easeInOutExpo",
  responsive: true,
  showTooltips: true,
  scaleOverride: true,
  scaleSteps: 5,
  scaleStepWidth: 20,
  scaleStartValue: 0,
  scaleLineColor: "#e2bf96b4",

  angleShowLineOut: true,
  angleLineWidth: 1,
  angleLineColor: "rgba(200,200,250,.15)",
  pointLabelFontFamily: "'freight-sans-pro', Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif",
  pointLabelFontSize: 14,
  pointLabelFontColor: "#e2bf96b4",
  pointDot: false,
  datasetStrokeWidth: 1
});