console.log("Welcome to SE.MUSIC");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/xx/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: " 01  Look At Me! ", filePath: "songs/xx/1.mp3", coverPath: "covers/xx/1.jpg"},
    {songName: "  02  Riot", filePath: "songs/xx/2.mp3", coverPath: "covers/xx/2.jpg"},
    {songName: " 03 I Don't Wanna Do This Anymore", filePath: "songs/xx/3.mp3", coverPath: "covers/xx/3.jpg"},
    {songName: "  04 True Love ", filePath: "songs/xx/4.mp3", coverPath: "covers/xx/4.jpg"},
    {songName: "05 Jocelyn Flores ", filePath: "songs/xx/5.mp3", coverPath: "covers/xx/5.jpg"},
    {songName: " 06 Moonlight", filePath: "songs/xx/7.mp3", coverPath: "covers/xx/6.jpg"},
    {songName: " 07 bad vibes forever", filePath: "songs/xx/6.mp3", coverPath: "covers/xx/7.jpg"},
    {songName: " 08 Everybody Dies In Their Nightmares", filePath: "songs/xx/8.mp3", coverPath: "covers/xx/8.jpg"},
    {songName: "09  SAD!", filePath: "songs/xx/9.mp3", coverPath: "covers/xx/9.jpg"},
    {songName: "10 Revenge", filePath: "songs/xx/10.mp3", coverPath: "covers/xx/10.jpg"},
    {songName: "11  Hope", filePath: "songs/xx/11.mp3", coverPath: "covers/xx/11.jpg"},
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
        audioElement.src = `songs/xxx/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/xxx/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/xxx/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})