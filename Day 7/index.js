const wishlist = [
  {
    image: "https://images.expertreviews.co.uk/wp-content/uploads/2022/08/m2_macbook_air_2022_review_0.jpg", 
    name: "Macbook Air M2",
    price: "£1,399",
  },
  // TODO: Add more items here
  {
    image: "https://cdn.mos.cms.futurecdn.net/NAahj3U2ywcAiD5sYCAGZS-1200-80.jpg", 
    name: "Playstation 5",
    price: "£479.99",
  },
  {
    image: "https://www.driving.co.uk/wp-content/uploads/sites/5/2021/10/Porsche-992-911-GT3-review-13.jpg", 
    name: "Porsche 911 GT3",
    price: "£146,400",
  },
  {
    image: "https://cdn.carbuzz.com/gallery-images/1600/831000/800/831844.jpg", 
    name: "Audi Rs7",
    price: "£115,225",
  }
];

/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/

// Declare the append
let wishes = document.querySelector(".wishlist");

wishlist.forEach((product) => {
  wishes.innerHTML += `
    <div class="allwish">
      <img class="snow" src= https://i.postimg.cc/pdd3jLfh/5a1cfca10e0722-0430719715118491210575.png alt="snow">
      <img src= ${product.image} alt="Car">


      <h1>
        <i class="uil uil-location-arrow"></i>
        Name:  ${product.name}
      </h1>
      <p>
        <i class="uil uil-tag-alt"></i>
        <span> ${product.price}</span>
      </p>

      <div class="actions">
        <i class="uil uil-link press"></i>
        <i class="uil uil-heart press"></i>
      </div>

      <button>Buy now</button>
    </div>
  `;  
});
