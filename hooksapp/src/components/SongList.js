import {useState, useEffect} from 'react'
import  {v1 as uuid} from 'uuid';
import NewSongForm from './NewSong';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'almost home', id: uuid()},
        {title: 'memory gospel', id: uuid()},
        {title: 'this wild darkness', id: uuid()}
    ]);
    const addSong = (title) => {
        setSongs([...songs, {title: title, id: uuid()}]);
    }
    //Use effect is a hook that mimicks the render cycle & rerun on watch - Note that you can use multiple useEffect to watch certains data
    // the [songs] limit the watcher to the song variable
    useEffect(() => {
        console.log(songs);
    }, [songs])
    return (  

        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( 
                        <li key={song.id} >{song.title} - {song.id}</li> 
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>

    );
}
 
export default SongList;

