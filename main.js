let cardImages = [
'url(images/art.jpg)',
'url(images/art.jpg)',
'url(images/bridge.jpg)',
'url(images/bridge.jpg)',
'url(images/bullbike.jpg)',
'url(images/bullbike.jpg)',
'url(images/durhambulls.jpg)',
'url(images/durhambulls.jpg)',
'url(images/smokestack.jpg)',
'url(images/smokestack.jpg)',
'url(images/watertower.jpg)',
'url(images/watertower.jpg)'];


/*changes the an image when clicked*/

function changeImage(){
  for (let i = 0; i < cardImages.length; i ++) {
    this.style.backgroundImage = cardImages[i];
  }
}
/* I had to target each single button, thats*/
let changeOne = document.getElementById('one');
changeOne.addEventListener('click', changeImage);

let changeTwo = document.getElementById('two');
changeTwo.addEventListener('click', changeImage);

let changeThree = document.getElementById('three');
changeThree.addEventListener('click', changeImage);

let changeFour = document.getElementById('four');
changeFour.addEventListener('click', changeImage);

let changeFive = document.getElementById('five');
changeFive.addEventListener('click', changeImage);

let changeSix = document.getElementById('six');
changeSix.addEventListener('click', changeImage);

let changeSeven = document.getElementById('seven');
changeSeven.addEventListener('click', changeImage);

let changeEight = document.getElementById('eight');
changeEight.addEventListener('click', changeImage);

let changeNine = document.getElementById('nine');
changeNine.addEventListener('click', changeImage);

let changeTen = document.getElementById('ten');
changeTen.addEventListener('click', changeImage);

let changeEleven = document.getElementById('eleven');
changeEleven.addEventListener('click', changeImage);

let changeTwelve = document.getElementById('twelve');
changeTwelve.addEventListener('click', changeImage);

let changeThirteen = document.getElementById('thirteen');
changeThirteen.addEventListener('click', changeImage);

let changeFourteen = document.getElementById('fourteen');
changeFourteen.addEventListener('click', changeImage);

let changeFifteen = document.getElementById('fifteen');
changeFifteen.addEventListener('click', changeImage);

let changeSixteen = document.getElementById('sixteen');
changeSixteen.addEventListener('click', changeImage);

let changeSeventeen = document.getElementById('seventeen');
changeSeventeen.addEventListener('click', changeImage);

let changeEighteen = document.getElementById('eighteen');
changeEighteen.addEventListener('click', changeImage);
