import React from 'react';
import {playAudio} from '../util';

const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {
  const songSelectHandler= () => {
    setCurrentSong(song);

    // check if song is playing
    playAudio(isPlaying, audioRef);
  }
  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
};

export default LibrarySong;