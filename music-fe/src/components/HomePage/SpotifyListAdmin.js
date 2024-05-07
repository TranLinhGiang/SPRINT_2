import HeaderAdmin from "../Header/HeaderAdmin";
import "../../Css/SpotifyList.css";
import * as method from "../../Service/method";
import { useEffect, useState } from "react";
import Footer from "../Footers/Footer";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ReactPaginate from "react-paginate";

function SpotifyList() {
  const [songs, setSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại
  const [totalPages, setTotalPages] = useState(0); // Tổng số trang

  const getAllSong = async () => {
    const getAll = await method.getAllSongs();
    setSongs(getAll.content);
    setTotalPages(getAll.totalPages);
  };

  useEffect(() => {
    document.title = "Spotify-List";
    getAllSong();
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  if (!songs) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <div>
        <HeaderAdmin />
      </div>
      <br />
      <div>
        <div className="container">
          <h4 style={{ color: "white" }}>Danh sách nhạc ___</h4>
          <Table className="table-responsive" striped bordered hover variant="dark">
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
              {songs.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1 + currentPage * 6}</td>
                  <td>
                    <img src={item.image} alt="Hình ảnh" className="album-image" />
                  </td>
                  <td>{item.artist}</td>
                  <td className="long-text">{item.title}</td>
                  <td>{item.category.name}</td>
                  <td>
                    <Button variant="outline-success">Chỉnh sửa</Button>
                  </td>
                  <td>
                    <Button variant="outline-danger">Xóa</Button>{" "}
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
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                pageCount={totalPages}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SpotifyList;