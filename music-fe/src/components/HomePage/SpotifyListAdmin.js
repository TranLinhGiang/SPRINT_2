import HeaderAdmin from "../Header/HeaderAdmin";
import "../../Css/SpotifyList.css";
import * as method from "../../Service/method";
import { useEffect, useState } from "react";
import Footer from "../Footers/Footer";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function SpotifyList() {
  const [songs, setSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại
  const [totalPages, setTotalPages] = useState(0); // Tổng số trang
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteSongInfo, setDeleteSongInfo] = useState(null);

  const getAllSong = async () => {
    const getAll = await method.getAllSongs(currentPage);
    setSongs(getAll.content);
    setTotalPages(getAll.totalPages);
  };
  const handleDeleteSong = async (id) => {
    try {
      // Gọi hàm xóa từ service
      await method.deleteSong(id);
      // Sau khi xóa thành công, cập nhật lại danh sách bài hát
      getAllSong();
      // Mở modal
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Spotify-List";
    getAllSong();
  }, [currentPage]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  if (!songs) {
    return <span>Loading...</span>;
  }

  return (
    <div className="background-picture">
      <div>
        <HeaderAdmin />
      </div>
      <br />
      <div>
        <div className="container">
          <h4 style={{ color: "white" }}>Danh sách nhạc ___</h4>
          <Table
            className="table-responsive"
            striped
            bordered
            hover
            variant="dark"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Ảnh</th>
                <th> Tên ca sỹ</th>
                <th>Tên bài hát</th>
                <th>Thể loại nhạc</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1 + currentPage * 6}</td>
                  <td>
                    <img
                      src={item.image}
                      alt="Hình ảnh"
                      className="album-image"
                    />
                  </td>
                  <td>{item.artist}</td>
                  <td className="long-text">{item.title}</td>
                  <td>{item.category ? item.category.name : "Unknown"}</td>

                  <td>
                    <Button
                      onClick={() => {
                        setDeleteId(item.id);
                        setDeleteSongInfo(item); // Lưu thông tin của bài hát vào state mới
                        handleShow();
                      }}
                      variant="outline-danger"
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* Phân trang */}
          {totalPages > 0 && (
            <div className="paging-css">
              <ReactPaginate
                forcePage={currentPage}
                breakLabel="..."
                nextLabel="Trang sau"
                previousLabel="Trang trước"
                onPageChange={handlePageClick}
                pageCount={totalPages}
                containerClassName="pagination justify-content-center" // Thêm lớp justify-content-center để căn giữa
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title-remove">Xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body className="title-remove">
          {deleteSongInfo && `Bạn chắc chắn muốn xóa bài ${deleteSongInfo.title}`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDeleteSong(deleteId);
              handleClose();
            }}
          >
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default SpotifyList;
