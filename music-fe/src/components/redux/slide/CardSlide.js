import { createSlice } from "@reduxjs/toolkit";
const FavouriteSlide = createSlice({
  name: "songs",
  initialState: {
    songArray: [],
  },
  reducers: {
    addFavourite: (state, action) => {
        const songIndex= state.songArray.findIndex((p)=> p.id === action.payload.id)
        if(songIndex === -1){
            state.songArray.push({...action.payload, quantity: 1})
        }else{
            
        }
    },
    deleteFavourite: (state, action) => {
        const songIndexRemove= action.payload.id
        const newSongCard= state.songArray.filter((item)=> item.id == songIndexRemove)
        return { ...state, songArray: newSongCard}
    },
  },
});

export const { addFavourite, deleteFavourite } = FavouriteSlide.actions;

export default FavouriteSlide.reducer;
