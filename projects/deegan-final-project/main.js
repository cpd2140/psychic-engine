// Generate images
const items = [
  {
    name: "Apple",
    colors: ["red"],
  },
  {
    name: "Arugula",
    colors: ["green"],
  },
  {
    name: "Avocado",
    colors: ["green"],
  },
  {
    name: "Basil",
    colors: ["green"],
  },
  {
    name: "Bay Leaf",
    colors: ["green"],
  },
  {
    name: "Beets",
    colors: ["purple", "green"],
  },
  {
    name: "Bok Choy",
    colors: ["purple", "green"],
  },
  {
    name: "Fall Red Cabbage",
    colors: ["green", "red"],
  },
  {
    name: "Fava Beans",
    colors: ["green"],
  },
  {
    name: "Pole Beans",
    colors: ["green"],
  },
  {
    name: "Spring Cabbage",
    colors: ["green"],
  },
  {
    name: "Summer Cabbage",
    colors: ["green", "yellow"],
  },
  {
    name: "Carrots",
    colors: ["green", "orange"],
  },
  {
    name: "Bok Choy",
    colors: ["green"],
  },
  {
    name: "Celery",
    colors: ["green"],
  },
  {
    name: "Chamomile",
    colors: ["green", "white"],
  },
  {
    name: "Cilantro",
    colors: ["green"],
  },
  {
    name: "Corn",
    colors: ["green"],
  },
  {
    name: "Eggplant",
    colors: ["green", "purple"],
  },
  {
    name: "Eucalyptus",
    colors: ["green", "white"],
  },
  {
    name: "Flax",
    colors: ["green", "white"],
  },
  {
    name: "Garlic",
    colors: ["green"],
  },
  {
    name: "House Leek",
    colors: ["green", "white"],
  },
  {
    name: "Leek",
    colors: ["green"],
  },
  {
    name: "Kale",
    colors: ["green", "purple"],
  },
  {
    name: "Lime",
    colors: ["green"],
  },
  {
    name: "Malabar Spinach",
    colors: ["green"],
  },
  {
    name: "Mango",
    colors: ["green"],
  },
  {
    name: "Musk Melon",
    colors: ["green", "white"],
  },
  {
    name: "Mustard",
    colors: ["green", "yellow"],
  },
  {
    name: "Onion",
    colors: ["green"],
  },
  {
    name: "Orange",
    colors: ["green", "orange"],
  },
  {
    name: "Oregano",
    colors: ["green"],
  },
  {
    name: "Red Chili",
    colors: ["green", "red"],
  },
  {
    name: "Rhubarb",
    colors: ["green"],
  },
  {
    name: "Rutabaga",
    colors: ["green"],
  },
  {
    name: "Scallions",
    colors: ["green"],
  },
  {
    name: "Scallions",
    colors: ["green"],
  },
  {
    name: "Shallots",
    colors: ["green"],
  },
  {
    name: "Spinach",
    colors: ["green"],
  },
  {
    name: "Summer Squash",
    colors: ["green", "yellow"],
  },
  {
    name: "Sunflower",
    colors: ["green", "yellow"],
  },
  {
    name: "Sweet Potato",
    colors: ["green"],
  },
  {
    name: "Thyme",
    colors: ["green", "purple"],
  },
  {
    name: "Tomato",
    colors: ["green", "red"],
  },
  {
    name: "Turnip",
    colors: ["green"],
  },
  {
    name: "Watermelon",
    colors: ["green"],
  },
  {
    name: "Wheat",
    colors: ["green", "white"],
  },
  {
    name: "Winter Jasmine",
    colors: ["yellow"],
  },
  {
    name: "Winter Squash",
    colors: ["green"],
  },
  {
    name: "Zucchini",
    colors: ["green"],
  },
];
const container = document.querySelector("#grid-container");
for (const item of items) {
  // Create figure
  const figure = document.createElement("figure");
  figure.classList.add("item");
  figure.setAttribute("data-filter", item.name.toLowerCase());
  // Create image
  const img = document.createElement("img");
  img.src = "images/" + item.name.toUpperCase() + ".jpg";
  img.alt = item.name;
  img.classList.add("item-img");
  figure.appendChild(img);
  // Create break
  const br = document.createElement("br");
  // Create heading
  const p = document.createElement("p");
  p.textContent = item;
  // Create figcaption
  const figCaption = document.createElement("figcaption");
  // Add elements to figure caption
  figCaption.appendChild(br);
  figCaption.appendChild(p);
  p.innerText = item.name;
  // Add figcaption to figure
  figure.appendChild(figCaption);
  // Add figure to container
  container.appendChild(figure);
}
// Filter images
const buttons = document.querySelectorAll(".btn");
const plants = document.querySelectorAll(".item");
buttons.forEach(function (button) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    // Remove active class from all buttons
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    // Add active class to clicked button
    button.classList.add("active");
    // Get data-filter attribute value of clicked button
    plants.forEach((plant) => {
      const plantName = plant.getAttribute("data-filter");
      const item = items.find(
        (item) => item.name.toLowerCase() === plantName
      );
      const clickedColor = button.textContent.toLowerCase();
      const hasColor = item?.colors.includes(clickedColor);
      if (hasColor || button.textContent.toLowerCase() === "all") {
        plant.style.display = "block";
      } else {
        plant.style.display = "none";
      }
    });
  });
});
const modal = document.querySelector("#modal");
const modalImg = document.querySelector("#modal-img");
const modalClose = document.querySelector("#modal-close");
const modalBack = document.querySelector("#modal-backdrop");
modalClose.addEventListener("click", (e) => {
  document.body.style.overflow = "visible";
  modal.classList.remove("active");
});
modalBack.addEventListener("click", (e) => {
  document.body.style.overflow = "visible";
  modal.classList.remove("active");
});
plants.forEach((plant) => {
  plant.addEventListener("click", (e) => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    const plantName = plant.getAttribute("data-filter");
    const item = items.find(
      (item) => item.name.toLowerCase() === plantName
    );
    modalImg.src = "/psychic-engine/images/" + item.name.toUpperCase() + "_large.jpg";
  });
});