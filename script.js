const jokesArray = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta.",
    "I used to play piano by ear, but now I use my hands and fingers.",
    "Why did the coffee file a police report? It got mugged.",
    "Why don't scientists trust sea atoms? Because they make up everything in the ocean!"
  ];

  const randomColor=[
    "Azure"
    ,"Turquoise"
    ,"Cerulean"
    ,"Aqua"
    ,"Mint Green"
    ,"Sky Blue"
    ,"Ice Blue"
    ,"Lavender"
    ,"Periwinkle"
    ,"Slate Gray"
  ]
  
const random=Math.floor(Math.random()*jokesArray.length);
  
let box=document.getElementById("box");
box.innerHTML=jokesArray[random];


document.body.style.backgroundColor=randomColor[random];
setTimeout(function() {
    location.reload();
}, 5000);


 