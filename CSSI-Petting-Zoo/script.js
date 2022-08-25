console.log("script running!");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector('#button4');



console.log(button1);
console.log(button2);
console.log(button3);
console.log(button4);
console.log(status2);
console.log(status3);

let carrots = 2;


function handleClick(e){
  
}

button1.addEventListener('click', handleClick);

button1.addEventListener('click', (e)=>{
  console.log("Button 1 clicked");
  alert("Meh-eh-eh-eh-eh-eh-eh-eh")
});

button2.addEventListener('click', handleClick);

button2.addEventListener('click', (e)=>{
  console.log("Button 2 clicked");
  const status2 = document.querySelector("#status2");
  status2.innerHTML = "Thanks for petting the bunny! He looks really happy!"
  
});

button3.addEventListener('click', handleClick);

button3.addEventListener('click', (e)=>{
  console.log("Button 3 clicked");
  const status3 = document.querySelector("#status3");
  carrots = carrots+1;
  status3.innerHTML = "Coco has had " + carrots + " carrots today!"
})

button4.addEventListener('click', (e)=>{
  console.log("Button 4 clicked");
  const zoo = document.querySelector(".container");
  console.log(zoo);
  zoo.innerHTML = `<h1 class="title">Due to some dangerous rulebreaking, the petting zoo is temporarily closed</h1>`;
});