
const albumList = [
    {
        albumName: 'Aarya2',
        albumId: 111,
        songs: [{
            songId: 1,
            title: 'Mr.perfect',
            artistId: 'BS',
            song:'./songs/Mr.perfect.mp3'
        },
        {
            songId: 2,
            title: 'Baby he loves you',
            artistId: 'DSP',
            song:'./songs/Mr.perfect.mp3'


        },
        {
            songId: 3,
            title: 'Rings ringa',
            artistId: 'PH',
            song:'./songs/Mr.perfect.mp3'

        },
        {
            songId: 4,
            title: 'Karige Loga',
            artistId: 'MG',
            song:'./songs/Mr.perfect.mp3'

        },
        {
            songId: 5,
            title: 'My Love is',
            artistId: 'RJ',
            song:'./songs/Mr.perfect.mp3'

        }
        ]
    },
    {
        albumName: 'Atharintiki Dharedhi',
        albumId: 112,
        songs: [{
            songId: 6,
            title: 'Aaradugula Bullet',
            artistId: 'VP',
            artistName: 'Vijay Prakash',
            song:'./songs/Aaradugula Bullettuu.mp3'

        },
        {
            songId: 7,
            title: 'Ninnu Chudagane',
            artistId: 'VP',
            song:'./songs/Mr.perfect.mp3'

        },
        {
            songId: 8,
            title: 'Deva Devam',
            artistId: 'PSR',
            song:'./songs/Mr.perfect.mp3'

        },
        {
            songId: 9,
            title: 'Kiraaku',
            artistId: 'DVS',
            song:'./songs/Mr.perfect.mp3'

        },
        {
            songId: 10,
            title: 'Time To Party',
            artistId: 'DVS',
            song:'./songs/Mr.perfect.mp3'

        }
        ]
    },
    {
        albumName: 'Bommarillu',
        albumId: 113,
        songs: [{
            songId: 11,
            title: 'Bommani geesthe',
            artistId: 'JS',
            song:'./songs/Mr.perfect.mp3'

        },
        {
            songId: 12,
            title: 'Kaani ippudu',
            artistId: 'DSP',
            song:'./songs/Mr.perfect.mp3'

        },
        {
            songId: 13,
            title: 'Music Bit',
            artistId: 'suma',
            song:'./songs/Mr.perfect.mp3'

        },
        {
            songId: 14,
            title: 'Nammaka tappani',
            artistId: 'suma',
            song:'./songs/Mr.perfect.mp3'

        },
        {
            songId: 15,
            title: 'Appudo ippudo',
            artistId: 'SIDD',
            song:'./songs/Mr.perfect.mp3'

        }
        ]
    }
]

function getAblbumList() {
    console.log(albumList);
    return albumList;
}

// getAblbumList();
function getSongsByArtist(artistId) {
    let resultList = []
    albumList.map(a => {
        let songs = a.songs
        for (let i in songs) {
            let artist = songs[i].artistId
            if(artist == artistId){
                let song={
                    albumName:a.albumName,
                    albumId:a.albumId,
                    title:songs[i]
                }
                resultList.push(song)
            }
        }
    })
    return resultList
}

function getSongsByAlbum(albumId) {
    let resultList = albumList.filter(a => a.albumId == albumId)
    return resultList[0].songs
}

function getSongsList() {
    let resultList=[]
    albumList.map(s=>{
        let songs=s.songs
        for(let i of songs){
            let song ={
                title:i.title,
                songId:i.songId,
                artistId:i.artistId,
                albumId:s.albumId,
                song:i.song
            }
            resultList.push(song)
        }
    })
    return resultList
}