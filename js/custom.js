const homePage = document.getElementById("home-page");
const keybordPage = document.getElementById("keybord-page");
const resultPage = document.getElementById("result-page");

const playBtn = () => {
  homePage.classList.add("hidden");
  keybordPage.classList.remove("hidden");
  resultPage.classList.add("hidden");
  randomLatterGet()
};

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
    
  }
};

const keybordBtns = document.getElementsByClassName("k-btn");

for (let i = 0; i < keybordBtns.length; i++) {
  keybordBtns[i].addEventListener("click", () => {
    const latter = keybordBtns[i].innerText;
  });
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    playBtn();
  }
  else(
    checkLetter(e.key)
    
  )
});
