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

Data to include:

Name
National #
Type
PokeDex Entry





const pokeFacts = [
    {name: "Eevee", 
    type: [pokeType[11], pokeType[10]],  
    region: `${pokeRegion[0]}`, 
    imgSrc: "/assets/sprites/700.png"},

    {name: "Sylveon", 
    type: [pokeType[11], pokeType[10]], 
    region: `${pokeRegion[8]}`, 
    imgSrc: "/assets/sprites/700.png", 
    entry: `Its ribbonlike feelers give off an aura that weakens hostility in its prey, causing them to let down their guard. Then it attacks.`},

    {name: "NAME", 
    type: [pokeType[11], pokeType[10]],  
    region: `${pokeRegion[9]}`, 
    imgSrc: "/assets/sprites/700.png"},

    {name: "NAME", 
    type: [pokeType[11], pokeType[10]],  
    region: `${pokeRegion[10]}`, 
    imgSrc: "/assets/sprites/700.png"},

    {name: "test poke", 
    type: [pokeType[11], pokeType[10]], 
    region: `${pokeRegion[11]}`, 
    imgSrc: "/assets/sprites/700.png"},
];





  grid-template-areas:
  "gridImg gridImg"
  "gridName gridName"
  "gridType gridType"
  "gridDex gridDex";




  /* Top: 0, Right: 20px, Bottom: 0, Left: 20px */

  TOP RIGHT BOTTOM LEFT


template

      {name: "NAME", 
    type: [pokeType[], pokeType[]],  
    imgSrc: "/",
    dex: ""},