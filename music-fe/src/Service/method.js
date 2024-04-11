import axios from 'axios';


export const getAllSong = async () => {
    try {
        let rs = await axios.get(`http://localhost:8080/api/song/list`);
      
        return rs.data;
    

    } catch (e) {
        console.log(e);
    }
    
}