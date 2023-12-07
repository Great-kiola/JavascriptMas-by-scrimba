const wishlist = [
  {
    name: "Macbook Air M2",
    price: "£1,399",
  },
  {
    name: "Playstation 5",
    price: "£479.99",
  },
  {
    name: "Porsche 911 GT3",
    price: "£146,400",
  },
  {
    name: "Audi Rs7",
    price: "£115,225",
  },
  // TODO: Add more items her
];

/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/

// Declare the append
let wishes = document.querySelector(".wishlist");

wishlist.forEach(({ name, price }) => {
//   wishes.insertAdjacentHTML("afterbegin", `

//         <h1>${name}</h1>
//         <h1>${price}</h1>
    
//     `);
  // wishes.appendChild(products.name);

  // console.log(products.name);
  // console.log(products.price);
});

// for (let i = 0; i < wishlist.length; i++) {
//     let myWishes = wishlist[i];
//     console.log(myWishes.toString());

//     wishes.innerHTML = myWishes.toString();
// }
