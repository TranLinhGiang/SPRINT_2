const initialState = {
    isPlaying: false,
    selectedSongId: null
  };
  
  const musicReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_IS_PLAYING":
        return { ...state, isPlaying: action.payload };
      case "SET_SELECTED_SONG_ID":
        return { ...state, selectedSongId: action.payload };
      default:
        return state;
    }
  };
  
  export default musicReducer;
  