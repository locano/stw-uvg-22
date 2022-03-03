export const newCard = (title, description, container) => {
  var card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("mb-3");
  card.style.width = "350px";
  card.style.margin = "auto";

  var cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  var cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = title;

  var cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerHTML = description;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(cardBody);

  container.appendChild(card);
};
