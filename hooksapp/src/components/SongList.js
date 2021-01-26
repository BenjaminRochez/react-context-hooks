import {userState, useState} from 'react'
import  {v1 as uuid} from 'uuid';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'almost home', id: uuid()},
        {title: 'memory gospel', id: uuid()},
        {title: 'this wild darkness', id: uuid()}
    ]);
    const addSong = () => {
        setSongs([...songs, {title: 'Virtual insanity', id: uuid()}]);
    }
    return (  

        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( 
                        <li key={song.id} >{song.title} - {song.id}</li> 
                    )
                })}
            </ul>
            <button onClick={addSong}>Add a song</button>
        </div>

    );
}
 
export default SongList;

