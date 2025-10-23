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


const pokeFacts = [
    {name: "Zubat", 
    type: [pokeType[7], pokeType[9]],  
    imgSrc: "/assets/sprites/zubat1.png",
    dex: "Makes its home in gloomy caves. Atrophied eyes have left this Pokémon blind, so it scans its surroundings via sound waves that it emits from its mouth as it flies."},

    {name: "Golbat", 
    type: [pokeType[7], pokeType[9]], 
    imgSrc: "/assets/sprites/golbat1.png",
    dex: "Golbat bites down on prey with its four fangs and drinks the victim's blood. It becomes active on inky dark moonless nights, flying around to attack people and Pokémon."},

    {name: "Gastly", 
    type: [pokeType[13], pokeType[7]],  
    imgSrc: "/assets/sprites/gastly1.png",
    dex: "It's said that gas emanating from a graveyard was possessed by the grievances of the deceased and thus became a Pokémon."},

    {name: "Haunter", 
    type: [pokeType[13], pokeType[7]],  
    imgSrc: "/assets/sprites/haunter1.png",
    dex: "It strikes at humans from total darkness. Those licked by its cold tongue grow weaker with each passing day until they die."},

    {name: "Gengar", 
    type: [pokeType[13], pokeType[7]],  
    imgSrc: "/assets/sprites/gengar1.png",
    dex: "Possesses potential victims' shadows in an effort to steal away the victims' lives. If your shadow begins to laugh, you must take hold of a protective charm posthaste!"},

    {name: "Cubone", 
    type: [pokeType[8]],  
    imgSrc: "/assets/sprites/cubone.png",
    dex: "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head."},

    {name: "Galarian Articuno", 
    type: [pokeType[10], pokeType[9]],  
    imgSrc: "/assets/sprites/articuno.png",
    dex: "Its feather-like blades are composed of psychic energy and can shear through thick iron sheets as if they were paper."},

    {name: "Umbreon", 
    type: [pokeType[15]],  
    imgSrc: "/assets/sprites/umbreon1.png",
    dex: "It lurks in the dark of night looking for prey. At the moment it pounces, the rings on its body glow dimly but ominously."},

    {name: "Murkrow", 
    type: [pokeType[15], pokeType[9]],  
    imgSrc: "/assets/sprites/murkrow1.png",
    dex: "Feared and loathed by many, it is believed to bring misfortune to all those who see it at night."},

    {name: "Misdreavus", 
    type: [pokeType[13]],  
    imgSrc: "/assets/sprites/misdreavus.png",
    dex: "Misdreavus frightens people with a creepy, sobbing cry. The Pokémon apparently uses its red spheres to absorb the fearful feelings of foes and turn them into nutrition."},

    {name: "Galarian Corsola", 
    type: [pokeType[13]],  
    imgSrc: "/assets/sprites/corsola.png",
    dex: "Sudden climate change wiped out this ancient kind of Corsola. This Pokémon absorbs others' life-force through its branches."},

    {name: "Houndour", 
    type: [pokeType[15], pokeType[1]],  
    imgSrc: "/assets/sprites/houndour1.png",
    dex: "Houndour hunt as a coordinated pack. They communicate with each other using a variety of cries to corner their prey. This Pokémon's remarkable teamwork is unparalleled."},

    {name: "Houndoom", 
    type: [pokeType[15], pokeType[1]],  
    imgSrc: "/assets/sprites/houndoom2.png",
    dex: "Identifiable by its eerie howls, people a long time ago thought it was the grim reaper and feared it."},

    {name: "Sableye", 
    type: [pokeType[15], pokeType[13]],  
    imgSrc: "/assets/sprites/sableye.png",
    dex: "This Pokémon is feared. When its gemstone eyes begin to glow with a sinister shine, it's believed that Sableye will steal people's spirits away."},

    {name: "Shuppet", 
    type: [pokeType[13]],  
    imgSrc: "/assets/sprites/shuppet1.png",
    dex: "Shuppet is attracted by feelings of jealousy and vindictiveness. If someone develops strong feelings of vengeance, this Pokémon will appear in a swarm and line up beneath the eaves of that person's home."},

    {name: "Banette", 
    type: [pokeType[13]],  
    imgSrc: "/assets/sprites/banette.png",
    dex: "It's a stuffed toy that was thrown away and became possessed, ever searching for the one who threw it away so it can exact its revenge."},

    {name: "Duskull", 
    type: [pokeType[13]],  
    imgSrc: "/assets/sprites/duskull1.png",
    dex: "Duskull wanders lost among the deep darkness of midnight. There is an oft-told admonishment given to misbehaving children that this Pokémon will spirit away bad children who earn scoldings from their mothers."},

    {name: "Dusclops", 
    type: [pokeType[13]],  
    imgSrc: "/assets/sprites/dusclops1.png",
    dex: "Dusclops's body is completely hollow—there is nothing at all inside. It is said that its body is like a black hole. This Pokémon will absorb anything into its body, but nothing will ever come back out."},

    {name: "Mismagius", 
    type: [pokeType[13]],  
    imgSrc: "/assets/sprites/mismagus1.png",
    dex: "It appears as if from nowhere—muttering incantations, placing curses, and giving people terrifying visions."},

    {name: "Gothorita", 
    type: [pokeType[10]],  
    imgSrc: "/assets/sprites/gothorita.png",
    dex: "It's said that when stars shine in the night sky, this Pokémon will spirit away sleeping children. Some call it the Witch of Punishment."},

    {name: "Litwick", 
    type: [pokeType[13], pokeType[1]],  
    imgSrc: "/assets/sprites/litwick.png",
    dex: "Litwick shines a light that absorbs the life energy of people and Pokémon, which becomes the fuel that it burns."},

    {name: "Lampent", 
    type: [pokeType[13], pokeType[1]],  
    imgSrc: "/assets/sprites/lampent.png",
    dex: "It lurks in cities, pretending to be a lamp. Once it finds someone whose death is near, it will trail quietly after them."},

    {name: "Chandelure", 
    type: [pokeType[13], pokeType[1]],  
    imgSrc: "/assets/sprites/chandelure.png",
    dex: "It absorbs spirits, which it then burns. By waving the flames on its arms, it puts its foes into a hypnotic trance."},

    {name: "Phantump", 
    type: [pokeType[13], pokeType[4]],  
    imgSrc: "/assets/sprites/phantump1.png",
    dex: "According to old tales, these Pokémon are stumps possessed by the spirits of children who died while lost in the forest."},

    {name: "Pumpkaboo", 
    type: [pokeType[13], pokeType[4]],  
    imgSrc: "/assets/sprites/pumpkaboosmall.png",
    dex: "The light that streams out from the holes in the pumpkin can hypnotize and control the people and Pokémon that see it."},

    {name: "Gourgeist", 
    type: [pokeType[13], pokeType[4]],  
    imgSrc: "/assets/sprites/gourgeistsmall.png",
    dex: "In the darkness of a new-moon night, Gourgeist will come knocking. Whoever answers the door will be swept off to the afterlife."},

    {name: "Sinistea", 
    type: [pokeType[13]],  
    imgSrc: "/assets/sprites/sinistea.png",
    dex: "The soul of someone who died alone possessed some leftover tea. This Pokémon appears in hotels and houses."},

    {name: "Polteageist", 
    type: [pokeType[13]],  
    imgSrc: "/assets/sprites/polteageist.png",
    dex: "Though risky to drink, this Pokémon's tea tastes delicious. Gourmets who have no fear of danger drink Polteageist tea day after day."},

    {name: "Impidimp", 
    type: [pokeType[13], pokeType[17]], 
    imgSrc: "/assets/sprites/impadimp.png",
    dex: "It sneaks into people's homes, stealing things and feasting on the negative energy of the frustrated occupants."},

    {name: "Marshadow", 
    type: [pokeType[6], pokeType[13]],  
    imgSrc: "/assets/sprites/Marshadow.png",
    dex: "It slips into the shadows of others and mimics their powers and movements. As it improves, it becomes stronger than those it's imitating."}
];

// Set up the card grid to populate for each item in the pokeFacts array

const gridContainer = document.querySelector("#gridContainer");

// Get show more button
const showMoreButton = document.querySelector("#showMoreButton");

// Show more?
let cardBatch = 6;
let visibleBatch = 0;

// Show more? Set up the function that controls how many show, the loop should be in this function
function showMoreCards() {
 
  // Show more? - Break into "slices", initial controlled by cardBatch
  // Instead of referencing the whole array, reference this which cuts out a slice of 6 from the array
  const arrayBatch = pokeFacts.slice(visibleBatch, visibleBatch + cardBatch);

  // Let the variable pokeIndex start at the value 0; then if pokeIndex value is less than the length of pokeFacts; increase the value of pokeIndex by 1
  for ( let pokeIndex = 0; pokeIndex < arrayBatch.length; pokeIndex++) {
    const pokeMon = arrayBatch[pokeIndex];
    console.log(`---- Checking PokeCardsInfo Loop ----`);
    console.log(pokeMon.name);

    // Start building HTML elements

    // Create card div
    const listItem = document.createElement("div");
    listItem.classList.add("grid", "pokeCard");

      // Error message - Checking if div has any children, if not, show error
      const errorDiv = document.querySelector("#errorDiv");
      console.log(errorDiv);
      if (listItem.children.length === 0) {
        errorDiv.classList.remove("hide");
      } else {
        errorDiv.classList.add("flex");
      }

    listItem.style.opacity = "0";
    listItem.style.animationDelay = (pokeIndex * .1) + "s";

    // Get sprite
    const pokeSprite = document.createElement("img");
    pokeSprite.src = pokeMon.imgSrc;
    pokeSprite.classList.add("gridImg");

    // Get name
    const pokeName = document.createElement("h2");
    pokeName.textContent = pokeMon.name;
    pokeName.classList.add("gridName");

    // Create the div to hold the type images
    const typesDiv = document.createElement("div");
    typesDiv.classList.add("gridType", "typesDiv");

    // Get type - Type needs its own loop
    const pokeType = pokeMon.type;
    for ( let typeArray = 0; typeArray < pokeType.length; typeArray++ ) {
      console.log(pokeType[typeArray]);

      // Create img element for types
      const pokeTypeImg = document.createElement("img");
      pokeTypeImg.src = pokeType[typeArray];

      // Append types img element
      typesDiv.appendChild(pokeTypeImg);
    }

    // Get pokeDex entry
    const pokeDex = document.createElement("p");
    pokeDex.textContent = pokeMon.dex;
    pokeDex.classList.add("gridDex");


    // Append elements
    gridContainer.appendChild(listItem);
    listItem.appendChild(pokeSprite);
    listItem.appendChild(pokeName);
    listItem.appendChild(typesDiv);
    listItem.appendChild(pokeDex);
  }

  // Keep track of how many cards have been shown
  visibleBatch = visibleBatch + arrayBatch.length;

  // Hide show more button when all cards are visible
  if (visibleBatch >= pokeFacts.length) {
    showMoreButton.style.display = "none";
  };

}


showMoreButton.addEventListener("click", function() {
  showMoreCards();
});

showMoreCards();

