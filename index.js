const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const colorString = "0123456789ABCDEF";
let intervalId = null;
// create a method that generate a random hexa color.☑️
// create a click event on start button☑️
// when click event run the background color of body changing color every 1 sec☑️
// when click stop button the backround stops changing the colors☑️

const pickRandonHexaColor = () => {
  let randonValue = "#";
  for (let i = 0; i < 6; i++) {
    randonValue += colorString.charAt(
      Math.floor(Math.random() * colorString.length)
    );
  }
  return randonValue;
};

startButton.addEventListener("click", () => {
  const changingBackgroundColor = () => {
    document.body.style.backgroundColor = pickRandonHexaColor();
    document.body.style.transitionDuration = "2s";
  };
  if (!intervalId) {
    intervalId = setInterval(changingBackgroundColor, 1000);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
