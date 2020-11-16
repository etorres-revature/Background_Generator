const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

console.log("CSS:", css);
console.log("color1:", color1);
console.log("color2:", color2);

color1.addEventListener("input", () => {
  console.log("color one input", color1.value);
});

color2.addEventListener("input", () => {
  console.log("color two input", color2.value);
});
