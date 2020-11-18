function music(ctr,quantity){
   
  let musElem = document.getElementsByTagName("audio"),
spanElem = document.getElementsByClassName("musOn"),flag=musElem[ctr].paused;
musElem[ctr].volume=.4;
for(let i=0;i<quantity;i++)
musElem[i].pause();
if(flag)
musElem[ctr].play();
else
musElem[ctr].pause();
}