import axios from 'axios';


export const getAllSong = async () => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/song/list`);
      
        return rs.data;
    

    } catch (e) {
        console.log(e);
    }
    
}

export const detailPremisesService = async (id) => {
    try {
      let rs = await axios.get(`http://localhost:8080/api/song/find/${id}`);
      return rs.data;
    } catch (e) {
      return undefined;
    }
  };