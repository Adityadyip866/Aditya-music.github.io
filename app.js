let musicPlayerDiv = document.querySelector(".music-player-div");
let musicListDiv = document.querySelector(".music-list");
let musicListIcon = document.querySelector(".music-player-top-icon");

musicListDiv.style.display = "none";

MusicListIconIsClicked = false;

function showMusicPlayer() {
  musicListIcon.children[0].classList.replace("fa-arrow-left", "fa-bars");
  musicPlayerDiv.style.display = "block";
  musicListDiv.style.display = "none";
  MusicListIconIsClicked = false;
}

function showMusicList() {
  musicListIcon.children[0].classList.replace("fa-bars", "fa-arrow-left");
  musicPlayerDiv.style.display = "none";
  musicListDiv.style.display = "block";
  MusicListIconIsClicked = true;
}

musicListIcon.addEventListener("click", function () {
  if (MusicListIconIsClicked) {
    showMusicPlayer();
  } else {
    showMusicList();
  }
});

let musicTitleH1 = document.querySelector("#musicTitle");
let musicArtistH6 = document.querySelector("#musicArtist");
let clipArtDiv = document.querySelector(".clip-art");
let prevBtn = document.querySelector("#prev");
let playBtn = document.querySelector("#play");
let nextBtn = document.querySelector("#next");
let music = document.querySelector("audio");

songs = [
  {
    name: "Ae Dil Hai Mushkil Title Track Full Video - Ranbir, Anushka, AishwaryaArijitPritam.mp3",
    title: "Aeh dil h Mushkil",
    artist: "Arijit Singh",
    clipArt: "cd.png",
  },
  {
    name: "audio.mp3",
    title: "dillagi",
    artist: "nusrat fateh ali khan",
    clipArt: "cd.png",
  },
  {
    name: "Bhar-Do-Jholi-Meri(webmusic.in).mp3",
    title: "Bhar do jholi",
    artist: "Adnan Sami",
    clipArt: "cd.png",
  },
  {
    name: "BreathlessShankar Mahadevan Full Version !!!.mp3",
    title: "breathlesss",
    artist: "Shankarmahadevan",
    clipArt: "cd.png",
  },
  {
    name: "Full Song KHAIRIYAT (BONUS TRACK) CHHICHHORE Sushant, Shraddha Pritam, Amitabh BArijit S.mp3",
    title: "khairiyat",
    artist: "Arijit Singh",
    clipArt: "cd.png",
  },
  {
    name: "Ye Jo Halka Halka Suroor by Parthiv Gohil Nusrat Fateh Ali Khan Ye Jo Halka Halka Suroor H.mp3",
    title: "halk halka",
    artist: "parthiv govil",
    clipArt: "cd.png",
  },
  {
    name: "Humsafar (Full Video) Varun & Alia Bhatt Akhil Sachdeva Badrinath Ki Dulhania.mp3",
    title: "humsafar",
    artist: "Akhil s.",
    clipArt: "cd.png",
  },
  {
    name: "Jee-Karda_(webmusic.cc).mp3",
    title: "jee karda",
    artist: "divya kumar",
    clipArt: "cd.png",
  },
  {
    name: "Judaai_(webmusic.cc).mp3",
    title: "judai",
    artist: "Arjit Singh",
    clipArt: "cd.png",
  },
  {
    name: "Khamoshiyan.mp3",
    title: "khamoshiyan",
    artist: "Arijit Sigh",
    clipArt: "cd.png",
  },
  {
    name: "Lut Gaye - Jubin Nautiyal.mp3",
    title: "lut gaye",
    artist: "jubin n.",
    clipArt: "cd.png",
  },
  {
    name: "MERE RASHKE QAMAR (Original Complete Version) - USTAD NUSRAT FATEH ALI KHAN - OFFICIAL VIDEO.mp3",
    title: "Rashke Qamar",
    artist: "Nusrat fateh ali khan",
    clipArt: "cd.png",
  },
  {
    name: "Pee Loon Lyrical Song Once Upon A Time in Mumbai Pritam Emraan Hashmi, Prachi Desai.mp3",
    title: "pee loon",
    artist: "mohit c.",
    clipArt: "cd.png",
  },
  {
    name: "Raabta (Kehte Hain Khuda) Full Song With LyricsAgent VinodSaif Ali Khan, Kareena Kapoor,Pritam.mp3",
    title: "rabta",
    artist: "Arijit Singh",
    clipArt: "cd.png",
  },
  {
    name: "Sanu Ek Pal Chain VideoRaidAjay DevgnIleana D'Cruz Tanishk B Rahat Fateh Ali Khan Manoj M.mp3",
    title: "sanu ek pal .....",
    artist: "Rahatfateh Ali Khan",
    clipArt: "cd.png",
  },
  {
    name: "Shahkarut.mp3",
    title: "Shah ka Rutba",
    artist: "sukhwinder s.",
    clipArt: "cd.png",
  },
  {
    name: "Shayad - Love Aaj Kal.mp3",
    title: "Shayad..",
    artist: "Arijit Singh",
    clipArt: "cd.png",
  },
  {
    name: "Sochta hoon ke woh kitne masoom thay By Nusrat Fateh Ali Khan Lyrics By NFAK.mp3",
    title: "Sochta hoon...",
    artist: "Nusrat fateh ali Khan",
    clipArt: "cd.png",
  },
  {
    name: "Taaron Ke Shehar - Neha Kakkar.mp3",
    title: "Taroon ke sheher",
    artist: "Neha k &jubin n.",
    clipArt: "cd.png",
  },
  {
    name: "Yeh Tune Kya Kiya Song Once upon A Time In Mumbaai Dobara Pritam Akshay Kumar, Sonakshi Sinh.mp3",
    title: "Yeh tune Kya kiya",
    artist: "Javed bashir",
    clipArt: "cd.png",
  },
];

let musicIsPlaying = false;

//for music play functionality
function playMusic() {
  musicIsPlaying = true;
  music.play();
  playBtn.childNodes[0].classList.replace("fa-play", "fa-pause");
  clipArtDiv.classList.add("animatePlayer");
}

//for music pause functionality
function pauseMusic() {
  musicIsPlaying = false;
  music.pause();
  playBtn.childNodes[0].classList.replace("fa-pause", "fa-play");
  clipArtDiv.classList.remove("animatePlayer");
}

playBtn.addEventListener("click", function () {
  if (musicIsPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

//changing songs data

function loadSong(songs) {
  musicTitleH1.textContent = songs.title;
  musicArtistH6.textContent = songs.artist;
  music.src = "Song/" + songs.name;
  clipArtDiv.childNodes[1].src = "ClipArt/" + songs.clipArt;
}

songIndex = 0;
loadSong(songs[songIndex]);

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
}
function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
}

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

/*
Coding for Music Lists
*/

let musicList = document.querySelector(".musics-ul").children;

for (let i = 0; i < musicList.length; i++) {
  let array = i;
  musicList[i].textContent = array + ". " + songs[i].title;
  musicList[i].setAttribute("id", i);

  musicList[i].addEventListener("click", function () {
    //console.log(this.id);
    loadSong(songs[this.id]);
    showMusicPlayer();
    playMusic();
  });
}
