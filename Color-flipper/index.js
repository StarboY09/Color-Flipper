var color = [
  "rebeccapurple",
  "#663399",
  "Jacarta",
  "#3b246b",
  "Vivid Violet",
  "#773399",
  "Sapphire",
  "#334d99",
  "Astronaut",
  "#24366b",
  "Astral",
  "#338099",
  "Sycamore",
  "#997f33",
];

const rd = () => {
  let a = Math.floor(Math.random() * 7);
  if (a % 2 != 0) {
    return a - 1;
  }
  return a;
};

function change() {
  let a = rd();
  document.getElementsByClassName("background")[0].style.backgroundColor =
    color[a + 1];
  document.getElementsByClassName("name")[0].textContent = color[a];
}
