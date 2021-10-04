import { getRandomInt } from "./random.js";
var numberTarget = 1;

const createCardNode = () => {
  const imagen = document.createElement("img");
  // debugger
  imagen.src = `https://source.unsplash.com/random/${getRandomInt()}`;
  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";
  const parrafo = document.createElement("p");
  parrafo.className = "description";
  const text = document.createTextNode(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis ex, repudiandae dolorum illo illum itaque autem eveniet corporis et obcaecati est provident assumenda fuga aut debitis ab vel voluptas."
  );
  parrafo.appendChild(text);
  const card = document.createElement("div");
  card.className = "card";
  card.id = "card"+numberTarget;
  numberTarget += parseInt(1);
  imageContainer.appendChild(imagen);
  card.appendChild(imageContainer);
  card.appendChild(parrafo);

  return card;
};

const mountNode = document.querySelector("#app");
const addCardButton = document.querySelector("#add")
const removeCardButton = document.querySelector("#remove");

const addCard = () => {
  mountNode.appendChild(createCardNode());
};

const removeCard = () => {
  if(numberTarget>1) {
    numberTarget -= parseInt(1);
    const deleteCard =document.getElementById("card"+numberTarget);
    mountNode.removeChild(deleteCard);
  }
}

addCardButton.addEventListener("click", addCard);
removeCardButton.addEventListener("click", removeCard);
