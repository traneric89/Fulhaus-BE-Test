document.querySelector(".list");
document.querySelector("#list-btn");

fetch("http://localhost:3000/list")
  .then((response) => response.json())
  .then((json) => console.log(json));
