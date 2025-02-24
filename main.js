let icone = document.querySelector(".iccone i");

let input = document.querySelector("input");
let inputIcone = document.querySelector(".input i");
let theHerader = document.querySelector(".container");
let thetext = document.querySelectorAll("a");
let h2 = document.querySelectorAll(".heroInfo h2");
let h22 = document.querySelector(".PhoneContainer h1");
let before = document.querySelector(".secendSection::before");
let sun = false;

icone.addEventListener("click", () => {
  sun = !sun;
  console.log(sun);
  if (sun === true) {
    icone.className = "fa-solid fa-moon";
    icone.className = "fa-solid fa-moon";
    icone.style.color = "white";
    inputIcone.style.color = "white";
    input.style.color = "white";

    document.body.style.backgroundColor = "black";
    theHerader.style.backgroundColor = "black";
    thetext.forEach((el) => {
      el.style.color = "white";
    });
    h2.forEach((el) => {
      el.style.color = "white";
    });
    h22.style.color = "white";
  } else {
    icone.className = "fa-solid fa-sun";
    icone.className = "fa-solid fa-sun";
    icone.style.color = "black";
    inputIcone.style.color = "black";
    input.style.color = "black";
    document.body.style.backgroundColor = "white";
    theHerader.style.backgroundColor = "white";
    thetext.forEach((el) => {
      el.style.color = "black";
    });
    h2.forEach((el) => {
      el.style.color = "black";
    });
    h22.style.color = "black";
  }

  //   if(icone.className="fa-solid fa-sun"){

  //     }
  //     else{

  //     }

  console.log("zbi");
});
