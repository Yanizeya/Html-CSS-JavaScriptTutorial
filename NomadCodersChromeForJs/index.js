  const title = document.querySelector("#Muyaho");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(event){
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR)
    title.style.color = OTHER_COLOR;
  else {
    title.style.color = BASE_COLOR;
  }
  console.log(currentColor);
}

function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();
