const images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];
console.log(chosenImage);
const bgImage= document.createElement("img");
bgImage.src = `${chosenImage}`;
console.log(bgImage);
document.body.appendChild(bgImage);