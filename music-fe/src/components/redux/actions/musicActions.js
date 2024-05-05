export const setIsPlaying = (isPlaying) => {
    return {
      type: "SET_IS_PLAYING",
      payload: isPlaying
    };
  };
  
  export const setSelectedSongId = (selectedSongId) => {
    return {
      type: "SET_SELECTED_SONG_ID",
      payload: selectedSongId
    };
  };
  