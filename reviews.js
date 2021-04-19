// local reviews data
const reviews = [
  {
    id: 1,
    name: "Bread",
    img: "images/bread-removebg-preview.png",
    text:
      "Bread is a type of baked food. It is mainly made from dough, which is made mainly from flour and water. The yeast produces gas that makes the dough lighter. Leavened bread can be made into larger loaves baked in an oven.",
  },
  {
    id: 2,
    name: "Mix Fruit Jam",
    img: "/images/jam.png",
    text:
      "Kissan Mixed Fruit Jam is a delicious blend of 8 different fruits Pineapple, Orange, Apple, Grape, Mango, Pear, Papaya, and Banana. With Kissan's expertise in preserving 100% real Fruits since 1934, our Mixed Fruit Jam enables you to enjoy the taste of seasonal fruits throughout the year.",
  },
  {
    id: 3,
    name: "Peanut butter",
    img: "/images/butter-removebg-preview.png",
    text:
      "A 100g portion of peanut butter contains (4): Carbohydrate: 20 grams of carbs (13% of calories), 6 of which are fiber. Protein: 25 grams of protein (15% of calories), which is quite a lot compared to most other plant foods. Fat: 50 grams of fat, totaling about 72% of calories.",
  },
  {
    id: 4,
    name: "Gulabjamun",
    img: "/images/gulabjamun-removebg-preview.png",
    text:
      "The word Gulab is derived from the Persian words gol (flower) and āb (water), referring to the rose water-scented syrup. Jamun or jaman is the Hindi word for Syzygium jambolanum, an Indian fruit with a similar size and shape, commonly known as black plum. Jamun is also defined as a fried delicacy in sugar syrup.",
  },
  {
    id: 5,
    name: "Maggi",
    img: "images/maggi-removebg-preview.png",
    text:
      "The Maggi is an instant and delicious food product containing different types of nutrients and fibres,the ingredients used to make maggi-noodles are wheat flour, palm oil, salt, and less than 2% of sugar,hydrolised peanut protein, onion powder, cornstarch, wheat gluten, spices, potassium chloride,coriander and etc.",
  },
];

const title = document.getElementById("title");
const img = document.getElementById("img");
const name = document.getElementById("name");
const text = document.getElementById("text");
const previous = document.getElementById("pre-btn");
const next = document.getElementById("next-btn");

var currentitem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentitem];
  name.textContent = item.name;
  img.src = item.img;
  text.textContent = item.text;
});

function show(items) {
  const item = reviews[items];
  name.textContent = item.name;
  img.src = item.img;
  text.textContent = item.text;
}

next.addEventListener("click", function () {
  currentitem = currentitem + 1;
  // console.log(currentitem);
  if (currentitem > reviews.length - 1) {
    currentitem = 0;
  }
  show(currentitem);
});

previous.addEventListener("click", function () {
  currentitem = currentitem - 1;
  if (currentitem < 0) {
    currentitem = reviews.length - 1;
  }
  show(currentitem);
});
