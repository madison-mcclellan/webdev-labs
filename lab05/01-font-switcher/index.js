const makeBigger = () => {
   document.querySelector("h1").style.fontSize = "40px";
   document.querySelector(".content").style.fontSize = "25px";
};

const makeSmaller = () => {
   document.querySelector("h1").style.fontSize = "25px";
   document.querySelector(".content").style.fontSize = "15px";
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
