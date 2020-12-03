import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
  const audioRef = useRef(null);
  const playSongHandler = () => {
    setIsPlaying(!isPlaying);
    if(isPlaying) {
      audioRef.current.pause();
    }else{
      audioRef.current.play();
    }
  }

  const [songInfo, setSongInfo] = useState({currentTime: null, duration: null});
  return (
    <div className="player">
      <h1>Player</h1>
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="skip-forward " size="2x" icon={faAngleRight} />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
};

export default Player;