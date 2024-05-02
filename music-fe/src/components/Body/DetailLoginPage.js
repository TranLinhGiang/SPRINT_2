import React, { useState, useEffect } from "react";
import "../../Css/DetailLoginPage.css";
import * as method from "../../Service/method";
import Card from 'react-bootstrap/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function DetailLoginPage({ selectedSongId, songs, playSelectedSong }) {
    const [song, setSong] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          if (selectedSongId !== null) {
            const detail = await method.detailPremisesService(selectedSongId);
            if (detail) {
              setSong(detail);
            }
          }
        } catch (error) {
          console.error("Error fetching detail:", error);
        }
      };
  
      fetchData();
    }, [selectedSongId]);
  
    // Tìm bài hát tương ứng với selectedSongId
    const selectedSong = songs?.find(song => song.id === selectedSongId);

    // if(!song){
    //   return <span>Loading...</span>
    // }

  return (
    <div className="detail-page-container">
    {selectedSong && (
    <Card style={{ width: '100%',height: '495px',background: 'black' }}>
    <div style={{ maxHeight: '330px', overflow: 'hidden' }}> 
      {/* Bọc hình ảnh trong một div với chiều cao tối đa, để hình ảnh không vượt quá chiều cao này */}
      <Card.Img 
        variant="top" 
        src={selectedSong.image} 
        alt={selectedSong.title} 
        style={{ width: '100%'}} // Đảm bảo hình ảnh căn chỉnh theo chiều rộng của vùng chứa
      />
    </div>
    <Card.Body className="card-detail">
      <Card.Title className="text-detail" style={{ color: 'white'}}>{selectedSong.title}</Card.Title>
      <Card.Text>
      <p className="text-detail" style={{ color: 'white'}}>Ca sỹ: {selectedSong.artist}</p>
      </Card.Text>
      <button className="text-detail button-detail" onClick={() => playSelectedSong(selectedSong.id)}>Phát lại</button>
      <button className="btn-heart"><FavoriteBorderIcon className="heart"/></button>
    </Card.Body>
  </Card>
  
    )}
  </div>
  );
}

export default DetailLoginPage;