let songIndex = 0;
let audioElement = new Audio('music/19.mp3');
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
let myBar = document.getElementById('myBar');
let posterpic = document.getElementById('coverpic');
let title = document.getElementById('title');
let audio = new Audio();
audio.play();
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    }
    else {
        audioElement.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myBar.value = progress;
})

myBar.addEventListener('change', () => {
    audioElement.currentTime = myBar.value * audioElement.duration / 100;
})
const playAll = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach(element => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songplay')).forEach(element => {
    element.addEventListener('click', (e) => {
        playAll();
        songIndex = parseInt(e.target.id);
        e.target.classList.add('fa-play-circle');
        e.target.classList.remove('fa-pause-circle');
        audioElement.src = `music/${songIndex}.mp3`;
        // posterpic.src = `cover${songIndex}.jpg`
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        wave.classList.remove('active1');
        wave.classList.add('active1');
        let songtitle = song.filter((els) => {
            return els.id == songIndex;
        });
        songtitle.forEach((elss) => {
            let { songName, post } = elss;
            title.innerText = songName;
            posterpic.src = post;
        })
    })
});
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 19) {
        songIndex = 0;

    } else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    let songtitle = song.filter((els) => {
        return els.id == songIndex;
    });
    songtitle.forEach((elss) => {
        let { songName, post } = elss;
        title.innerText = songName;
        posterpic.src = post;
    })
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    let songtitle = song.filter((els) => {
        return els.id == songIndex;
    });
    songtitle.forEach((elss) => {
        let { songName, post } = elss;
        title.innerText = songName;
        posterpic.src = post;
    })
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

let songs = [
    'music/19.mp3',
    'music/1.mp3',
    'music/2.mp3',
    'music/3.mp3',
    'music/4.mp3',
    'music/5.mp3',
    'music/6.mp3',
    'music/7.mp3',
    'music/8.mp3',
    'music/9.mp3',
    'music/10.mp3',
    'music/11.mp3',
    'music/12.mp3',
    'music/13.mp3',
    'music/14.mp3',
    'music/15.mp3',
    'music/16.mp3',
    'music/17.mp3',
    'music/18.mp3',
]
var len = songs.length;

function playMySong(songIndex) {
    audioElement.src = songs[songIndex];
    audioElement.play();
    let songtitle = song.filter((els) => {
        return els.id == songIndex;
    });
    songtitle.forEach((elss) => {
        let { songName, post } = elss;
        title.innerText = songName;
        posterpic.src = post;
    });
}
audioElement.addEventListener("ended", function playNextS() {
    console.log(songIndex)

    songIndex += 1;
    console.log(songIndex)
    if (songIndex == len) {
        songIndex = 0;
        playMySong(songIndex);
    }
    else {
        playMySong(songIndex);
    }
})

function togglePlayPause(event) {
    if (event.keyCode === 32) {
        if (audioElement.paused) {
            audioElement.play();
            let songtitle = song.filter((els) => {
                return els.id == songIndex;
            });
            songtitle.forEach((elss) => {
                let { songName, post } = elss;
                title.innerText = songName;
                posterpic.src = post;
            })
            wave.classList.add('active1');
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        } else {
            audioElement.pause();
            wave.classList.remove('active1');
            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
        }
        event.preventDefault();
    }
}


document.addEventListener('keydown', togglePlayPause);





let left = document.getElementById('left');
let left2 = document.getElementById('artleft');
let right = document.getElementById('right');
let right2 = document.getElementById('artright');
let pop = document.getElementsByClassName('pop')[0];
let items = document.getElementsByClassName('items')[0];
right.addEventListener('click', () => {
    pop.scrollLeft += 130;

})
left.addEventListener('click', () => {
    pop.scrollLeft -= 130;

})
right2.addEventListener('click', () => {
    items.scrollLeft += 130;

})
left2.addEventListener('click', () => {
    items.scrollLeft -= 130;

})

let song = [
    {
        id: '0',
        songName: 'Spain',
        post: 'images/cover19.jpg',
    },
    {
        id: '1',
        songName: 'One Love',
        post: 'images/cover1.jpg',
    },
    {
        id: '2',
        songName: 'Softly',
        post: 'images/cover2.jpg',
    },
    {
        id: ' 3',
        songName: 'Admiring You',
        post: 'images/cover3.jpg',
    },
    {
        id: '4',
        songName: 'Mi Amor',
        post: 'images/cover4.jpg',
    },
    {
        id: '5',
        songName: 'Kamlee',
        post: 'images/cover5.jpg',
    },
    {
        id: '6',
        songName: 'Precious',
        post: 'images/cover6.jpg',
    },
    {
        id: '7',
        songName: 'White Brown Black',
        post: 'images/cover7.jpg',
    },
    {
        id: '8',
        songName: 'Cheques',
        post: 'images/cover8.jpg',
    },
    {
        id: '9',
        songName: 'SaudeBazi',
        post: 'images/cover9.jpg',
    },
    {
        id: '10',
        songName: 'Manchala',
        post: 'images/cover10.jpg',
    },
    {
        id: '11',
        songName: 'Baarishein',
        post: 'images/cover11.jpg',
    },
    {
        id: '12',
        songName: 'Aahatein',
        post: 'images/cover12.jpg',
    },
    {
        id: '13',
        songName: 'Ek Din Aap',
        post: 'images/cover13.jpg',
    },
    {
        id: '14',
        songName: 'Kuchh Khaas',
        post: 'images/cover14.jpg',
    },
    {
        id: '15',
        songName: 'Sufna Banke',
        post: 'images/cover15.jpg',
    },
    {
        id: '16',
        songName: 'Tune Jo Na Kaha',
        post: 'images/cover16.jpg',
    },
    {
        id: '17',
        songName: 'Apna Bana Le Piya',
        post: 'images/cover17.jpg',
    },
    {
        id: '18',
        songName: 'Kde-Kde',
        post: 'images/cover18.jpg',
    },

]
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('span')[9].innerText = songs[i].songName;
});


