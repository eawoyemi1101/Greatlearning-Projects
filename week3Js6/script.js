let originalList = [];
let shuffledVideos = [];
let currentIndex = 0;
let isShuffle = false;

document.addEventListener('DOMContentLoaded', function() {
    handleClubClick(videos); // Populate initial video list
    addEventListeners();
});

function handleClubClick(playlist) {
    const videoList = document.getElementById('videoList');
    videoList.innerHTML = ''; // Clear existing list
    playlist.forEach((video, index) => {
        const li = document.createElement('li');
        li.textContent = video.title;
        li.dataset.index = index;
        videoList.appendChild(li);
    });
}

function playVideo(index, playlist) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = playlist[index].url;
    videoPlayer.play();
}

function addEventListeners() {
    document.getElementById('videoList').addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            currentIndex = parseInt(event.target.dataset.index);
            playVideo(currentIndex, isShuffle ? shuffledVideos : originalList);
        }
    });

    document.getElementById('nextButton').addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= (isShuffle ? shuffledVideos : originalList).length) currentIndex = 0;
        playVideo(currentIndex, isShuffle ? shuffledVideos : originalList);
    });

    document.getElementById('previousButton').addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) currentIndex = (isShuffle ? shuffledVideos : originalList).length - 1;
        playVideo(currentIndex, isShuffle ? shuffledVideos : originalList);
    });

    document.getElementById('shuffleButton').addEventListener('click', function() {
        isShuffle = !isShuffle;
        this.textContent = isShuffle ? 'Unshuffle' : 'Shuffle';
        if (isShuffle) {
            shuffledVideos = [...originalList].sort(() => Math.random() - 0.5);
        }
        handleClubClick(isShuffle ? shuffledVideos : originalList);
    });

    document.getElementById('searchInput').addEventListener('input', function(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredVideos = originalList.filter(video => video.title.toLowerCase().includes(searchTerm));
        handleClubClick(filteredVideos);
    });
}
