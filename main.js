//array of image classes for easy mode
let cards = [
  'bullbike',
  'bullbike',
  'watertower',
  'watertower',
  'bridge',
  'bridge',
  'smokestack',
  'smokestack',
  'bull',
  'bull',
  'durhambulls',
  'durhambulls',
  'city',
  'city',
  'thedurham',
  'thedurham',
  'bathroom',
  'bathroom',
];
//array of image classes for hard mode
let sml_cards = [
  'man',
  'man',
  'art',
  'art',
  'carolina',
  'carolina',
  'park',
  'park',
  'penguin',
  'penguin',
  'wallst',
  'wallst',
  'scratch',
  'scratch',
  'chapel',
  'chapel',
  'bullsign',
  'bullsign',
  'bees',
  'bees',
  'rocket',
  'rocket',
  'dpac',
  'dpac',
  'beer',
  'beer'
];
//function set for easy mode
  //this will take the cards array and sort them into a new random array
cards = cards.sort(function (a, b) {
	return Math.random() - 0.5;
});

  //select all the image boxes with game_title
let tiles = document.querySelectorAll('.game_title ');
//make an emtpty array for later
let newArray = [];
  //loop through array and add the class (flipped) so that they start as bricks
for (let i = 0; i < tiles.length; i++) {
  tiles[i].classList.add('flipped');
  //each time, take a photo out of array so there are no repeats
  tiles[i].classList.add(cards.pop());
  //when the event target (game title) is clicked, you can toggle from bricks to image
  tiles[i].addEventListener('click', function (event) {
  event.target.classList.toggle('flipped');
  //put the two things you clicked into a new array
  newArray.push(event.target);
  //console.log(newArray);
  //if the length is less than 2 (which it will be) run the function
  if (newArray.length === 2) {
    checkEquality();
  }
});
}

//you have an array that puts 2 thing into it at spot 0 and 1, if they are equal, alert.
function checkEquality(){
  if (newArray[0].classList.value === newArray[1].classList.value){

    //THIS YOU WILL CHANGE
    console.log('I am equal');
    //once done, remove them from the array so its clear for the next 2
    newArray.pop();
    newArray.pop();
  } else {
    newArray.pop();
    newArray.pop();
  }
};

//function set for hard mode (same as easy)
sml_cards = sml_cards.sort(function (a, b) {
	return Math.random() - 0.5;
});

let sml_tiles = document.querySelectorAll('.game_tile_sml ');
for (let i = 0; i < sml_tiles.length; i++) {
  sml_tiles[i].classList.add('flipped');

  sml_tiles[i].classList.add(sml_cards.pop());

  sml_tiles[i].addEventListener('click', function (event) {
  event.target.classList.toggle('flipped');
});
}


//this is the page timer

//this var will set the time to count by seconds
var timerVar = setInterval(countTimer, 1000);
//set an empty variable to hold the seconds counted
var totalSeconds = 0;
function countTimer() {
//increase the timer by itself (1 sec)
   ++totalSeconds;
//set a possible hour var
   var hour = Math.floor(totalSeconds / 3600);
//set a minute var
   var minute = Math.floor((totalSeconds - hour * 3600)/60);
//set the seconds var
   var seconds = totalSeconds - (hour * 3600 + minute * 60);
//the the timer placeholder from html and add the hour var, minute and seconds
   document.getElementById("timer").innerHTML = hour + " hours | " + minute + " minutes | " + seconds + " seconds";
}
