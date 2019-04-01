function runClouds(){
 setInterval(function move() {
      let start = 0;
      const cloud = document.getElementById('cloud');
      let ids;
      ids = setInterval(cloudWay,50);
      function cloudWay() {
      const screen = 130;
      if (start == screen){
        clearInterval(ids);
      }
      else{
        start++;
        cloud.style.left = start+'%';
      }
      }
    },6000);
    }

let slideIndex =1;
const showDivs = (n)=> {
   let i=0;
   let x = document.getElementsByClassName('slidesText');
   console.log(x);
      if(n>x.length){
      slideIndex=1;
      window.location.href = "pages/game.html";
   }
      while(i<x.length){
      x[i].style.display = "none";
      i++;
   }
          x[slideIndex-1].style.display = "block";

 }
          showDivs(slideIndex);
          const plusDivs= (n)=>{
          showDivs(slideIndex+=n);
 }

