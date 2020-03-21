const form = document.querySelector("form");
const memeSpace = document.querySelector("#memespace");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const memeDiv = document.createElement("div");
  const memeImg = document.createElement("img");
  const topTxt = document.createElement("h3");
  const bottomTxt = document.createElement("h3");
  const memeDel = document.createElement("div");

  const imgLink = document.querySelector("#memebackground");
  const topWrds = document.querySelector("#toptext");
  const bottomWrds = document.querySelector("#bottomtext");
  const memeColor = document.querySelector("#memetxtcolor");

  memeImg.src = imgLink.value;
  topTxt.innerText = topWrds.value;
  bottomTxt.innerText = bottomWrds.value;
  topTxt.style.color = memeColor.value;
  bottomTxt.style.color = memeColor.value;
  memeDel.innerText = "X";

  memeDiv.classList.add("memediv");
  memeImg.classList.add("memeimg");
  topTxt.classList.add("memetexttop");
  bottomTxt.classList.add("memetextbottom");
  memeDel.classList.add("delete");
  // memeDel.classList.add("delete");

  memeDiv.append(memeImg);
  memeDiv.append(topTxt);
  memeDiv.append(bottomTxt);
  memeDiv.append(memeDel);

  memeSpace.append(memeDiv);

  form.reset();
});

memeSpace.addEventListener("click", function (e) {
  const delEl = e.target.parentNode.querySelector(".delete");

  if (delEl.classList.contains("delete")) {
    delEl.parentElement.remove();
  }
});