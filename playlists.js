// Fetch the playlist data from the Spotify API
async function fetchPlaylistData() {
  const response = await fetch('https://api.spotify.com/v1/playlists/{playlist_id}');
  const data = await response.json();
  const playlist = {
    name: data.name,
    image: data.images[0].url,
    numSongs: data.tracks.total
  };

  // Update the Spotify Playlist Card with the new data
  const spotifyCard = document.querySelector('.spotify-card');
  spotifyCard.querySelector('img').src = playlist.image;
  spotifyCard.querySelector('h3').textContent = playlist.name;
  spotifyCard.querySelector('p').textContent = `${playlist.numSongs} songs`;
}

// Call the fetchPlaylistData function to update the Spotify Playlist Card on page load
fetchPlaylistData();
// Fetch the playlist data from the Spotify API
async function fetchPlaylistData() {
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'block';
  
    const response = await fetch('https://api.spotify.com/v1/playlists/{playlist_id}');
    const data = await response.json();
   
}  