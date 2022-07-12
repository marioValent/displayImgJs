const button = document.getElementById("button");
const imageContainer = document.getElementById("image-container");
const inputNr = document.getElementById("input-number");
let inputPrevValue = 0;

let imgData = [];
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((data) => {
    imgData = data;
  });

const displayImg = (imgObj) => {
  const img = document.createElement("img");
  img.setAttribute("src", imgObj.url);
  img.setAttribute("alt", imgObj.title);
  imageContainer.appendChild(img);
};

const onClick = () => {
  if (inputNr.value !== inputPrevValue) {
    let imgPresent = false;
    inputPrevValue = inputNr.value;
    imageContainer.innerHTML = "";
    for (let i = 0; i < imgData.length; i++) {
      let imgObj = imgData[i];

      if (parseInt(inputNr.value) === imgObj.albumId) {
        displayImg(imgObj);
        imgPresent = true;
      }
    }
    if (!imgPresent) {
      imageContainer.textContent = "album inexistent";
    }
  }
};

button.addEventListener("click", onClick);
