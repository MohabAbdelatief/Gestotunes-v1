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


SONGS_PATH = [
    "../Database/Audio/NF-TheSearch.mp3",
    "../Database/Audio/NF-LeaveMeAlone.mp3",
    "../Database/Audio/NF-WhenIGrowUp.mp3",
    "../Database/Audio/NF-Time.mp3",
    "../Database/Audio/NF-Nate.mp3",
    "../Database/Audio/JoshA-My Year.mp3",
    "../Database/Audio/JoshA-RIP.mp3",
    "../Database/Audio/JoshA-No Complaints.mp3",
    "../Database/Audio/JoshA-Relevations.mp3",
    "../Database/Audio/JoshA-Study Break.mp3",
    "../Database/Audio/JoshA-Late Nights.mp3",
    "../Database/Audio/Travis Scott-I KNOW.mp3",
    "../Database/Audio/Travis Scott-MELTDOWN.mp3",
    "../Database/Audio/Travis Scott-MODERN JAM.mp3",
    "../Database/Audio/Travis Scott-TIL FURTHER NOTICE.mp3",
    "../Database/Audio/Travis Scott-MY EYES.mp3",
    "../Database/Audio/NF-HOPE.mp3",
    "../Database/Audio/NF-CAREFUL.mp3",
    "../Database/Audio/NF-HAPPY.mp3",
    "../Database/Audio/NF-RUNNING.mp3",
    "../Database/Audio/NF-PANDEMONIUM.mp3",
    "../Database/Audio/NF-MOTTO.mp3",
    "../Database/Audio/Alan Walker-Alone.mp3",
    "../Database/Audio/Alan Walker-Faded.mp3",
    "../Database/Audio/Alan Walker-Do It All for You.mp3",
    "../Database/Audio/Alan Walker-Lily.mp3",
    "../Database/Audio/Alan Walker-Lonely.mp3",
    "../Database/Audio/Alan Walker-I Dont Wanna Go.mp3",
    "../Database/Audio/Eminem-Darkness.mp3",
    "../Database/Audio/Eminem-Godzilla.mp3",
    "../Database/Audio/Eminem-Farewell.mp3",
    "../Database/Audio/Eminem-Lock It Up.mp3",
    "../Database/Audio/Eminem-No Regrets.mp3",
    "../Database/Audio/Eminem-Those Kinda Nights.mp3",
    "../Database/Audio/Imagine Dragons-Believer.mp3",
    "../Database/Audio/Imagine Dragons-I Dont Know Why.mp3",
    "../Database/Audio/Imagine Dragons-Next To Me.mp3",
    "../Database/Audio/Imagine Dragons-Rise Up.mp3",
    "../Database/Audio/Imagine Dragons-Thunder.mp3",
    "../Database/Audio/Imagine Dragons-Whatever It Takes.mp3",
    "../Database/Audio/Owl City-Dementia.mp3",
    "../Database/Audio/Owl City-Dreams And Disaster.mp3",
    "../Database/Audio/Owl City-Gold.mp3",
    "../Database/Audio/Owl City-I'm Coming After You.mp3",
    "../Database/Audio/Owl City-Shooting Star.mp3",
    "../Database/Audio/Owl City-Speed Of Love.mp3",
];

PlayList = [
    SONGS_PATH[0], SONGS_PATH[1], SONGS_PATH[2], SONGS_PATH[3], SONGS_PATH[4],
    SONGS_PATH[5], SONGS_PATH[6], SONGS_PATH[7], SONGS_PATH[8], SONGS_PATH[9],
    SONGS_PATH[10], SONGS_PATH[11], SONGS_PATH[12], SONGS_PATH[13], SONGS_PATH[14], SONGS_PATH[15],
    SONGS_PATH[16], SONGS_PATH[17], SONGS_PATH[18], SONGS_PATH[19], SONGS_PATH[20], SONGS_PATH[21],
    SONGS_PATH[22], SONGS_PATH[23], SONGS_PATH[24], SONGS_PATH[25], SONGS_PATH[26], SONGS_PATH[27],
    SONGS_PATH[28], SONGS_PATH[29], SONGS_PATH[30], SONGS_PATH[31], SONGS_PATH[32], SONGS_PATH[33],
    SONGS_PATH[34], SONGS_PATH[35], SONGS_PATH[36], SONGS_PATH[37], SONGS_PATH[38], SONGS_PATH[39],
    SONGS_PATH[40], SONGS_PATH[41], SONGS_PATH[42], SONGS_PATH[43], SONGS_PATH[44], SONGS_PATH[45],

];

SONGS_NAMES = [
    "The Search", "Leave Me Alone", "When I Grow Up", "Time", "Nate",
    "My Year", "RIP", "No Complaints", "Relevations", "Study Break", "Late Night",
    "I KNOW", "METLDOWN", "MODERN JAM", "TIL FURTHER NOTICE", "MY EYES",
    "HOPE", "CAREFUL", "HAPPY", "RUNNING", "PANDEMONIUM", "MOTTO",
    "Alone", "Faded", "Do It All for You", "Lily", "Lonely", "I Dont Wanna Go",
    "Darkness", "Godzilla", "Farewell", "Lock It Up", "No Regrets", "Those Kinda Nights",
    "Believer", "I Dont Know Why", "Next To Me", "Rise Up", "Thunder", "Whatever It Takes",
    "Dementia", "Dreams And Disaster", "Gold", "I'm Coming After You", "Shooting Star", "Speed Of Love",

];

SONGS_ARTITST = [
    "NF", "NF", "NF", "NF", "NF",
    "Josh A", "Josh A", "Josh A", "Josh A", "Josh A", "Josh A",
    "Travis Scott", "Travis Scott", "Travis Scott", "Travis Scott", "Travis Scott",
    "NF", "NF", "NF", "NF", "NF", "NF",
    "Alan Walker", "Alan Walker", "Alan Walker", "Alan Walker", "Alan Walker", "Alan Walker",
    "Eminem", "Eminem", "Eminem", "Eminem", "Eminem", "Eminem",
    "Imagine Dragons", "Imagine Dragons", "Imagine Dragons", "Imagine Dragons", "Imagine Dragons", "Imagine Dragons",
    "Owl City", "Owl City", "Owl City", "Owl City", "Owl City", "Owl City",

];

ALBUM_COVERS = [
    "../Database/images/AlbumCovers/TheSearch.png",
    "../Database/images/AlbumCovers/TheSearch.png",
    "../Database/images/AlbumCovers/TheSearch.png",
    "../Database/images/AlbumCovers/TheSearch.png",
    "../Database/images/AlbumCovers/TheSearch.png",
    "../Database/images/AlbumCovers/Blessed.png",
    "../Database/images/AlbumCovers/Blessed.png",
    "../Database/images/AlbumCovers/Blessed.png",
    "../Database/images/AlbumCovers/Blessed.png",
    "../Database/images/AlbumCovers/Blessed.png",
    "../Database/images/AlbumCovers/Blessed.png",
    "../Database/images/AlbumCovers/UTOPIA.png",
    "../Database/images/AlbumCovers/UTOPIA.png",
    "../Database/images/AlbumCovers/UTOPIA.png",
    "../Database/images/AlbumCovers/UTOPIA.png",
    "../Database/images/AlbumCovers/UTOPIA.png",
    "../Database/images/AlbumCovers/HOPE.png",
    "../Database/images/AlbumCovers/HOPE.png",
    "../Database/images/AlbumCovers/HOPE.png",
    "../Database/images/AlbumCovers/HOPE.png",
    "../Database/images/AlbumCovers/HOPE.png",
    "../Database/images/AlbumCovers/HOPE.png",
    "../Database/images/AlbumCovers/DifferentWorld.png",
    "../Database/images/AlbumCovers/DifferentWorld.png",
    "../Database/images/AlbumCovers/DifferentWorld.png",
    "../Database/images/AlbumCovers/DifferentWorld.png",
    "../Database/images/AlbumCovers/DifferentWorld.png",
    "../Database/images/AlbumCovers/DifferentWorld.png",
    "../Database/images/AlbumCovers/MusicToBeMurderedBy.png",
    "../Database/images/AlbumCovers/MusicToBeMurderedBy.png",
    "../Database/images/AlbumCovers/MusicToBeMurderedBy.png",
    "../Database/images/AlbumCovers/MusicToBeMurderedBy.png",
    "../Database/images/AlbumCovers/MusicToBeMurderedBy.png",
    "../Database/images/AlbumCovers/Evolve.png",
    "../Database/images/AlbumCovers/Evolve.png",
    "../Database/images/AlbumCovers/Evolve.png",
    "../Database/images/AlbumCovers/Evolve.png",
    "../Database/images/AlbumCovers/Evolve.png",
    "../Database/images/AlbumCovers/Evolve.png",
    "../Database/images/AlbumCovers/Evolve.png",
    "../Database/images/AlbumCovers/TheMidSummerStation.png",
    "../Database/images/AlbumCovers/TheMidSummerStation.png",
    "../Database/images/AlbumCovers/TheMidSummerStation.png",
    "../Database/images/AlbumCovers/TheMidSummerStation.png",
    "../Database/images/AlbumCovers/TheMidSummerStation.png",
    "../Database/images/AlbumCovers/TheMidSummerStation.png",

];

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




const serverUrl = 'ws://localhost:1234'; // WebSocket server address

var websocket = new WebSocket(serverUrl);

websocket.onmessage = function (event) {
    var message = event.data;
    console.log('Message received: ' + message); // HAND GESTURES
    if (message === 'Play') {
        if (AudioPlayer.paused) {
            AudioPlayer.play();
            PlayPause.src = '../Database/icons/pause.png';
        } else {
            AudioPlayer.pause();
            PlayPause.src = '../Database/icons/play.png';
        }
    } else if (message === 'Pause') {
        if (!AudioPlayer.paused) {
            AudioPlayer.pause();
            PlayPause.src = '../Database/icons/play.png';
        }

    } else if (message === 'Next') {
        NextSong();
    } else if (message === 'Previous') {
        PreviousSong();
    } else if (message === 'VolumeUp') {
        if (AudioPlayer.volume < 1) {
            AudioPlayer.volume += 0.5;
            VolumeSlider.value = AudioPlayer.volume * 100;
        }
    } else if (message === 'VolumeDown') {
        if (AudioPlayer.volume > 0) {
            AudioPlayer.volume -= 0.5;
            VolumeSlider.value = AudioPlayer.volume * 100;
        }
    } else if (message === 'Mute') {
        AudioPlayer.volume = 0;
        VolumeSlider.value = AudioPlayer.volume * 100;
    } // TUIO
    else if (message === "1") {
        AudioPlayer.volume = 0;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "2") {
        AudioPlayer.volume = 0.06;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "3") {
        AudioPlayer.volume = 0.09;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "4") {
        AudioPlayer.volume = 0.12;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "5") {
        AudioPlayer.volume = 0.15;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "6") {
        AudioPlayer.volume = 0.18;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "7") {
        AudioPlayer.volume = 0.21;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "8") {
        AudioPlayer.volume = 0.24;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "9") {
        AudioPlayer.volume = 0.27;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "10") {
        AudioPlayer.volume = 0.30;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "11") {
        AudioPlayer.volume = 0.33;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "12") {
        AudioPlayer.volume = 0.36;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "13") {
        AudioPlayer.volume = 0.39;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "14") {
        AudioPlayer.volume = 0.42;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "15") {
        AudioPlayer.volume = 0.45;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "16") {
        AudioPlayer.volume = 0.48;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "17") {
        AudioPlayer.volume = 0.51;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "18") {
        AudioPlayer.volume = 0.54;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "19") {
        AudioPlayer.volume = 0.57;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "20") {
        AudioPlayer.volume = 0.60;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "21") {
        AudioPlayer.volume = 0.63;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "22") {
        AudioPlayer.volume = 0.66;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "23") {
        AudioPlayer.volume = 0.69;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "24") {
        AudioPlayer.volume = 0.72;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "25") {
        AudioPlayer.volume = 0.75;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "26") {
        AudioPlayer.volume = 0.78;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "27") {
        AudioPlayer.volume = 0.81;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "28") {
        AudioPlayer.volume = 0.84;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "29") {
        AudioPlayer.volume = 0.87;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "30") {
        AudioPlayer.volume = 0.90;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "31") {
        AudioPlayer.volume = 0.93;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "32") {
        AudioPlayer.volume = 0.96;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "33") {
        AudioPlayer.volume = 0.99;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "34") {
        AudioPlayer.volume = 0.99;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
    else if (message === "35") {
        AudioPlayer.volume = 1;
        VolumeSlider.value = AudioPlayer.volume * 100;
    }
};

websocket.onclose = function (event) {
    console.log('Connection closed: ', event);
};

websocket.onerror = function (error) {
    console.error('Error occurred: ', error);
};

websocket.onopen = function (event) {
    console.log('WebSocket connection established.');
};







