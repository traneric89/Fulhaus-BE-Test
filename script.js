let listDiv = document.querySelector(".list");
let listBtn = document.querySelector("#list-btn");

listBtn.addEventListener("click", () => getList());

const getList = async () => {
  const res = await fetch("http://localhost:3000/list");
  const { data } = await res.json();
  listDiv.innerHTML = data;
};
