// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData;

fetch("color-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (colorData = data));

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all-colors") {
    allColors();
  } else if (selection === "bright-colors") {
    brightColors();
  } else if (selection === "red-pink-families") {
    redPinkFamilies();
  } else if (selection === "family-search") {
    familySearch();
  } else if (selection === "start-letter-search") {
    startLetterSearch();
  }
}

// MENU FUNCTIONS
function allColors() {
  // Display Name and Family of All Colors
  outputEl.innerHTML = "";
  for (let i = 0; i < colorData.length; i++) {
    outputEl.innerHTML += `<div>${colorData[i].name}, ${colorData[i].family}</div>`;
  };
}

function brightColors() {
  // Display Name and Brightness of All Colors with a Brightness of 200 and Higher
  outputEl.innerHTML = "";
  for (let i = 0; i < colorData.length; i++) {
  if (colorData[i].brightness > 200) {
    outputEl.innerHTML += `<div>${colorData[i].name}, ${colorData[i].brightness}</div>`
  };
}
}

function redPinkFamilies() {
  // Count Colors in Red/Pink Families
  let index = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === "Red") {
    index = index + 1;
    } else if (colorData[i].family === "Pink") {
    index = index + 1;
    }
  }
  outputEl.innerHTML = `The total number of red and pink colors is ${index}.`
}

function familySearch() {
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
  outputEl.innerHTML = "";
  let colorToSearch = prompt("Enter a color family to search for.");
  let index = 0;
    for (let i = 0; i < colorData.length; i++) {
      if (colorData[i].family === colorToSearch) {
      outputEl.innerHTML += `<div>${colorData[i].name}, ${colorData[i].family}</div>`;
      index++;
    }
    }
  if (outputEl.innerHTML == "") {
    outputEl.innerHTML = `No colors of family ${colorToSearch} found.`;
  }
}

function startLetterSearch() {
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML = "";
  let letter = prompt("Enter a starting letter to search for.")
  let index = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].name[0] === letter) {
      outputEl.innerHTML += `<div>${colorData[i].name}, ${colorData[i].family}, ${i}</div>`;
      index++;
    }
  }
}
