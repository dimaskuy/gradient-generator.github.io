const box = document.querySelector('.box');
const result = document.getElementById('result');
const changeBG = document.getElementById('changeBG');
const defaultBG = document.getElementById('defaultBG');
const randomColor = document.getElementById('randomColor');

const inputColor1 = document.getElementById('color1');
const inputColor2 = document.getElementById('color2');

randomColor.addEventListener('click', function(e) {
  e.preventDefault();
  const r1 = Math.round(Math.random() * 255);
  const g1 = Math.round(Math.random() * 255);
  const b1 = Math.round(Math.random() * 255);
  const r2 = Math.round(Math.random() * 255);
  const g2 = Math.round(Math.random() * 255);
  const b2 = Math.round(Math.random() * 255);
  box.style.backgroundImage = `linear-gradient(45deg, rgb(${r1},${g1},${b1}) , rgb(${r2},${g2},${b2}))`;
  result.textContent = `linear-gradient(45deg, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`;
});

inputColor1.addEventListener('change', function(e) {
  box.style.backgroundImage = `linear-gradient(45deg, ${e.target.value}, ${inputColor2.value})`;
  result.textContent = `linear-gradient(45deg, ${e.target.value.toUpperCase()}, ${inputColor2.value.toUpperCase()})`;
});

inputColor2.addEventListener('change', function(e) {
  box.style.backgroundImage = `linear-gradient(45deg, ${inputColor1.value}, ${e.target.value})`;
  result.textContent = `linear-gradient(45deg, ${inputColor1.value.toUpperCase()}, ${e.target.value.toUpperCase()})`;
});

changeBG.addEventListener('click', function() {
  // document.body.style.backgroundImage = `linear-gradient(45deg, ${inputColor1.value}, ${inputColor2.value})`;
  document.body.style.background = result.textContent;
});

defaultBG.addEventListener('click', function() {
  document.body.style.background = `rgba(0,0,0,.02)`;
});
