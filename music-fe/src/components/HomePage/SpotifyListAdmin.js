import HeaderAdmin from "../Header/HeaderAdmin";
import "../../Css/SpotifyList.css";
import * as method from "../../Service/method";
import { useEffect, useState } from "react";
import Footer from "../Footers/Footer";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function SpotifyList() {
  const [songs, setSongs] = useState([]);
  const getAllSong = async () => {
    const getAll = await method.getAllSong();
    setSongs(getAll);
  };

  useEffect(() => {
    document.title = "Spotify-List";
    getAllSong();
  }, []);

  if(!songs){
    return <span>Loading...</span>
  }
  return (
    <>
      <div>
        <div>
          <HeaderAdmin />
        </div>
        <br/>
        <div>
          <div className="container">
            <h4 style={{color: 'white'}}>Danh sách nhạc ___</h4>
            <Table striped bordered hover variant="dark" >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Ảnh</th>
                  <th> Tên ca sỹ</th>
                  <th>Tên bài hát</th>
                  <th>Thể loại nhạc</th>
                  <th>Chỉnh sửa</th>
                  <th>Xóa</th>
                </tr>
              </thead>
              <tbody>
                {songs.map((item, index)=>(
                  <tr key={item.id}>
                    <td>{index +1 }</td>
                    <td><img src={item.image} alt="Album Art" className="album-image"/></td>
                    <td>{item.artist}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>
                      <Button variant="outline-success">Chỉnh sửa</Button>
                    </td>
                    <td>
                    <Button variant="outline-danger">Xóa</Button>{' '}
                    </td>

                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
}
export default SpotifyList;
