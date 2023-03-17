console.log("Welcome to SE.MUSIC");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/b/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "01 10_35", filePath: "songs/b/1.mp3", coverPath: "covers/b/1.jpg"},
    {songName: " 02 Escapism", filePath: "songs/b/2.mp3", coverPath: "covers/b/2.jpg"},
    {songName: " 03  I'm Good (Blue) ", filePath: "songs/b/3.mp3", coverPath: "covers/b/3.jpg"},
    {songName: " 04  Just Wanna Rock ", filePath: "songs/b/4.mp3", coverPath: "covers/b/4.jpg"},
    {songName: "05 Players", filePath: "songs/b/5.mp3", coverPath: "covers/b/5.jpg"},
    {songName: "06 Quevedo_ Bzrp Music Sessions, Vol. 52 ", filePath: "songs/b/6.mp3", coverPath: "covers/b/6.jpg"},
    {songName: "07  Rich Flex ", filePath: "songs/b/2.mp3", coverPath: "covers/b/7.jpg"},
    {songName: " 08 Me Porto Bonito", filePath: "songs/b/8.mp3", coverPath: "covers/b/8.jpg"},
    {songName: "09 11 Save Your Tears ", filePath: "songs/b/9.mp3", coverPath: "covers/b/9.jpg"},
    {songName: "NEFFEX - Fight Back", filePath: "songs/b/10.mp3", coverPath: "covers/b/10.jpg"},
    {songName: "NEFFEX - Best of Me ", filePath: "songs/b/11.mp3", coverPath: "covers/b/11.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/b/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/b/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/b/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})