prevButton = null;
number = null;

const buttondiv = document.getElementById("button-div");
 buttondiv.addEventListener('click' , (e) => {
  const isButton = e.target.nodeName === 'BUTTON';

  if(!isButton){
    return;
  } 

  e.target.classList.add('activerate'); //add the active class to clicked button

  if(prevButton !== null){
    prevButton.classList.remove('activerate'); //remove the active class from clicked button
  }

  prevButton = e.target;
  number = e.target.innerHTML;
 })


function sub(){
  if(prevButton !== null){
  document.getElementById("outer-box-rating").style.display = "none";
  document.getElementById("outer-box-ty").style.display = "block";
  document.getElementById("rating").innerHTML = number;
  }
};