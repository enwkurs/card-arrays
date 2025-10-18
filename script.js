// Hente et element = Hente
// const hamburgerImg = document.querySelector("#hamburgerImg");

// Alternativ 1:
// Ha en funksjon = Modifiserer
// Laget en funksjon som henter navList-elementet og bytter klassenavn for synlig/usynlig
// function hamburgerToggle() {
//   console.log("Hi from hamburgerToggle");

  // const navListElement = document.querySelector(".navList"); // Bevist brukt klasse for kun et element med det klassenavnet
  // console.log(navListElement);

  // Metode 1: Skrive CSS i JS som blir inline-CSS
//   navListElement.style.display = "flex";
//   navListElement.style.flexDirection = "column";
// }

// Aktiverer en funksjon = Sender
// hamburgerImg.addEventListener("click", hamburgerToggle);

// 
//
//

/*
0 Normal
1 Fire
2 Water
3 Electric 
4 Grass
5 Ice
6 Fighting 
7 Poison 
8 Ground 
9 Flying 
10 Psychic 
11 Bug 
12 Rock 
13 Ghost 
14 Dragon 
15 Dark 
16 Steel 
17 Fairy
*/


const pokeType = [ "assets/types/normal.png", "assets/types/fire.png", "assets/types/water.png", "assets/types/electric.png", "assets/types/grass.png", "assets/types/ice.png", "assets/types/fighting.png", "assets/types/poison.png", "assets/types/ground.png", "assets/types/flying.png", "assets/types/psychic.png", "assets/types/bug.png", "assets/types/rock.png", "assets/types/ghost.png", "assets/types/dragon.png", "assets/types/dark.png", "assets/types/steel.png", "assets/types/fairy.png" ];
console.log(pokeType);


/*
0	Kanto
1	Johto
2	Hoenn
3	Sevii Islands
4	Sinnoh
5	Unova
6	Kalos
7	Alola
8	Galar
9	Hisui
10	Paldea
11	Prakraisburg
12	Kitakami
*/

const pokeRegion = [ "Kanto", "Johto", "Hoenn", "Sevii Islands", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Hisui", "Paldea", "Prakraisburg", "Kitakami"];
console.log(pokeRegion);



const pokeFacts = [
    {name: "Eevee", type: `${pokeType[0]} ${pokeType[2]}`, region: `${pokeRegion[0]}`, imgSrc: "/assets/sprites/700.png"},
    {name: "Flareon", type: `${pokeType[1]}`, region: `${pokeRegion[1]}`, imgSrc: "/assets/sprites/700.png"},
    {name: "Vaporeon", type: `${pokeType[2]}`, region: `${pokeRegion[2]}`, imgSrc: "/assets/sprites/700.png"},
    {name: "Jolteon", type: `${pokeType[3]}`, region: `${pokeRegion[3]}`, imgSrc: "/assets/sprites/700.png"},
    {name: "Umbreon", type: `${pokeType[4]}`, region: `${pokeRegion[4]}`, imgSrc: "/assets/sprites/700.png"},
    {name: "Espeon", type: `${pokeType[5]}`, region: `${pokeRegion[5]}`, imgSrc: "/assets/sprites/700.png"},
    {name: "Leafeon", type: `${pokeType[6]}`, region: `${pokeRegion[6]}`, imgSrc: "/assets/sprites/700.png"},
    {name: "Glaceon", type: `${pokeType[7]}`, region: `${pokeRegion[7]}`, imgSrc: "/assets/sprites/700.png"},
    {name: "Sylveon", type: `${pokeType[8]}`, region: `${pokeRegion[8]}`, imgSrc: "/assets/sprites/700.png", entry: `Its ribbonlike feelers give off an aura that weakens hostility in its prey, causing them to let down their guard. Then it attacks.`},
    {name: "NAME", type: `${pokeType[9]}`, region: `${pokeRegion[9]}`, imgSrc: "/assets/sprites/700.png"},
    {name: "NAME", type: `${pokeType[10]}`, region: `${pokeRegion[10]}`, imgSrc: "/assets/sprites/700.png"},
    {name: "test poke", type: [`${pokeType[11]}`, `${pokeType[10]}`], region: `${pokeRegion[11]}`, imgSrc: "/assets/sprites/700.png"},
];
console.log(pokeFacts);
console.log(`Check Type 18 source ${pokeType[18]}`);

// Set up a class or variable in CSS for color according to type???
// for loop for type when type has more than one?


const gridContainer = document.querySelector("#gridContainer");

for ( let pokeDex = 0; pokeDex < pokeFacts.length; pokeDex++) {
  console.log("pokeDex");

  // ------------------------------- TEST -----------------------------------------------
  const multiType = pokeFacts[pokeDex].type;
  console.log(`Checking for multi ${multiType}`);

  for ( let typesLoop = 0; typesLoop < multiType.length; typesLoop++ ) {

  }

  // ------------------------------ TEST ------------------------------------


      // Create pokeType img
      const pokeType = document.createElement("img");
      pokeType.src = multiType;






  // Create card div
  const listItem = document.createElement("div");
  listItem.className = "pokeCard";

  // Create sprite img
  const pokeSprite = document.createElement("img");
  pokeSprite.src = pokeFacts[pokeDex].imgSrc;

  // Create name h2
  const pokeName = document.createElement("h2");
  pokeName.textContent = `Name: ${pokeFacts[pokeDex].name}`;

  // // Create pokeType img
  // const pokeType = document.createElement("img");
  // pokeType.src = pokeFacts[pokeDex].type;

  // // Create region p
  // const pokeRegion = document.createElement("p"); // consider something other than p for this info
  // pokeRegion.textContent = `Region: ${pokeFacts[pokeDex].region}`;

  // Create entry p
  const pokeEntry = document.createElement("p");
  pokeEntry.textContent = `${pokeFacts[pokeDex].entry}`;
  console.log(pokeEntry);


  gridContainer.appendChild(listItem);
  listItem.appendChild(pokeSprite);
  listItem.appendChild(pokeName);
  listItem.appendChild(pokeType);
  // listItem.appendChild(pokeRegion);
  listItem.appendChild(pokeEntry);
}


// CARD GENERATION TEST
// const disneyCharacters = [
//   { type: "mouse", name: "Mickey" },
//   { type: "mouse", name: "Minnie" },
//   { type: "dog", name: "Pluto" },
//   { type: "duck", name: "Donald" },
//   { type: "duck", name: "Daisy" },
//   { type: "dog", name: "Goofy" },
//   { type: "cat", name: "Figaro" },
//   { type: "chipmunk", name: "Chip" },
//   { type: "chipmunk", name: "Dale" },
//   { type: "bird", name: "Clara Cluck" },
// ];
// console.log(disneyCharacters);
// console.log(disneyCharacters[4].name);

// Make the data show on the HTML document
// const gridContainer = document.querySelector("#gridContainer"); // Point to the container that holds the cards "gridContainer"

// Set up the loop that pulls info from the array
// for ( let index = 0; index < disneyCharacters.length; index++) {
  // Set up the function that creates the new elements
// const listItem = document.createElement("div");
// listItem.className = "pokeCard";

// const pokeName = document.createElement("h2");
// pokeName.textContent = `Name: ${disneyCharacters[index].name}`;

// const pokeType = document.createElement("p");
// pokeType.textContent = `Type: ${disneyCharacters[index].type}`;

// gridContainer.appendChild(listItem);
// listItem.appendChild(pokeName);
// listItem.appendChild(pokeType);

// };


// Note: need to figure out how to apply the right styling to each card Key
// For example: Name should be h2, type should be <p>
// Ez4ME