export const playAudio = (isPlaying, audioRef) => {
      if(isPlaying){
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined){
        audioRef.current.play();
      }
    }
}