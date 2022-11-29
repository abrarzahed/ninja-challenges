// dom elements
const buttons = document.querySelectorAll("button");
const textarea = document.querySelector("textarea");
const output = document.querySelector(".output");

// flavours
const flavours = {
  ninja: ["dojo", "shogun", "shinobi", "samuri", "shuriken"],
  pokemon: ["pika", "pokeball", "pokedex", "evolve", "ash", "gym"],
  space: ["universe", "galaxy", "telescope", "comet", "stars"],
};

// functions
const flavourize = (inputText, flavour) => {
  const inputArr = inputText.split(" ");
  let newElem = flavour[0];

  for (let i = 0; i < inputArr.length; i++) {
    newElem = flavour[Math.floor(Math.random() * flavour.length)];
    if (inputArr[i].trim() === "Lorem") {
      inputArr[i] = flavour[0];
    }
    if (i % 2 == 0) {
      inputArr.slice(i, 0, newElem);
    }
  }
  updateOutput(inputArr.join(" "));
};

const updateOutput = (text) => {
  output.textContent = text;
};

// event listener
buttons.forEach((b) => {
  b.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedTheme = flavours[e.target.dataset.flavour];
    flavourize(textarea.value, selectedTheme);
    // console.log(selectedTheme);
  });
});
