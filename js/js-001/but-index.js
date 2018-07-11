var para = document.querySelector('p');
para.addEventListener('click',updateName);

function updateName () {
  // body...
  var name = prompt('Enter a new name : ');
  para.textContent = 'Playe 1:' + name;
}
