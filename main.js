let icone = document.getElementById("icone");
let ul = document.getElementById("ul");
icone.addEventListener("click", () => {
  console.log("hhhh");
  ul.classList.toggle("show");
  icone.style.zIndex = "1";
  icone.style.color = "#2bb32b";
});
