import Footer from "../Footers/Footer";
import HeaderAdmin from "../Header/HeaderAdmin";
import "../../Css/CreateSpotify.css";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import * as method from "../../Service/method";
import { ref, uploadBytes } from "firebase/storage";
import { imageDB } from "../FireBase/Config";
import { v4 } from "uuid";

function CreateSpotify() {
  const [categories, setCategories] = useState([]);
  const [img, setImg] = useState("");
  const [imgURL, setImgURL] = useState(""); // State để lưu URL của hình ảnh đã chọn
  const [audioURL, setAudioURL] = useState(""); // State để lưu URL của hình ảnh đã chọn

  const navigate = useNavigate();
  
  const handleClick = async () => {
    const imgRef = ref(imageDB, `files/${v4()}`);
    try {
      await uploadBytes(imgRef, img);
      // Cập nhật URL của hình ảnh
      setImgURL(imgRef.fullPath); // Sử dụng fullPath của imgRef làm URL cho hình ảnh
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  
  const handleClicks = async () => {
    const audioRef = ref(imageDB, `files/${v4()}`);
    try {
      await uploadBytes(audioRef, audioURL);
      // Cập nhật URL của âm thanh
      setAudioURL(audioRef.fullPath); // Sử dụng fullPath của audioRef làm URL cho âm thanh
    } catch (error) {
      console.error("Error uploading audio:", error);
    }
  };

  const create = async (song) => {
    await method.createSpotify(song); // Gửi dữ liệu bao gồm file MP3 đến máy chủ
    toast("Thêm mới thành công !");
    navigate("/list");
  };

  const fetchCategories = async () => {
    try {
      const response = await method.getAllCategories();

      setCategories(response);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchCategories();
    console.log("Categories:", categories);
  }, []);

  if (!categories) {
    return <span>Loading....</span>;
  }

  return (
    <>
      <div>
        <HeaderAdmin />
      </div>
      <div className="container">
        <div className="contact3 py-5">
          <div className="row no-gutters">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card-shadow">
                    <img
                      src={imgURL}
                      className="img-fluid picture-create-admin"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-box ml-3">
                    <h1
                      className="font-weight-light mt-2"
                      style={{ color: "white" }}
                    >
                      Thêm mới bài hát
                    </h1>
                    <Formik
                      initialValues={{
                        fileName: "",
                        title: "",
                        artist: "",
                        category: "",
                        image: "",
                      }}
                      onSubmit={(value) => {
                        create(value);
                      }}
                    >
                      <Form className="mt-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group mt-2">
                              <label>Tên ca sỹ</label>
                              <Field
                                name="artist"
                                className="form-control"
                                type="text"
                                style={{ color: "white" }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-2">
                              <label>Tên bài hát</label>
                              <Field
                                className="form-control"
                                name="title"
                                style={{ color: "white" }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-2">
                              <label>Thể loại nhạc</label>
                              <br />
                              <select
                                className="custom-select form-control"
                                name="category"
                                style={{ color: "white" }}
                              >
                                <option value="">
                                  -- Chọn thể loại nhạc (Genre) --
                                </option>
                                {categories.map((category) => (
                                  <option
                                    key={category}
                                    value={category}
                                    style={{ color: "red" }}
                                  >
                                    {category}
                                    {console.log(category)}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group mt-2">
                              <label>Hình ảnh</label>
                              <br />

                              <Field
                                type="file"
                                name="image"
                                onChange={(e) => setImg(e.target.files[0])}
                                className="form-control"
                              />
                              <button type="button" onClick={handleClick}>
                                Tải lên
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-2">
                              <label>Nhạc</label>
                              <br />

                              <Field
                                type="file"
                                name="fileName"
                                onChange={(e) => setImg(e.target.files[0])}
                                className="form-control"
                              />
                              <button type="button" onClick={handleClicks}>
                                Tải lên
                              </button>
                            </div>
                          </div>
                          {/* <div className="col-lg-12">
                            <div className="form-group mt-2">
                              <label>Upload bài hát (file .mp3)</label>
                              <Field
                                type="file"
                                name="fileName"
                                onChange={(e) => setImg(e.target.files[0])}
                                className="form-control"
                              />
                              <button type="button" onClick={handleClicks}>
                                Tải nhạc lên
                              </button>
                            </div>
                          </div> */}

                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                            >
                              <span> SUBMIT</span>
                            </button>
                          </div>
                        </div>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default CreateSpotify;
