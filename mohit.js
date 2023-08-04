// Function to navigate to the home page

// document.getElementById('happy-section').addEventListener('click',function(){
//   window.location.href="myindex.html";

// })



//initialize the variables:
var songIndex = 0;
var audioElement = new Audio('songs/1.mp3');
var masterPlay = document.getElementById('masterPlay');
var songitemplay=document.getElementsByClassName('songitemplay');
var myProgressBar = document.getElementById('myProgressBar');
var mygif = document.getElementById('gif');
var  songitems=Array.from(document.getElementsByClassName("songitem"));




let songs = [
  {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
  {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
  {songName: "DEAF KEV - Invincible-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
  {songName: "Different Heaven & EH!DE - My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
  {songName: "Janjieat-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
  {songName: "Maan meri jaan", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
  {songName: "Pee Loo - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
  {songName: "up  to u ", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
  {songName: "Bhula Dena", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
  {songName: "O khuda", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songitems.forEach((element,i)=>{
  //console.log(element,i);
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  //naming the song using js;
  element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
}) 
// handle play/pause click:
  masterPlay.addEventListener('click', function() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      mygif.style.opacity = 1;
  
      // Update the icon for the currently playing songitemplay element
      var currentlyPlayingSongItemPlay = document.getElementById(songIndex.toString());
      if (currentlyPlayingSongItemPlay) {
        currentlyPlayingSongItemPlay.classList.remove('fa-play-circle');
        currentlyPlayingSongItemPlay.classList.add('fa-pause-circle');
      }
    } else {
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      mygif.style.opacity = 0;
  
      // Update the icon for the currently playing songitemplay element
      var currentlyPlayingSongItemPlay = document.getElementById(songIndex.toString());
      if (currentlyPlayingSongItemPlay) {
        currentlyPlayingSongItemPlay.classList.remove('fa-pause-circle');
        currentlyPlayingSongItemPlay.classList.add('fa-play-circle');
      }
    }
  });
  


// listen time update event :
audioElement.addEventListener('timeupdate', function() {
  if (isFinite(audioElement.duration)) {
    var progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    //myProgressBar.value = progress;
  }
});

myProgressBar.addEventListener('input', function() {
  if (isFinite(audioElement.duration)) {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
  }
});

function makeAllPlays(){
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');

})
}

Array.from(songitemplay).forEach((element)=>{
  element.addEventListener('click', (e)=>{ 
     makeAllPlays();
     if(audioElement.paused || audioElement.currentTime <= 0){

      songIndex = parseInt(e.target.id);//numbering the song target id 
      audioElement.src = `songs/${songIndex+1}.mp3`;//checking which song is requested:
     // masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
     
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     }
     else{
      
      songIndex = parseInt(e.target.id);//numbering the song target id 
      audioElement.src = `songs/${songIndex+1}.mp3`;//checking which song is requested:
     // masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
      audioElement.pause();
      gif.style.opacity = 1;
      e.target.classList.remove('fa-pause-circle');
      e.target.classList.add('fa-play-circle');
     
     masterPlay.classList.remove('fa-pause-circle');
     masterPlay.classList.add('fa-play-circle');
     }
      

  })
});



document.getElementById('next').addEventListener('click',function(){
  if(songIndex>=9){
    songIndex=0;
  }
  else{
    songIndex+=1;
  }

   // Pause the current song and update the play/pause icon for the current song
  // First, pause the audio element
  audioElement.pause();
  // Find the currently playing songitemplay element
  var currentlyPlayingSongItemPlay = document.querySelector('.songitemplay.fa-pause-circle');
  if (currentlyPlayingSongItemPlay) {
    // If there is a currently playing songitemplay element (with pause icon)
    // Change its icon to the play icon
    currentlyPlayingSongItemPlay.classList.remove('fa-pause-circle');
    currentlyPlayingSongItemPlay.classList.add('fa-play-circle');
  }


  audioElement.src = `songs/${songIndex+1}.mp3`;//checking which song is requested:
  // masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
   audioElement.play();
   gif.style.opacity = 1;



     // Find the songitemplay element of the newly playing song
  var newSongItemPlay = document.getElementById(songIndex.toString());
  if (newSongItemPlay) {
    // If the new songitemplay element exists, change its icon to the pause icon
    newSongItemPlay.classList.remove('fa-play-circle');
    newSongItemPlay.classList.add('fa-pause-circle');
  }
   
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  
  e.target.classList.remove('fa-play-circle');
  e.target.classList.add('fa-pause-circle');
 
})

// ...existing code...

// Event listener for the 'ended' event of the audio element
audioElement.addEventListener('ended', function() {
  songIndex++; // Moving to  next song
  if (songIndex >= songs.length) {
    songIndex = 0; // Reset to the first song if out of bounds
  }
  audioElement.src = songs[songIndex].filePath; // Set the src attribute to the new song's file path
  audioElement.currentTime = 0; // Reset the playback time
  audioElement.play(); // Start playing the new song

  // Update any relevant UI elements with the new song information
  // For example:
  // masterSongName.innerText = songs[songIndex].songName;

  // Update the play/pause icon
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
});

// ...existing code...


document.getElementById('previous').addEventListener('click',function(){
  if(songIndex<=0){
    songIndex=0;
  }
  else{
    songIndex-=1;
  }
audioElement.pause();

var currentlyPlayingSongItemPlay = document.querySelector('.songitemplay.fa-pause-circle');
if (currentlyPlayingSongItemPlay) {
  // If there is a currently playing songitemplay element (with pause icon)
  // Change its icon to the play icon
  currentlyPlayingSongItemPlay.classList.remove('fa-pause-circle');
  currentlyPlayingSongItemPlay.classList.add('fa-play-circle');
}
  audioElement.src = `songs/${songIndex+1}.mp3`;//checking which song is requested:
  // masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
   audioElement.play();
   gif.style.opacity = 1;

   var newSongItemPlay=document.getElementById(songIndex.toString());
   if(newSongItemPlay){
    newSongItemPlay.classList.remove('fa-play-circle');
    newSongItemPlay.classList.add('fa-pause-circle');
   }
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
 
});




// // Outside the previous button click event handler
// const happySection = document.getElementById('happy-section');

// // Add a click event listener to the "Happy" section card
// happySection.addEventListener('click', () => {
//   // Redirect to "myindex.html" when the card is clicked
//   alert("click happened");
//   //window.location.href = 'myindex.html';
// });


// document.getElementById('happy-section').addEventListener('click',function(){
//   alert("clickedd");
// });


// Function to navigate to the home page
// function goToHome() {
// window.location.href = 'home.html';
// }

// Add click event listener to the "Home" tab in the sidebar
// document.getElementById('sidebar-home-tab').addEventListener('click', goToHome);

// Rest of your existing code...