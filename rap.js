console.log("Welcome to SE.MUSIC");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/r/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: " Dilo - Manopara", filePath: "songs/r/1.mp3", coverPath: "covers/r/1.jpg"},
    {songName: "  Breezy & CHU BBY - Pinwanthi (පින්වන්ති) ", filePath: "songs/r/2.mp3", coverPath: "covers/r/2.jpg"},
    {songName: "   Anganmana Sumana ", filePath: "songs/r/3.mp3", coverPath: "covers/r/3.jpg"},
    {songName: "  Jadi Mudi_ Shan Putha X Maduwa New   ", filePath: "songs/r/4.mp3", coverPath: "covers/r/4.jpg"},
    {songName: "  Na Shoken", filePath: "songs/r/5.mp3", coverPath: "covers/r/5.jpg"},
    {songName: " මව්ණි නුඹට (Dear Mama) - Alfa ft Jtsp  ", filePath: "songs/r/6.mp3", coverPath: "covers/r/6.jpg"},
    {songName: "Nethmini Ft. Jtsp boy - La Laawata ", filePath: "songs/r/2.mp3", coverPath: "covers/r/7.jpg"},
    {songName: " Yohani - Pop Hits Ultimate Mash Up", filePath: "songs/r/8.mp3", coverPath: "covers/r/8.jpg"},
    {songName: "As Yaa Unaa ", filePath: "songs/r/9.mp3", coverPath: "covers/r/9.jpg"},
    {songName: "Costa - Batanala බටනලා", filePath: "songs/r/10.mp3", coverPath: "covers/r/10.jpg"},
    {songName: "Sadanari Jtsp boy X Jester_D X Noty_D ", filePath: "songs/r/11.mp3", coverPath: "covers/r/11.jpg"},
   
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
        audioElement.src = `songs/r/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/r/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/r/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})