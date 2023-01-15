// 1-100 arasında rastgele sayı tutar
const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

document.querySelector(".btn").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".input").value);
  // console.log(guessNumber)
  const bodyBgColor = document.querySelector("body");
  const newH4 = document.querySelector("h4");
  const newP = document.querySelector("p");
  const newImg = document.querySelector("img");

  if (randomNumber > guessNumber) {
    alert("Up 👆 ");
  } else if (randomNumber < guessNumber) {
    alert("Down 👇 ");
  } else {
    alert("Wonderfull 🤩 ");
    bodyBgColor.style.backgroundColor = "pink";
    newH4.textContent = "wonderfull 😎";
    newP.textContent = "🎁";
    newImg.style.borderRadius = "30px";
    document.querySelector("img").src =
      "https://cdn.pixabay.com/photo/2020/04/05/22/00/fireworks-5007820_960_720.jpg";
  }
  document.querySelector(".input").value = "";
  document.querySelector(".input").focus = "";
});
