function musicOn(num) {
  let musElem = document.getElementsByTagName("audio"),
    btn = document.getElementsByClassName("playBtn"),
    flag = musElem[num].paused;

  if (flag == true) {
    musElem[num].play();
    console.log();
    btn[num].classList.add("animate-playBtn2");
    btn[num].classList.remove("animate-playBtn1");
  } else {
    btn[num].classList.remove("animate-playBtn2");
    btn[num].classList.add("animate-playBtn1");
    musElem[num].pause();
  }

  musicStop(num);
}

function musicStop(num) {
  let textElem = document.getElementsByTagName("span"),
    musElem = document.getElementsByTagName("audio"),
    btn = document.getElementsByClassName("playBtn"),
    i,
    flag = musElem[num].paused;

  for (i = 0; i < musElem.length; i++) {
    if (i == num && flag != true) {
      textElem[num].classList.add("active");
      continue;
    }
    btn[i].classList.remove("animate-playBtn2");
    btn[i].classList.remove("animate-playBtn1");
    btn[i].classList.add("animate-playBtn1");
    textElem[i].classList.remove("active");
    musElem[i].pause();
  }
}

function sound(num) {
  let audio = document.getElementsByTagName("audio")[num],
    range = document.getElementsByClassName("lineVolume")[num];
  range.onchange = function () {
    if (this.value == this.min) {
      audio.volume = 0;
    } else if (this.value < 10 && this.value != 0) {
      audio.volume = 0.05;
    } else if (this.value < 20 && this.value >= 10) {
      audio.volume = 0.1;
    } else if (this.value < 35 && this.value >= 20) {
      audio.volume = 0.25;
    } else if (this.value <= 50 && this.value >= 35) {
      audio.volume = 0.4;
    } else if (this.value <= 70 && this.value > 50) {
      audio.volume = 0.6;
    } else if (this.value <= 90 && this.value > 70) {
      audio.volume = 0.8;
    } else if (this.value != 100 && this.value > 90) {
      audio.volume = 0.9;
    } else if (this.value == this.max) {
      audio.volume = 1;
    }
  };
}

function restart(num) {
  let audio = document.getElementsByTagName("audio")[num];
  audio.currentTime = 0;
}

function hideVolume(num) {
  let volum = document.getElementsByClassName("lineVolume"),
    audio = document.getElementsByTagName("audio")[num],
    btnVolum = document.getElementsByClassName("volume"),
    range = document.getElementsByClassName("lineVolume")[num].value;

  if (volum[num].style.opacity == 1) {
    volum[num].style.opacity = "0";
    audio.volume = 0;
  } else {
    volum[num].style.opacity = "1";
    audio.volume = range / 100;
  }
}
