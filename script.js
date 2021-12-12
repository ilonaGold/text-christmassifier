const greeting = document.getElementById("greeting");
const container = document.querySelector(".container");
const christmassifierBtn = document.getElementById("christmassifierBtn");
const audio = new Audio("first_noel.mp3");
let audioDuration;

christmassifierBtn.addEventListener("click", christmassifyName);

function christmassifyName() {
  greeting.classList.toggle("christmassified");
  clearTimeout(audioDuration);
  
  if (greeting.classList.contains("christmassified")) {
      christmassifierBtn.textContent = "De-christmassify";
      document.body.style.backgroundColor = "var(--black)";
      document.body.style.backgroundImage = "url(http://www.animationsoftware7.com/img/agifs/snow01.gif)";
      container.style.backgroundImage = "url('christmas.png')";
      container.style.backgroundPosition = "left top";
      container.style.minHeight = "67vh";
      greeting.style.opacity = "0";
      greeting.style.marginBottom = "2.25em";
      audio.play();
      audioDuration = setTimeout(() => {
        christmassifyName()
      }, 171000)
  } else {
      christmassifierBtn.textContent = "Christmassify";
      document.body.style.backgroundColor = "var(--light-green)";
      document.body.style.backgroundImage = "none";
      container.style.backgroundColor = "var(--snow)";
      container.style.backgroundImage = "none";
      container.style.minHeight = "40vh";
      greeting.style.opacity = "1";
      greeting.style.marginBottom = "1em";
      audio.pause();
  }
}