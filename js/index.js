const myButton = document.getElementById('clickMe');
const translateButton = document.getElementById('translate');
// array that holds the different nodes of class placeholder
const nouns = document.getElementsByClassName('placeholder');
// array the holds the different nodes for all the elements that have an ID that end with "Input"
const inputs = document.querySelectorAll('[id$="Input"]');
// points to the old P that needs to be replaced
const replace = document.querySelector('p');
// creates our new p element
const newP = document.createElement('p');
// saves this garbage to our new p element
newP.innerHTML = `I really don't know to translate latin, so I'm not actually going to change anything. 
  <span class="placeholder" id="noun1">___________</span> went to the market to talk to <span class="placeholder" id="noun2">___________</span>.
  Upon arriving, they noticed that <span class="placeholder" id="noun3">___________</span> was there...their worst enemy. <br><br>
  Some more latin stuff. In hac habitasse platea dictumst. Aenean eget accumsan metus, vitae scelerisque lectus. Phasellus cursus lorem
  augue, sit amet tincidunt nulla iaculis sit amet. Vivamus iaculis sodales consectetur. Proin imperdiet odio nec
  tellus luctus porttitor. Phasellus tristique eget dui ut convallis. Vestibulum suscipit, magna eget maximus
  condimentum, nunc enim placerat orci, ut dapibus diam diam sed libero. In tincidunt, velit quis suscipit
  accumsan, sapien lacus consequat arcu, vel venenatis lacus leo in quam. Aliquam euismod nibh nulla.`

// loops through all of the different nodes in the noun array saves the corresponding input to the inner HTML of that placeholder
myButton.addEventListener('click', function (event) {
  event.preventDefault();
  for (let index = 0; index < nouns.length; index++){
    nouns[index].innerHTML = inputs[index].value;
  }
});

// swaps out the innerHTML with the new "translation"
translateButton.addEventListener('click', function(event) {
  event.preventDefault();
    replace.innerHTML = newP.innerHTML;
});