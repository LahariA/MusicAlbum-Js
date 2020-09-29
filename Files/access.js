let albumcount = 0;
let count = 0;
let Ssss = "";
let artistcount = 0;
let songByArtist1 = "";

function addAlbums() {

    if (albumcount == 0) {
    let albumId = document.getElementById('album');
    let albumList = getAblbumList();

    for (const album of albumList) {
        const newOption = document.createElement('option');
        newOption.id = album.albumId;
        const optionText = document.createTextNode(album.albumName);

        newOption.appendChild(optionText);
        // newOption.setAttribute('value',album.albumName);
        albumId.appendChild(newOption);
    }
}

}

function getSongs(e) {
    removeItem();
    if (count == 0) {
        let filterList = albumList.filter((item) => {
          
            return item.albumName == e;
        });
        let songs = filterList.reduce(item => { return item.songs });

        console.log(songs, "songs");

        let songList = songs.songs;
        Ssss = songList;
        for (const song of songList) {
            var list = document.getElementById('data');
            var listItem = document.createElement('li');
            listItem.id = song.songId;
            const textValue = document.createTextNode(song.title);
            listItem.appendChild(textValue);
            list.appendChild(listItem);
        }

    }
    count++;
}



(function getArtistList(){
    let artistInputData = document.getElementById('artistInput');

let artistData = getArtis();

    for (const artistValue of artistData) {
        const option = document.createElement('option');
        const optionText1 = document.createTextNode(artistValue.artistName);
        option.appendChild(optionText1);
        option.setAttribute('value',artistValue.artistId);
        artistInputData.appendChild(option);
    }
})();


function getArtistList(e) {
    removeItem();
    if (artistcount == 0) {
        let listOfArtists = getArtis();

let listOfFilteredArtists = listOfArtists.filter(ele =>{
    return ele.artistId == e ;
})
let artistId = listOfFilteredArtists.reduce(item => { return item.artistId });
console.log(artistId , "listOfFilteredArtists");
 songByArtist =  getSongsByArtist(artistId.artistId);
console.log(songByArtist , "songByArtist");
 songByArtist1 = songByArtist
        for (const song of songByArtist1) {    
            let list = document.getElementById('artId');
            let listItem = document.createElement('li');
            listItem.id = song.title.songId;
            const textValue = document.createElement( "b");
            textValue.innerHTML=" Movie Name : " + song.albumName +"  Song Name : " + song.title.title
            listItem.appendChild(textValue);
            listItem.classList.add('name');
            listItem.setAttribute('title','please click for audio clip');
            listItem.addEventListener('click', () => {
                playSongs(song.title.song)
            }, false)
            list.appendChild(listItem);
        }
    }
    artistcount ++;
}













function removeItem() {
    let albumList = getAblbumList();
    if (count > 0) {
        for (const album1 of Ssss) {
            let listItem1 = document.getElementById(album1.songId);
            listItem1.remove();
        }
        count = 0;
        ssss = "";
    }
    if (artistcount > 0) {
        for (let i of songByArtist1) {
            let removeid = document.getElementById(i.title.songId)
            removeid.remove()
        }
        artistcount = 0;
        songByArtist1 = "";
    }
    if (albumcount > 0) {
        for (let i of albumList) {
            let removeid = document.getElementById(i.albumId)
            removeid.remove()
        }
        albumcount = 0;
    }

}



function playSongs(e) {
    console.log(e,"songssssssssssss");
    let data = document.getElementById('songPlay')
    data.src = e
    data.autoplay = true
}