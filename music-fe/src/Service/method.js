import axios from "axios";

export const getAllSong = async (name) => {
  try {
    let rs = await axios.get(`http://localhost:8080/api/song/list?name=${name}`);
    console.log("Data from backend:", rs.data);
    return rs.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllSongs = async (page) => {
  try {
    let rs = await axios.get(`http://localhost:8080/api/song/listPage?page=${page}`);
    console.log("Data from backend:", rs.data);
    return rs.data;
  } catch (e) {
    console.log(e);
  }
};

export const detailPremisesService = async (id) => {
  try {
    let rs = await axios.get(`http://localhost:8080/api/song/find/${id}`);
    return rs.data;
  } catch (e) {
    return undefined;
  }
};

export const createSpotify = async (song) => {
  try {
    const res = await axios.post("http://localhost:8080/api/song/add", song);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllCategories = async () => {
  try {
    let rs = await axios.get(`http://localhost:8080/api/category/listCategory`);
    console.log(rs.data);
    return rs.data;
  } catch (e) {
    console.log(e);
  }
};

export const login = async (user) => {
  try {
    let rs = await axios.post(`http://localhost:8080/api/auth/login`, user);
    return rs.data;
  } catch (e) {
    console.log(e);
  }

}

export const getById = async (id) => {
  try {
      const res = await axios.get(`http://localhost:8080/api/song/find/${id}`);
      return res.data;
  } catch (e) {
      console.log(e);
  }
}

export const deleteSong = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:8080/api/song/delete/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};




