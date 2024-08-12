let answer = document.querySelector('.answerBox');
let equal = document.querySelector('#equal');
let multiply = document.querySelector('#multiply');
let calcButton = document.querySelector('.numberPlate');
let clear = document.querySelector('#clear');

calcButton.addEventListener('click', function (event) {
  let target = event.target;
  if (target.className != 'calcButton') return;
  answer.innerText += target.innerText;
  equal.addEventListener('click', function () {
    answer.innerText = eval(answer.innerText);
  });
});

multiply.addEventListener('click', function () {
  answer.innerText += '*';
});
clear.addEventListener('click', function () {
  answer.innerText = '';
});
