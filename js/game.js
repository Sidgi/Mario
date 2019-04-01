let start = 1;
let startVerical =1;
let startBoo = 1;
let startVericalBoo =1;
let Mario = document.getElementById('mario');
let Boo = document.getElementById('boo');
let MarioRadius = Mario.offsetWidth;
document.addEventListener("keydown", keyMovement);
let positionMario = Mario.getBoundingClientRect();
//  let positionBoo = Boo.getBoundingClientRect();

function keyMovement(e) {
 e.preventDefault();
if(e.key === "Right" || e.key === "ArrowRight") {  
    start++;
      Mario.style.left = "5%";
      Mario.style.left = addNumbers(Mario.style.left,start) + "%";
      touch();
}
 else if(e.key === "Left" || e.key === "ArrowLeft")
  {
      start--;
      Mario.style.left = "5%";
      Mario.style.left = addNumbers(Mario.style.left,start) + "%";
      touch();
  }
  else if(e.code === 'Space'){
      Mario.style.top= Mario.offsetTop - Boo.offsetHeight + 'px';
      touch();
  }
  }

function touch(){
if(Mario.offsetLeft + 63 > Boo.offsetLeft && Mario.offsetTop === Boo.offsetTop){
alert("You lost");
document.location.reload();
}
}


// This function adds to the value of initial value of margin
function addNumbers(initialMargin,addValue){
let array = initialMargin.split('');
for( let i = 0; i<array.length; i++){
if(array[i] === '%'){
array.splice(i);
}
}
join = Number(array.join(''));
return  join+addValue;
}
// setInterval(keyMovement(), 10);
// ######## delete