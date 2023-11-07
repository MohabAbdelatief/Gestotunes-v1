var AudioOBJ = new Audio();
document.getElementById("Blessed").style.display = "none";
document.getElementById("DeathOfABachelor").style.display = "none";
document.getElementById("DifferentWorld").style.display = "none";
document.getElementById("Evolve").style.display = "none";
document.getElementById("HOPE").style.display = "none";
document.getElementById("MusicToBeMurderedBy").style.display = "none";
document.getElementById("TheMidsummerStation").style.display = "none";
document.getElementById("TheSearch").style.display = "none";
document.getElementById("Utopia").style.display = "none";
document.getElementById("TheWall").style.display = "none";
// Inside the second JavaScript code
var loggedInUsername = localStorage.getItem('loggedInUsername');
if (loggedInUsername == "Mohab") {
    document.getElementById("TheSearch").style.display = "block";
    document.getElementById("Blessed").style.display = "block";
    document.getElementById("HOPE").style.display = "block";
    SONGS_PATH = [
        "../Database/Audio/JoshA-My Year.mp3",
        "../Database/Audio/JoshA-RIP.mp3",
        "../Database/Audio/JoshA-No Complaints.mp3",
        "../Database/Audio/JoshA-Relevations.mp3",
        "../Database/Audio/JoshA-Study Break.mp3",
        "../Database/Audio/JoshA-Late Nights.mp3",
        "../Database/Audio/NF-HOPE.mp3",
        "../Database/Audio/NF-CAREFUL.mp3",
        "../Database/Audio/NF-HAPPY.mp3",
        "../Database/Audio/NF-RUNNING.mp3",
        "../Database/Audio/NF-PANDEMONIUM.mp3",
        "../Database/Audio/NF-MOTTO.mp3",
        "../Database/Audio/NF-TheSearch.mp3",
        "../Database/Audio/NF-LeaveMeAlone.mp3",
        "../Database/Audio/NF-WhenIGrowUp.mp3",
        "../Database/Audio/NF-Time.mp3",
        "../Database/Audio/NF-Nate.mp3",
    ];

    PlayList = [
        SONGS_PATH[0], SONGS_PATH[1], SONGS_PATH[2], SONGS_PATH[3], SONGS_PATH[4],
        SONGS_PATH[5], SONGS_PATH[6], SONGS_PATH[7], SONGS_PATH[8], SONGS_PATH[9],
        SONGS_PATH[10], SONGS_PATH[11], SONGS_PATH[12], SONGS_PATH[13], SONGS_PATH[14], SONGS_PATH[15],
        SONGS_PATH[16],

    ];

    SONGS_NAMES = [
        "My Year", "RIP", "No Complaints", "Relevations", "Study Break", "Late Night",
        "HOPE", "CAREFUL", "HAPPY", "RUNNING", "PANDEMONIUM", "MOTTO",
        "The Search", "Leave Me Alone", "When I Grow Up", "Time", "Nate",
    ];

    SONGS_ARTITST = [
        "Josh A", "Josh A", "Josh A", "Josh A", "Josh A", "Josh A",
        "NF", "NF", "NF", "NF", "NF", "NF",
        "NF", "NF", "NF", "NF", "NF",
    ];

    ALBUM_COVERS = [
        "../Database/images/AlbumCovers/Blessed.png",
        "../Database/images/AlbumCovers/Blessed.png",
        "../Database/images/AlbumCovers/Blessed.png",
        "../Database/images/AlbumCovers/Blessed.png",
        "../Database/images/AlbumCovers/Blessed.png",
        "../Database/images/AlbumCovers/Blessed.png",
        "../Database/images/AlbumCovers/HOPE.png",
        "../Database/images/AlbumCovers/HOPE.png",
        "../Database/images/AlbumCovers/HOPE.png",
        "../Database/images/AlbumCovers/HOPE.png",
        "../Database/images/AlbumCovers/HOPE.png",
        "../Database/images/AlbumCovers/HOPE.png",
        "../Database/images/AlbumCovers/TheSearch.png",
        "../Database/images/AlbumCovers/TheSearch.png",
        "../Database/images/AlbumCovers/TheSearch.png",
        "../Database/images/AlbumCovers/TheSearch.png",
        "../Database/images/AlbumCovers/TheSearch.png",
    ];

} else if (loggedInUsername == "Nada") {
    document.getElementById("Evolve").style.display = "block";
    SONGS_PATH = [
        "../Database/Audio/Imagine Dragons-Believer.mp3",
        "../Database/Audio/Imagine Dragons-I Dont Know Why.mp3",
        "../Database/Audio/Imagine Dragons-Next TO Me.mp3",
        "../Database/Audio/Imagine Dragons-I Dont Wanna Go.mp3",
        "../Database/Audio/Imagine Dragons-Rise Up.mp3",
        "../Database/Audio/Imagine Dragons-Thuder.mp3",
        "../Database/Audio/Imagine Dragons-Whatever It Takes.mp3",
    ];

    PlayList = [
        SONGS_PATH[0], SONGS_PATH[1], SONGS_PATH[2], SONGS_PATH[3], SONGS_PATH[4], SONGS_PATH[5], SONGS_PATH[6],

    ];

    SONGS_NAMES = [
        "Believer", "I Dont Know Why", "Next To Me", "I Dont Wanna Go", "Rise Up", "Thunder", "Whatever It Takes",
    ];

    SONGS_ARTITST = [
        "Imagine Dragons", "Imagine Dragons", "Imagine Dragons", "Imagine Dragons", "Imagine Dragons", "Imagine Dragons", "Imagine Dragons",
    ];

    ALBUM_COVERS = [
        "../Database/images/AlbumCovers/Believer.png",
        "../Database/images/AlbumCovers/Believer.png",
        "../Database/images/AlbumCovers/Believer.png",
        "../Database/images/AlbumCovers/Believer.png",
        "../Database/images/AlbumCovers/Believer.png",
        "../Database/images/AlbumCovers/Believer.png",
        "../Database/images/AlbumCovers/Believer.png",
    ];


} else if (loggedInUsername == "Farah") {
    document.getElementById("DifferentWorld").style.display = "block";
    SONGS_PATH = [
        "../Database/Audio/Alan Walker-Alone.mp3",
        "../Database/Audio/Alan Walker-Do It All for You.mp3",
        "../Database/Audio/Alan Walker-Faded.mp3",
        "../Database/Audio/Alan Walker-I Dont Wanna Go.mp3",
        "../Database/Audio/Alan Walker-Lily.mp3",
        "../Database/Audio/Alan Walker-Lonely.mp3",
    ];

    PlayList = [
        SONGS_PATH[0], SONGS_PATH[1], SONGS_PATH[2], SONGS_PATH[3], SONGS_PATH[4], SONGS_PATH[5],

    ];

    SONGS_NAMES = [
        "Alone", "Do It All for You", "Faded", "I Dont Wanna Go", "Lily", "Lonely",
    ];

    SONGS_ARTITST = [
        "Alan Walker", "Alan Walker", "Alan Walker", "Alan Walker", "Alan Walker", "Alan Walker",
    ];

    ALBUM_COVERS = [
        "../Database/images/AlbumCovers/DifferentWorld.png",
        "../Database/images/AlbumCovers/DifferentWorld.png",
        "../Database/images/AlbumCovers/DifferentWorld.png",
        "../Database/images/AlbumCovers/DifferentWorld.png",
        "../Database/images/AlbumCovers/DifferentWorld.png",
        "../Database/images/AlbumCovers/DifferentWorld.png",
    ];
} else if (loggedInUsername == "Ahmed") {
    document.getElementById("MusicToBeMurderedBy").style.display = "block";
    SONGS_PATH = [
        "../Database/Audio/Eminem-Darkness.mp3",
        "../Database/Audio/Eminem-Farewell.mp3",
        "../Database/Audio/Eminem-Godzilla.mp3",
        "../Database/Audio/Eminem-Lock It Up.mp3",
        "../Database/Audio/Eminem-No Regrets.mp3",
        "../Database/Audio/Eminem-Those Kinda Nights.mp3",
    ];

    PlayList = [
        SONGS_PATH[0], SONGS_PATH[1], SONGS_PATH[2], SONGS_PATH[3], SONGS_PATH[4], SONGS_PATH[5],

    ];

    SONGS_NAMES = [
        "Darkness", "Farewell", "Godzilla", "Lock It Up", "No Regrets", "Those Kinda Nights",
    ];

    SONGS_ARTITST = [
        "Eminem", "Eminem", "Eminem", "Eminem", "Eminem", "Eminem",
    ];

    ALBUM_COVERS = [
        "../Database/images/AlbumCovers/MusicToBeMurderedBy.png",
        "../Database/images/AlbumCovers/MusicToBeMurderedBy.png",
        "../Database/images/AlbumCovers/MusicToBeMurderedBy.png",
        "../Database/images/AlbumCovers/MusicToBeMurderedBy.png",
        "../Database/images/AlbumCovers/MusicToBeMurderedBy.png",
        "../Database/images/AlbumCovers/MusicToBeMurderedBy.png",
    ];


} else if (loggedInUsername == "Ayman") {
    document.getElementById("TheWall").style.display = "block";
    SONGS_PATH = [
        "../Database/Audio/Pink Floyd-Comfortably Numb",
        "../Database/Audio/Pink Floyd-Hey You.mp3",
        "../Database/Audio/Pink Floyd-In The Flesh.mp3",
        "../Database/Audio/Pink Floyd-The Happiest Days Of Our Lives.mp3",
        "../Database/Audio/Pink Floyd-Thin Ice.mp3",
    ];

    PlayList = [
        SONGS_PATH[0], SONGS_PATH[1], SONGS_PATH[2], SONGS_PATH[3], SONGS_PATH[4],

    ];

    SONGS_NAMES = [
        "Comfortably Numb", "Hey You", "In The Flesh", "The Happiest Days Of Our Lives", "Thin Ice",
    ];

    SONGS_ARTITST = [
        "Pink Floyd", "Pink Floyd", "Pink Floyd", "Pink Floyd", "Pink Floyd",
    ];

    ALBUM_COVERS = [
        "../Database/images/AlbumCovers/TheWall.png",
        "../Database/images/AlbumCovers/TheWall.png",
        "../Database/images/AlbumCovers/TheWall.png",
        "../Database/images/AlbumCovers/TheWall.png",
        "../Database/images/AlbumCovers/TheWall.png",
        "../Database/images/AlbumCovers/TheWall.png",
    ];

} else {
    alert("You are a new user!");
    window.location.href = "../Home/index.html";
}

var AudioPlayer = new Audio();

var PreviousBTN = document.getElementById("prev-btn");
var PlayBTN = document.getElementById("play-btn");
var NextBTN = document.getElementById("next-btn");
const PlayPause = document.getElementById('play-btn');
const ArtistName = document.getElementById('ArtistName');
const SongName = document.getElementById('SongName');
const VolumeSlider = document.getElementById('volume-slider');
const PlayTimeSlider = document.getElementById('song-playtime');
const AlbumCoverPhoto = document.getElementById('albumCoverPic');

PreviousBTN.addEventListener('click', PreviousSong);
PlayBTN.addEventListener('click', TogglePlay);
NextBTN.addEventListener('click', NextSong);
PlayPause.addEventListener('click', PlayPauseImageChange);
VolumeSlider.addEventListener('input', ChangeVolume);
PlayTimeSlider.addEventListener('timeupdate', UpdatePlayTime);

setInterval(UpdatePlayTime, 20);


var SongIndex = 0;
AudioPlayer.src = PlayList[SongIndex];


function PreviousSong() {
    SongIndex = (SongIndex - 1 + PlayList.length) % PlayList.length;
    AudioPlayer.src = PlayList[SongIndex];

    AudioPlayer.play();
    SongName.textContent = SONGS_NAMES[SongIndex];
    ArtistName.textContent = SONGS_ARTITST[SongIndex];
    AlbumCoverPhoto.src = ALBUM_COVERS[SongIndex];
}

function TogglePlay() {
    if (AudioPlayer.paused) {
        AudioPlayer.play();
    }
    else {
        AudioPlayer.pause();
    }
}

function NextSong() {
    SongIndex = (SongIndex + 1) % PlayList.length;
    AudioPlayer.src = PlayList[SongIndex];
    AudioPlayer.play();
    SongName.textContent = SONGS_NAMES[SongIndex];
    ArtistName.textContent = SONGS_ARTITST[SongIndex];
    AlbumCoverPhoto.src = ALBUM_COVERS[SongIndex];
}

function PlayPauseImageChange() {
    if (PlayPause.src.includes('play.png')) {
        PlayPause.src = '../Database/icons/pause.png';
    } else {
        PlayPause.src = '../Database/icons/play.png';
    }
}

function ChangeVolume() {
    AudioPlayer.volume = VolumeSlider.value / 100;
}


function UpdatePlayTime() {
    const currentTime = AudioPlayer.currentTime;
    const duration = AudioPlayer.duration;
    const percentage = currentTime / duration * 100;
    PlayTimeSlider.value = percentage;
}

