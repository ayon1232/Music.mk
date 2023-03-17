console.log("Welcome to SE.MUSIC");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/s/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: " Allan Yanna Bari Athak-Sudeera Dilshan ", filePath: "songs/s/1.mp3", coverPath: "covers/sl/s1.jpg"},
    {songName: "  Manabandu Karanawak- Yuki Navaratne", filePath: "songs/s/2.mp3", coverPath: "covers/sl/s2.jpg"},
    {songName: " Mandaaram Kathawe - Anushka Udana ", filePath: "songs/s/3.mp3", coverPath: "covers/sl/s3.jpg"},
    {songName: " Mulawe -Mihiran feat. Themiya Thejan ", filePath: "songs/4.mp3", coverPath: "covers/sl/s4.jpg"},
    {songName: "DILU Beats - Numba Ha (Suraganak Wilasa)", filePath: "songs/5.mp3", coverPath: "covers/sl/s5.jpg"},
    {songName: "Prathihari ", filePath: "songs/s/6.mp3", coverPath: "covers/sl/s6.jpg"},
    {songName: "Vidula Ravishara - Kawiya ", filePath: "songs/2.mp3", coverPath: "covers/sl/s7.jpg"},
    {songName: " Manali", filePath: "songs/8.mp3", coverPath: "covers/sl/s8.jpg"},
    {songName: "Dawasak Ewi Apith - Piyath Rajapakse ", filePath: "songs/9.mp3", coverPath: "covers/sl/s9.jpg"},
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
        audioElement.src = `songs/s/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/s/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/s/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})