const xmasGifts = ['guitar 🎸', 'skates ⛸️', 'bear 🧸', 'magnet 🧲', 'laptop 💻', 'games console 🎮 ', 'jewellery 💍', 'kite 🪁']
xmasGifts.splice(3, 1); // removed 1 value from index 3
xmasGifts.push("scarf 🧣");  // Add scarf to the end of the array

/**
 * Challenge:
 * 1. Sort the array twice. Alphabetically and reverse alphabetically.  
**/

const sortedAZ = xmasGifts.sort();
console.log('A-Z: ', sortedAZ)
//["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "scarf 🧣", "skates ⛸️"]

// const sortedZA =  xmasGifts.reverse() /* sort using reverse */
const sortedZA = xmasGifts.sort(function (a, b) {
  if (a > b) {
    return -1
  } else {
    return 1;
  }
})

/* write code here */
console.log('Z-A: ', sortedZA)
//["skates ⛸️", "scarf 🧣", "laptop 💻", "kite 🪁", "jewellery 💍", "guitar 🎸", "games console 🎮 ", "bear 🧸"]