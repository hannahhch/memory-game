var cardImages = [];
cardImages[0] = 'url(images/art.jpg)',
cardImages[1] = 'url(images/art.jpg)',
cardImages[2] = 'url(images/bridge.jpg)',
cardImages[3] = 'url(images/bridge.jpg',
cardImages[4] = 'url(images/bullbike.jpg',
cardImages[5] = 'url(images/bullbike.jpg',
cardImages[6] = 'url(images/durhambulls.jpg',
cardImages[7] = 'url(images/durhambulls.jpg',
cardImages[8] = 'url(images/smokestack.jpg',
cardImages[9] = 'url(images/smokestack.jpg',
cardImages[10] = 'url(images/watertower.jpg',
cardImages[11] = 'url(images/watertower.jpg';


/*will only change the first image*/

function changeImage(){
  for (let i = 0; i < cardImages.length; i ++) {
    this.style.backgroundImage = cardImages[i];
  }

}

let changeOne = document.getElementById('one');
changeOne.addEventListener('click', changeImage);

let changeTwo = document.getElementById('two');
changeTwo.addEventListener('click', changeImage);

let changeThree = document.getElementById('three');
changeThree.addEventListener('click', changeImage);
