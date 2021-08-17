"strict mode";

// const album1 = {
//   name: "Bohemian Rhapsody (The Original Soundtrack)",
//   artist: "Queen",
//   year: "2018",
//   albumCover: "electric-warrior.png",
//   duration: "22 Songs, 1 hr 19 min",
//   songList: [
//     {
//       title: "20th Century Fox Fanfare",
//       songDuration: "0.25",
//       songArtist: "Queen",
//     },
//     {
//       title: "Somebody to Love",
//       songDuration: "4.56",
//       songArtist: "Queen",
//     },

//     {
//       title: "Doing All Right... Revisited",
//       songDuration: "3.17",
//       songArtist: "Queen",
//     },

//     {
//       title: "Keep Yourself Alive",
//       songDuration: "3.56",
//       songArtist: "Queen",
//     },

//     {
//       title: "Killer Queen",
//       songDuration: "2.59",
//       songArtist: "Queen",
//     },

//     {
//       title: "Fat Bottomed Girls",
//       songDuration: "4.38",
//       songArtist: "Queen",
//     },
//     {
//       title: "Bohemian Rhapsody",
//       songDuration: "5.55",
//       songArtist: "Queen",
//     },
//     {
//       title: "Now I'm Here",
//       songDuration: "4.26",
//       songArtist: "Queen",
//     },
//     {
//       title: "Crazy Little Thing Called Love",
//       songDuration: "2.43",
//       songArtist: "Queen",
//     },
//     {
//       title: "Love of My Life",
//       songDuration: "4.29",
//       songArtist: "Queen",
//     },
//     {
//       title: "We Will Rock You",
//       songDuration: "2.09",
//       songArtist: "Queen",
//     },
//     {
//       title: "Another One Bites the Dust",
//       songDuration: "3.35",
//       songArtist: "Queen",
//     },
//     {
//       title: "I Want to Break Free",
//       songDuration: "3.43",
//       songArtist: "Queen",
//     },
//     {
//       title: "Under Pressure",
//       songDuration: "4.04",
//       songArtist: "Queen feat. David Bowie",
//     },
//     {
//       title: "Who Wants to Live Forever",
//       songDuration: "5.15",
//       songArtist: "Queen",
//     },
//     {
//       title: "Bohemian Rhapsody(Live)",
//       songDuration: "2.28",
//       songArtist: "Queen",
//     },
//     {
//       title: "Radio Ga Ga",
//       songDuration: "4:06",
//       songArtist: "Queen",
//     },
//     {
//       title: "Ay-Oh",
//       songDuration: "0:41",
//       songArtist: "Queen",
//     },
//     {
//       title: "Hammer to Fall",
//       songDuration: "4:04",
//       songArtist: "Queen",
//     },
//     {
//       title: "We Are the Champions",
//       songDuration: "3:57",
//       songArtist: "Queen",
//     },
//     {
//       title: "Don't Stop Me Now... Revisited",
//       songDuration: "3:38",
//       songArtist: "Queen",
//     },
//     {
//       title: "The Show Must Go On",
//       songDuration: "4:32",
//       songArtist: "Queen",
//     },
//   ],
// };

// const album2 = {
//   name: "News of the World",
//   artist: "Queen",
//   year: "1977",
//   albumCover: "dogrel.png",
//   duration: "11 Songs, 39 min",
//   songList: [
//     {
//       title: "We Will Rock You",
//       songDuration: "2:01",
//       songArtist: "Queen",
//     },
//     {
//       title: "We Are the Champions",
//       songDuration: "2:59",
//       songArtist: "Queen",
//     },

//     {
//       title: "Sheer Heart Attack",
//       songDuration: "3:26",
//       songArtist: "Queen",
//     },

//     {
//       title: "All Dead, All Dead",
//       songDuration: "3:10",
//       songArtist: "Queen",
//     },

//     {
//       title: "Spread Your Wings",
//       songDuration: "4:34",
//       songArtist: "Queen",
//     },

//     {
//       title: "Fight from the Inside",
//       songDuration: "4.38",
//       songArtist: "Queen",
//     },
//     {
//       title: "Get Down, Make Love",
//       songDuration: "5.55",
//       songArtist: "Queen",
//     },
//     {
//       title: "Sleeping on the Sidewalk",
//       songDuration: "4.26",
//       songArtist: "Queen",
//     },
//     {
//       title: "Who Needs You",
//       songDuration: "2.43",
//       songArtist: "Queen",
//     },
//     {
//       title: "It's Late",
//       songDuration: "4.29",
//       songArtist: "Queen",
//     },
//     {
//       title: "My Melancholy Blues",
//       songDuration: "2.09",
//       songArtist: "Queen",
//     },
//   ],
// };

const albumCardInfo = [
  {
    artist: "Arctic Monkeys",
    name: " Whatever People Say I Am, That's What I'm Not",
    genre: "Indie Rock",
    releaseDate: 2006,
    cover: "arctic-monkeys",
    id: "001",
  },
  {
    artist: "Red Hot Chilli Peppers",
    name: "Californication",
    genre: "Alternative Rock",
    releaseDate: 1999,
    cover: "californication",
    id: "002",
  },
  {
    artist: "Dr Dre",
    name: "The Chronic: 2001",
    genre: "Hip Hop",
    releaseDate: 1999,
    cover: "chronic-dre",
    id: "003",
  },
  {
    artist: "Tom Waits",
    name: "Closing Time",
    genre: "Folk",
    releaseDate: 1973,
    cover: "closing-time",
    id: "004",
  },
  {
    artist: "T-Rex",
    name: "Electric Warrior",
    genre: "Glam Rock",
    releaseDate: 1971,
    cover: "electric-warrior",
    id: "005",
  },
  {
    artist: "Eminem",
    name: "The Eminem Show",
    genre: "Hip Hop",
    releaseDate: 2002,
    cover: "eminem-show",
    id: "006",
  },
  {
    artist: "Arcade Fire",
    name: "Funeral",
    genre: "Indie Rock",
    releaseDate: 2004,
    cover: "funeral",
    id: "007",
  },
  {
    artist: "Kendrick Lamar",
    name: "Good Kid, M.A.A.D City",
    genre: "Hip Hop",
    releaseDate: 2012,
    cover: "good-kid-mad-city",
    id: "008",
  },
  {
    artist: "Hozier",
    name: "Hozier",
    genre: "Blues",
    releaseDate: 2014,
    cover: "hozier",
    id: "009",
  },
  {
    artist: "Nas",
    name: "Illmatic",
    genre: "Hip Hop",
    releaseDate: 1994,
    cover: "illimatic",
    id: "010",
  },
  {
    artist: "Kasabian",
    name: "West Ryder Pauper Lunatic Asylum",
    genre: "Indie Rock",
    releaseDate: 2009,
    cover: "kasabian",
    id: "011",
  },
  {
    artist: "The Vaccines",
    name: " What Did You Expect from The Vaccines?",
    genre: "Indie Rock",
    releaseDate: 2011,
    cover: "vaccines",
    id: "012",
  },
];

const generateAlbumPageJumbotron = function (album, container) {
  let newJumbotron = document.createElement("div");
  newJumbotron.innerHTML = `
  <div class="jumbotron jumbotron-fluid img-fluid album-jumbo pb-5">
    <div class="for-about-album">
      <img class="shadow-lg d-none d-sm-inline reflect" src="assets/${album.albumCover}" alt="">
      <div class="mt-3 mt-sm-0">
        <p><strong>ALBUM</strong> </p>
        <h1 class="album-title-jumbo">${album.name}</h1>
        
        <p class="album-summary"><img class="round-artist1 reflect" src="assets/mgmt.png" alt=""><strong> ${album.artist}</strong><i class="bi bi-dot"></i>2018<i class="bi bi-dot"></i>${album.duration}</p>
      </div>
    </div>
   
 </div>`;

  container.appendChild(newJumbotron);
};

const generateAlbumTable = function (albumTitle) {
  let albumTableBody = document.createElement("tbody");
  for (i = 0; i < albumTitle.songList.length; i++) {
    let newTableRow = document.createElement("tr");
    newTableRow.innerHTML = `<td scope="row" class="align-middle"> ${i + 1}</td>
      
    <td><div>${
      albumTitle.songList[i].title
    } </div> <div class="artist-name">Queen</div> </td>
    
    <td class="align-middle keep-on-page">${
      albumTitle.songList[i].songDuration
    }</td>`;
    albumTableBody.appendChild(newTableRow);
  }
  return albumTableBody;
};

const generateTrackList = function (album) {
  let albumTableContainer = document.createElement("div");
  albumTableContainer.classList.add(
    "main-container",
    "main-container-album",
    "container-fluid",
    "album-songs-container"
  );
  albumTableContainer.innerHTML = `  <div class="top-of-artist-songs mb-3 pt-3">
  <div class="spotify-circle">
    <div class="half-of-pause first-pause"></div>
    <div class="half-of-pause second-pause"></div>
  </div>
  <div class="album-heart"><i class="bi bi-heart"></i></div>
  <div class="album-dots"> <div class="small-circle"></div>
  <div class="small-circle"></div>
    <div class="small-circle"></div></div>
</div>`;
  let tableBootRow = document.createElement("div");
  tableBootRow.classList.add("row", "ml-1");
  let table = document.createElement("table");
  table.classList.add("table", "table-borderless");
  table.innerHTML = `  <thead>
  <tr>
  <td>#</td>
  <td>TITLE</td>
  <td><i class="bi bi-clock keep-on-page-clock"></i></td>
</tr>
</thead>`;
  let tableBody = generateAlbumTable(album);
  table.appendChild(tableBody);
  tableBootRow.appendChild(table);
  albumTableContainer.appendChild(tableBootRow);
  let albumTableContainerDiv = document.getElementById(
    "album-table-container-div"
  );
  albumTableContainerDiv.appendChild(albumTableContainer);
};

// let albumName;

//ORIGINAL FUNCTION
////////////////////////////////

// const generateAlbum = function (album) {
//   let albumJumbotronContainer = document.getElementById(
//     "album-jumbotron-container"
//   );
//   let albumTableContainerDiv = document.getElementById(
//     "album-table-container-div"
//   );
//   albumJumbotronContainer.innerHTML = "";
//   albumTableContainerDiv.innerHTML = "";
//   //   console.log(albumJumbotronContainer);
//   generateAlbumPageJumbotron(album, albumJumbotronContainer);
//   generateTrackList(album);
// };
////////////////////////////////

//QUERY STRING FUNCTION
//////////////////////////////////

const getQueryString = function () {
  let currentUrl = window.location.href.toString();
  let albumString = currentUrl.slice(-6);
  return albumString;
};

const generateAlbum = function (album) {
  let albumJumbotronContainer = document.getElementById(
    "album-jumbotron-container"
  );
  let albumTableContainerDiv = document.getElementById(
    "album-table-container-div"
  );
  albumJumbotronContainer.innerHTML = "";
  if (queryString === "album1") {
    generateAlbum(album1);
  }
  albumTableContainerDiv.innerHTML = "";
  //   console.log(albumJumbotronContainer);
  generateAlbumPageJumbotron(album, albumJumbotronContainer);
  generateTrackList(album);
};

////////////////////////////////////

const seeAllOne = function () {
  let recentlyPlayedRow = document.getElementById("recently-played-row");
  let firstSeeAll = document.getElementById("first-see-all");
  for (i = 0; i < 6; i++) {
    let newAlbumCard = document.createElement("div");
    newAlbumCard.classList.add("col", "album-card2", "px-1");
    newAlbumCard.innerHTML = `<div class="album-card2-cont">
    <img src="assets/${albumCardInfo[i].cover}.png" alt="">
    <h5>${albumCardInfo[i].artist}</h5>
    <p>${albumCardInfo[i].releaseDate} - Album</p><div class="play-button-div"><div class="play-button-bg"></div>
    <i class="bi bi-play-circle-fill play-button"></i></div>
  </div>`;
    recentlyPlayedRow.appendChild(newAlbumCard);
    firstSeeAll.remove();
  }
};

const seeAllTwo = function () {
  let recommendedForYou = document.getElementById("recommended-row");
  let secondSeeAll = document.getElementById("second-see-all");
  for (i = 6; i < 12; i++) {
    let newAlbumCard = document.createElement("div");
    newAlbumCard.classList.add("col", "album-card2", "px-1");
    newAlbumCard.innerHTML = `<div class="album-card2-cont">
      <img src="assets/${albumCardInfo[i].cover}.png" alt="">
      <h5>${albumCardInfo[i].artist}</h5>
      <p>${albumCardInfo[i].releaseDate} - Album</p><div class="play-button-div"><div class="play-button-bg"></div>
      <i class="bi bi-play-circle-fill play-button"></i></div>
    </div>`;
    recommendedForYou.appendChild(newAlbumCard);
    secondSeeAll.remove();
  }
};

const seeMore = function () {
  let artistBody = document.getElementById("artist-body");
  let seeButton = document.getElementById("artist-row-see");
  artistBody.innerHTML += ` <tr>
  <td scope="row">6</td>
  <td><img src="assets/grand-corps-malade.png" alt=""></td>
  <td id="populartitle">I Want to Break Free- Single</td>
  <td>380,944,996</td>
  <td>4.18</td>
</tr>
<tr>
  <td scope="row">7</td>
  <td><img src="assets/nevermind.png" alt=""></td>
  <td id="populartitle">We Are The Champions - Remastered 2011</td>
  <td>420,934,236</td>
  <td>2.59</td>
</tr>
<tr>
  <td scope="row">8</td>
  <td><img src="assets/nwa.png" alt=""></td>
  <td id="populartitle">Crazy Little Thing Called Love - 2011</td>
  <td>374,499,187</td>
  <td>2.43</td>
</tr>
<tr>
  <td scope="row">9</td>
  <td><img src="assets/vampire-weekend.PNG" alt=""></td>
  <td id="populartitle">Radio Gaga- Single</td>
  <td>318,743,281</td>
  <td>5.48</td>
</tr>
<tr>
  <td scope="row">10</td>
  <td><img src="assets/vaccines.png" alt=""></td>
  <td id="populartitle">Somebody To Love - Remastered</td>
  <td>558,434,487</td>
  <td>4.56</td>
</tr>`;
  seeButton.remove();
};

// const generateNewsAlbum = function () {
//   window.location.href = "album.html";
//   let albumJumbotronContainer = document.getElementById(
//     "album-jumbotron-container"
//   );
//   //   console.log(albumJumbotronContainer);
//   generateAlbumPageJumbotron(album1, albumJumbotronContainer);
//   generateTrackList(album1);
// };

// const albumCards = document.getElementsByClassName("album-card2");

// const addPlayBadge = function () {
//   let playButton = document.createElement("div");
//   playButton.classList.add("play-button-div");
//   playButton.innerHTML = `<i class="bi bi-play-circle-fill play-button"></i></div>`;
// };

// `<div class="play-button-div">
//             <i class="bi bi-play-circle-fill play-button"></i></div>
//           </div>`

// const addPlayBadges = function () {
//   for (album of albumCards) {
//     album.addEventListener("mouseover", addPlayBadge);
//   }
// };

// addPlayBadges();#

////////////////////////////////////////////////////////
//NEW SECTION USING FETCH API

let generatedArtistRow = document.getElementById("generated-artist-row");
let generatedAlbumRow = document.getElementById("generated-album-row");

// Gave this TWO parameters so it can do two different things depending on what is needed
const generateJsArtistAndAlbums = function (artistName, action) {
  return fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "58eb3e9c2amsh5fd41210fbeac96p1bb7bcjsn83e742160779",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((artistArray) => {
      console.log(artistArray.data);
      if (action === "artist") generateJsArtistCards(artistArray.data);
      if (action === "albums") listAlbums(artistArray.data);
    })
    .catch((error) => console.error(error));
};

const listAlbums = function (object) {
  generatedAlbumRow.innerHTML = "";

  //Create artist title
  let artistTitleDiv = document.createElement("div");
  artistTitleDiv.classList.add("row", "title-row", "mt-3", "ml-3");
  artistTitleDiv.innerHTML = `<h2 class="section-heading">${object[0].artist.name}</h2>`;
  generatedAlbumRow.appendChild(artistTitleDiv);

  //Create row for albums
  let newGeneratedAlbumDiv = document.createElement("div");
  newGeneratedAlbumDiv.classList.add(
    "row",
    "row-cols-2",
    "row-cols-sm-3",
    "row-cols-md-4",
    "row-cols-lg-6",
    "ml-2",
    "mr-1",
    "generatedAlbumDiv"
  );

  //Create album cols
  for (i = 0; i < object.length; i++) {
    let newGeneratedAlbumCard = document.createElement("div");
    newGeneratedAlbumCard.classList.add("col", "album-card2", "px-1");
    newGeneratedAlbumCard.innerHTML = `<a href="album.html"><div class="album-card2-cont generatedCard" >
    <img src="${object[i].album.cover_big}" alt="">
    <h5>${object[i].artist.name}</h5>
    <p>${object[i].title}</p><div class="play-button-div">
      <div class="play-button-bg"></div>
    <i class="bi bi-play-circle-fill play-button"></i></div>
  </div><a/>`;
    newGeneratedAlbumDiv.appendChild(newGeneratedAlbumCard);
  }
  generatedAlbumRow.appendChild(newGeneratedAlbumDiv);
};

const generateJsArtistCards = function (object) {
  let newGeneratedCard = document.createElement("div");
  newGeneratedCard.classList.add("col", "album-card2", "px-1");
  console.log(object[0].artist.name.toLowerCase());
  // Found it difficult to inserts back ticks into js generated html code but eventually got it working using these params
  let firstParam = "`" + object[0].artist.name.toLowerCase() + "`";
  let secondParam = "`albums`";
  newGeneratedCard.innerHTML = `<div class="album-card2-cont generatedCard" onclick="generateJsArtistAndAlbums(${firstParam}, ${secondParam})">
  <img src="${object[0].artist.picture_big}" alt="">
  <h5>${object[0].artist.name}</h5>
  <p>Artist</p><div class="play-button-div">
    <div class="play-button-bg"></div>
  <i class="bi bi-play-circle-fill play-button"></i></div>
</div>`;
  generatedArtistRow.appendChild(newGeneratedCard);
};

// generateJsArtistAndAlbums(`eminem`, "artist");
// generateJsArtistAndAlbums(`metallica`, "artist");
// generateJsArtistAndAlbums(`behemoth`, "artist");

/////////////////////////////////////////////////////////
//Friday Team Project - Artist Page Code

let top5tracks = [];
let objectVariable;

// function searchAlbums(album) {
//   fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${album}`, {
//     method: "GET",
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((album) => {
//       console.log(album);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

const getDataForArtistPage = function (artistId = 412) {
  // window.location.href = "artist.html";
  return fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`
    // `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=70`
    // `https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`
  )
    .then((response) => response.json())
    .then((artistObject) => {
      // console.log(artistObject);
      objectVariable = artistObject;
      displayJumboTron(objectVariable);
      return fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=70`
        // `https://striveschool-api.herokuapp.com/api/deezer/search?q=${objectVariable.name.toLowerCase()}`
      )
        .then((response) => response.json())
        .then((artistFinal) => {
          console.log(objectVariable);
          console.log(artistFinal.data);
          top5tracks = artistFinal.data;
          console.log(top5tracks);
          displayTopTracks(top5tracks);
          return fetch(
            `https://striveschool-api.herokuapp.com/api/deezer/search?q=${objectVariable.name.toLowerCase()}`
          )
            .then((response) => response.json())
            .then((popularFinal) => {
              console.log(popularFinal);
              console.log(popularFinal.data);
              displayPopularReleases(popularFinal.data);
            });
        });
    })
    .catch((error) => console.error(error));
};

const displayTopTracks = function (tracksArray) {
  let tableBodyForArtistPage = document.getElementById("artist-body");
  tableBodyForArtistPage.innerHTML = "";
  for (i = 0; i < tracksArray.length; i++) {
    let newTrackRow = document.createElement("tr");
    newTrackRow.innerHTML = ` <td  scope="row">${i + 1}</td>
    <td ><img src="${tracksArray[i].album.cover}" alt=""></td>
    <td >${tracksArray[i].title}</td>
    <td >1,012,332,444</td>
    <td >${tracksArray[i].duration / 100}</td>`;
    tableBodyForArtistPage.appendChild(newTrackRow);
  }
};

const displayJumboTron = function (object) {
  let jumbotronCont = document.getElementById("jumbotron-cont");
  jumbotronCont.innerHTML = "";
  let jumbotronBg = document.createElement("div");
  jumbotronBg.innerHTML = `<div class="jumbotron jumbotron-fluid img-fluid artists-jumbo" style="background-image: url(${object.picture_big}); background-size: 100%; background-position: top; ">
<div class="container for-about">
  <p class="ml-auto text-white pt-5 pt-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" color="#0084b4" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </svg> Verified artist</p>
<h1 class="display-4 text-white" style="font-weight: bolder;">${object.name}</h1>
<p class="lead text-white pb-3">37,120,733 monthly listeners.</p>
</div>

</div`;
  jumbotronCont.appendChild(jumbotronBg);
};

const displayPopularReleases = function (array) {
  let popularReleaseRow = document.getElementById("popular-release-row");
  popularReleaseRow.innerHTML = "";
  for (i = 0; i < array.length; i++) {
    let newAlbumTile = document.createElement("div");
    newAlbumTile.classList.add("col", "album-card2", "px-1");
    newAlbumTile.innerHTML = `<a href="album.html?albumId=${array[i].album.id}"><div id="${array[i].id}" class="album-card2-cont">
    <img src="${array[i].album.cover_big}" alt="">
    <h5>${array[i].album.title}</h5>
    <p>1977 - Album</p><div class="play-button-div"> <div class="play-button-bg"></div>
      <i class="bi bi-play-circle-fill play-button"></i></div>
  </div></a>`;
    popularReleaseRow.appendChild(newAlbumTile);
  }
};

// listAlbums("eminem");

let artistId;

function searchAlbums(query) {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((album) => {
      artistId = album.data[0].artist.id;
      console.log(artistId);
      getDataForArtistPage(artistId);
    })
    .catch((error) => {
      console.error(error);
    });
}

window.onload = () => {
  getDataForArtistPage();
};

// Two ways of accessing the end params(queries) of a url
//In the case we are trying to a query home.html?id=412

//This first way would return "?id=412" so would require string meth ods
// window.onload = () => {
//   console.log(window.location.search);
// };

//This second way would return "412" exactly
// window.onload = () => {
//   let query = new URLSearchParams(window.location.search).get("id");
//   console.log(query);
// };
