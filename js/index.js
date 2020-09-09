const myButton = document.getElementById('clickMe');
const nouns = document.getElementsByClassName('placeholder');
const inputs = document.querySelectorAll('[id$="Input"]');

myButton.addEventListener('click', function (event) {
  event.preventDefault();
  for (let index = 0; index < nouns.length; index++){
    nouns[index].innerHTML = inputs[index].value;
  }
});
