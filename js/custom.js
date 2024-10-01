const homePage = document.getElementById("home-page");
const keybordPage = document.getElementById("keybord-page");
const resultPage = document.getElementById("result-page");


let count = 0;
let life = 5;


const playBtn = () => {
  homePage.classList.add("hidden");
  keybordPage.classList.remove("hidden");
  resultPage.classList.add("hidden");
  randomLatterGet()

};

const gameOver = () => {
  count = 0;
  life = 5;

  document.getElementById("score").innerText = count;
  document.getElementById("life").innerText = life;
}

document.getElementById("play-btn").addEventListener("click", playBtn);

const randomLatterGet = () => {
  const latters = "abcdefghijklmnopqustuvwxyz";
  const randomIndex = Math.floor(Math.random() * latters.length);

  let randomLetter = latters[randomIndex].toLocaleLowerCase();

  document.getElementById("display").innerText =
    randomLetter.toUpperCase();
};


const checkLetter = (keyLetter) => {
  const displayLetter =  document.getElementById("display");
  const dLetter = displayLetter.innerText.toLocaleLowerCase();

  if(keyLetter === dLetter){
    randomLatterGet()
    count++ ;
    document.getElementById("score").innerText = count;
  }
  else{
    life--;
    if( life > 0 ){
      document.getElementById("life").innerText = life;
    }else{
      homePage.classList.add("hidden");
      keybordPage.classList.add("hidden");
      resultPage.classList.remove("hidden");

      document.getElementById("ful-score").innerText = count
    }
  }

};



const keybordBtns = document.getElementsByClassName("k-btn");

for (let i = 0; i < keybordBtns.length; i++) {
  keybordBtns[i].addEventListener("click", () => {
    const latter = keybordBtns[i].innerText;
    keybordBtns[i].classList.add("active");
    setInterval(() => keybordBtns[i].classList.remove("active") , 300)
    checkLetter(latter)
  });
}

// key press 

document.addEventListener("keydown", (e) => {
  for(let i = 0; i < keybordBtns.length; i++){
    if(keybordBtns[i].innerText === e.key){
      keybordBtns[i].classList.add("active");
    }
  }
})




document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    playBtn();
    gameOver();
  }
  else{
      for(let i = 0; i < keybordBtns.length; i++){
        if(keybordBtns[i].innerText === e.key){
          keybordBtns[i].classList.remove("active");
        }
      }
      checkLetter(e.key.toLocaleLowerCase());
    }
});

document.getElementById("r-play").addEventListener("click", () => {
  playBtn();
  gameOver();
})