//array of image cards for easy mode
let big_cards = [
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
  'fullsteam',
  'fullsteam',
];
//array of smaller image cards for hard mode
let sml_cards = [
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
  'parlour',
  'parlour',
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
  'beer',
  'bathroom',
  'bathroom',
  'mothership',
  'mothership',
  'cocoa',
  'cocoa',
  'motorco',
  'motorco',
];
//function set for easy mode below

//this will take the cards array and sort them
big_cards = big_cards.sort(function (a, b) {
  //this makes sure the sort is random. 0.5 is needed to work with sort
  return Math.random() - 0.5;
});

//function set for hard mode (same as easy)
sml_cards = sml_cards.sort(function (a, b) {
  return Math.random() - 0.5;
});

//select all the image boxes with game_title
let tiles = document.querySelectorAll('.game_tile ');

let cards = [];

if (tiles.length === big_cards.length){
  cards = big_cards;
} else if (tiles.length === sml_cards.length){
  cards = sml_cards;
} else {
  console.error("Error! Something went wrong!");
  console.error(tiles.length, sml_cards.length);
}
//make an emtpty array for later
let newArray = [];
//loop through array and add the class (flipped) so that they start as bricks
for (let i = 0; i < tiles.length; i++) {
  tiles[i].classList.add('flipped');
  //each time, take a photo out of array so there are no repeats
  tiles[i].classList.add(cards.pop());
  //when the event target (game title) is clicked, you can toggle from bricks to image
  tiles[i].addEventListener('click', handleClick);
}

function handleClick(event){
  event.target.classList.toggle('flipped');
  //put the two things you clicked into a new array
  newArray.push(event.target);
  //if the length is less than 2 (which it will be) run the function
  if (newArray.length === 2) {
    checkEquality();
  }
}
//you have an array that puts 2 thing into it at spot 0 and 1, if they are equal, do the click function.
function checkEquality(){
  if (newArray[0].classList.value === newArray[1].classList.value){
    newArray[0].removeEventListener('click', handleClick);
    newArray[1].removeEventListener('click', handleClick);
    //if they are equal, make a noise
    beep();
    //set a variable to end the game if all cards are flipped
    let endGame = document.querySelectorAll('.flipped');

    //if the length of the array is 0 (game over), go to the win page
    if (endGame.length === 0) {
      //.self makes the page replace
      window.open('win.html','_self');
    }
  } else {
    //delay so that they are clickable
    let delay = 1000;
    //set new variables so that the computer remembers what the array items were
    let first = newArray[0];
    let second = newArray[1];
    //actualy function that controls the time
    setTimeout(function() {
      first.classList.add('flipped');
      second.classList.add('flipped');
    }, delay);
  }

  //once done, remove them from the array so its clear for the next 2
  newArray.pop();
  newArray.pop();
};

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

//this function adds sound to the correct cards
function beep() {
    let snd = new Audio("sound/match.wav");
    snd.play();
}
