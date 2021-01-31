const refs = {
    startButton: document.querySelector('button[data-action="start"'),
    stopButton: document.querySelector('button[data-action="stop"'),
  },

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

 const randomIntegerFromInterval = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
 };

 changeColor = () => {
    const color = colors[randomIntegerFromInterval(colors.length - 1)]
    console.log(color)
    document.body.style.backgroundColor = color
  }