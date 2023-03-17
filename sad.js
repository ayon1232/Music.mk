console.log("Welcome to SE.MUSIC");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/sa/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "  Skinny Love ", filePath: "songs/sa/s1.mp3", coverPath: "covers/sad/s1.jpg"},
    {songName: "   Car's Outside", filePath: "songs/sa/2.mp3", coverPath: "covers/sad/2.jpg"},
    {songName: "  I miss you, I’m sorry", filePath: "songs/sa/3.mp3", coverPath: "covers/sad/3.jpg"},
    {songName: "  Best Friend Breakup ", filePath: "songs/sa/4.mp3", coverPath: "covers/sad/4.jpg"},
    {songName: " Heather", filePath: "songs/sa/5.mp3", coverPath: "covers/sad/5.jpg"},
    {songName: " Skinny Love", filePath: "songs/s/7.mp3", coverPath: "covers/sad/6.jpg"},
    {songName: " Another Love", filePath: "songs/s/6.mp3", coverPath: "covers/sad/7.jpg"},
    {songName: "  Romantic Homicide", filePath: "songs/s/8.mp3", coverPath: "covers/sad/8.jpg"},
    {songName: "I'll Be Waiting", filePath: "songs/s/9.mp3", coverPath: "covers/sad/9.jpg"},
    {songName: "Bombe Motai", filePath: "songs/10.mp3", coverPath: "covers/sl/s10.jpg"},
    {songName: "DJ Mass - Pem Kekula", filePath: "songs/11.mp3", coverPath: "covers/sl/s11.jpg"},
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
        audioElement.src = `songs/sa/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/sa/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/sa/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})