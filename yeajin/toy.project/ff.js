const cardbg=document.querySelector("#textDiv1");

function cardopen(){
  cardbg.style.backgroundColor="red";
}

const images=["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg","011.jpg","012.jpg","013.jpg","014.jpg","015.jpg","016.jpg","017.jpg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];