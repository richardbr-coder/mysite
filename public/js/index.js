$(document).ready(function () {
  // Transition effect for navbar and back-to-top icon
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 300) {
      $(".navbar").addClass("solid");
      $(".back-to-top").addClass("visible");
    } else {
      $(".navbar").removeClass("solid");
      $(".back-to-top").removeClass("visible");
    }
  });

  // Scrolling effect for Arrow icons
  $("#scrollIcon").click(function (e) {
    e.preventDefault();
    $.scrollTo($("#about1"), 1000);
  });
  $("#nav-about").click(function (e) {
    e.preventDefault();
    $.scrollTo($("#about1"), 1000);
  });
  $("#nav-skills").click(function (e) {
    e.preventDefault();
    $.scrollTo($("#skills1"), 1000);
  });
  $("#nav-photography").click(function (e) {
    e.preventDefault();
    $.scrollTo($("#photography1"), 1000);
  });
  $("#nav-development").click(function (e) {
    e.preventDefault();
    $.scrollTo($("#development1"), 1000);
  });
  $("#nav-contact").click(function (e) {
    e.preventDefault();
    $.scrollTo($("#contact1"), 1000);
  });
  $(".navbar-brand").click(function (e) {
    e.preventDefault();
    $.scrollTo(0, 1000);
  });
});

//I am a developer typing
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Developer",
  "Designer",
  "Programmer",
  "Photographer",
  "Drone Pilot",
  "Husband",
  "Dad",
];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

/*
    Landed by Yasin Burak KALKAN
    Yasin Burak Kalkan | Front-End Developer
    www.yasinkalkan.com
*/

$(document).ready(documentReady);

function documentReady() {
  var characterCollection = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "Y",
    "Z",
  ];

  var currentText = $(".effect-text-container h1").text();

  var currentTextCollection = new Array();

  var characterCount = 0;

  var characterSpeed = 500;

  pushCurrentTextChrachters();

  function pushCurrentTextChrachters() {
    for (var i = 0; i < currentText.length; i++) {
      var currentCharacter = currentText.slice(i, i + 1);

      currentTextCollection.push(currentCharacter);
    }
  }

  var characterCountIncreaseInterval = setInterval(
    characterCountIncrease,
    characterSpeed
  );

  function characterCountIncrease() {
    if (characterCount == currentTextCollection.length) {
      clearInterval(characterCountIncreaseInterval);

      clearInterval(setRandomTextInterval);
    }

    characterCount++;
  }

  function getRandomText() {
    var result = "";

    if (characterCount == 0) {
      for (var i = 0; i < currentTextCollection.length; i++) {
        var randomCharacter =
          characterCollection[
            Math.floor(Math.random() * characterCollection.length)
          ];

        result += randomCharacter;
      }
    } else {
      result = currentText.slice(0, characterCount);

      for (var i = 0; i < currentTextCollection.length - characterCount; i++) {
        var randomCharacter =
          characterCollection[
            Math.floor(Math.random() * characterCollection.length)
          ];

        result += randomCharacter;
      }
    }

    return result;
  }

  var setRandomTextInterval = setInterval(setRandomText, 50);

  function setRandomText() {
    console.log(getRandomText());

    $(".effect-text-container h1").text(getRandomText());
  }
}



