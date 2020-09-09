const myButton = document.getElementById('clickMe');
const translateButton = document.getElementById('translate');
const nouns = document.getElementsByClassName('placeholder');
const inputs = document.querySelectorAll('[id$="Input"]');
const newP = document.createElement('p');
const replace = document.querySelector('p');
newP.innerHTML = `I really don't know to translate latin, so I'm not actually going to change anything. 
<span class="placeholder" id="noun1">___________</span> went to the market to talk to <span class="placeholder" id="noun2">___________</span>.
Upon arriving, they noticed that <span class="placeholder" id="noun3">___________</span> was there...their worst enemy. <br><br>
Some more latin stuff. In hac habitasse platea dictumst. Aenean eget accumsan metus, vitae scelerisque lectus. Phasellus cursus lorem
augue, sit amet tincidunt nulla iaculis sit amet. Vivamus iaculis sodales consectetur. Proin imperdiet odio nec
tellus luctus porttitor. Phasellus tristique eget dui ut convallis. Vestibulum suscipit, magna eget maximus
condimentum, nunc enim placerat orci, ut dapibus diam diam sed libero. In tincidunt, velit quis suscipit
accumsan, sapien lacus consequat arcu, vel venenatis lacus leo in quam. Aliquam euismod nibh nulla.`

myButton.addEventListener('click', function (event) {
  event.preventDefault();
  for (let index = 0; index < nouns.length; index++){
    nouns[index].innerHTML = inputs[index].value;
  }
});

translateButton.addEventListener('click', function(event) {
  event.preventDefault();
    replace.innerHTML = newP.innerHTML;
});