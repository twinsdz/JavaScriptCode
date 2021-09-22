function solve(arr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let n = Number (arr.shift());
    let songs = [];

    for (let i = 0; i < n; i++) {
        let inputLine = arr.shift();
        let [type, name, time] = inputLine.split('_');
        songs.push(new Song(type, name, time));
    }

    let searchType = arr.shift();

    if (searchType === 'all') {
        printSongs(songs);
    } else {
        let searchedSongs = songs.filter((s) => s.type === searchType);
        printSongs(searchedSongs);
    }

    function printSongs(songs){
        for (const song of songs){
            console.log(song.name);
        }
    }
}

solve ([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);

// solve([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);

/* function solve(arr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numOfSongs = arr.shift();
    let typeList = arr.pop();

    for (let i = 0; i < numOfSongs; i++) {
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeList === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeList);
        filtered.forEach((i) => console.log(i.name));
    }
}

// solve ([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);

solve([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']); */