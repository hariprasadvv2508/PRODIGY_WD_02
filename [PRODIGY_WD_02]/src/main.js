const playbutton=document.getElementsByClassName("play")[0]; 
const lapbutton=document.getElementsByClassName("lap")[0];
const resetbutton=document.getElementsByClassName("reset")[0];

let isPlay=false;
const togglebutton = () => {
  lapbutton.classList.remove("hidden");
  resetbutton.classList.remove("hidden");
}

const play = () =>{
  if(isPlay){
    playbutton.innerHTML = 'pause';
    isPlay=false;
  }
  else{
    playbutton.innerHTML = 'play';
    isPlay=true;
  }
  togglebutton();
}

playbutton.addEventListener("click",play);
