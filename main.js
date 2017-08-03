var cardImages = [];
cardImages[0] = 'url(images/art.jpg)',
cardImages[1] = 'url(images/art.jpg)',
cardImages[2] = ('images/bridge.jpg'),
cardImages[3] = ('images/bridge.jpg'),
cardImages[4] = ('images/bullbike.jpg'),
cardImages[5] = ('images/bullbike.jpg'),
cardImages[6] = ('images/durhambulls.jpg'),
cardImages[7] = ('images/durhambulls.jpg'),
cardImages[8] = ('images/smokestack.jpg'),
cardImages[9] = ('images/smokestack.jpg'),
cardImages[10] = ('images/watertower.jpg'),
cardImages[11] = ('images/watertower.jpg');


/*will only change the first image*/

function changeImage(){
  let change = document.getElementById('one');
  change.style.backgroundImage = cardImages[0];
}

let changeVar = document.getElementById('one');

changeVar.addEventListener('click', changeImage);
