import React, { useState, useEffect } from "react";
import "../../Css/DetailLoginPage.css";
import * as method from "../../Service/method";
import Card from 'react-bootstrap/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Import icon màu xanh
import RepeatOneIcon from '@mui/icons-material/RepeatOne';

import { useSelector, useDispatch } from 'react-redux'
import { addFavourite, deleteFavourite } from './../redux/slide/CardSlide';
import { RepeatOne } from "@mui/icons-material";

function DetailLoginPage({ selectedSongId, songs, playSelectedSong, changleFlag }) {

    // Redux Start
    const cardSongs = useSelector(state => state.card.songArray)
    console.log("Danh sách yêuthihs");
    console.log(cardSongs);
    const dispatch = useDispatch()
    // Redux End

    const [song, setSong] = useState(null);
    const [isFavorited, setIsFavorited] = useState(false); // State để lưu trữ trạng thái của nút yêu thích

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

    useEffect(() => {
        // Kiểm tra xem selectedSong có khác null không và nếu có thì cập nhật trạng thái yêu thích
        if (selectedSong) {
            setIsFavorited(selectedSong.isFavorited);
        }
    }, [selectedSong]);

    const hjg = (id) => {
        let newId = id + "";
        let a = ""

        if (localStorage.getItem("favourite")) {
            let v = localStorage.getItem("favourite").split(",");
            if (!v.includes(newId)) {
                a = localStorage.getItem("favourite") + newId + ","
                localStorage.setItem("favourite", a)
                changleFlag()
            } else {
                let g = localStorage.getItem("favourite").split(",");
                let index = g.indexOf(newId);
                g.splice(index, 1);
                let k = [...g];
                localStorage.setItem("favourite", k)
                changleFlag()
            }

        } else if (!localStorage.getItem("favourite")) {
            let b = id + ",";
            localStorage.setItem("favourite", b)
            changleFlag()
        }

        // Cập nhật trạng thái của nút yêu thích
        setIsFavorited(!isFavorited);
    }

    return (

        <div className="detail-page-container">
            {selectedSong && (
                <Card style={{ width: '100%', height: '495px', background: 'black' }}>
                    <div style={{ maxHeight: '330px', overflow: 'hidden' }}>
                        {/* Bọc hình ảnh trong một div với chiều cao tối đa, để hình ảnh không vượt quá chiều cao này */}
                        <Card.Img
                            variant="top"
                            src={selectedSong.image}
                            alt={selectedSong.title}
                            style={{ width: '100%' }} // Đảm bảo hình ảnh căn chỉnh theo chiều rộng của vùng chứa
                        />
                    </div>
                    <Card.Body className="card-detail">
                        <Card.Title className="text-detail" style={{ color: 'white' }}>{selectedSong.title}</Card.Title>
                        <Card.Text>
                            <p className="text-detail" style={{ color: 'white' }}>Ca sỹ: {selectedSong.artist}</p>
                        </Card.Text>
                        <button className="text-detail button-detail" onClick={() => playSelectedSong(selectedSong.id)}>Phát lại</button>
                        {/* Chỉ tô màu nếu là bài hát hiện tại được chọn */}
                        {selectedSongId === selectedSong.id && (
                            <button
                                onClick={() => hjg(selectedSong.id)}
                                className="btn-heart"
                                style={{ color: 'white' }}
                            >
                                {/* Nếu nút được yêu thích, hiển thị icon màu xanh */}
                                {isFavorited ? <FavoriteIcon className="heart" /> : <FavoriteBorderIcon className="heart" />}
                            </button>
                        )}
                        <button className="btn-come-back">
                            <RepeatOne/>
                        </button>
                    </Card.Body>
                </Card>

            )}
        </div>

    );
}

export default DetailLoginPage;
