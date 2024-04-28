import Footer from "../Footers/Footer";
import HeaderAdmin from "../Header/HeaderAdmin";
import "../../Css/CreateSpotify.css";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as method from "../../Service/method";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { imageDB } from "../FireBase/Config";
import { v4 } from "uuid";

function CreateSpotify() {
  const [categories, setCategories] = useState([]);
  const [imgURL, setImgURL] = useState("");
  const [audioURL, setAudioURL] = useState("");
  const navigate = useNavigate();
  const [isFileUploaded, setIsFileUploaded] = useState(false); // tránh trường hợp submit

  const handleAudioClick = async (setFieldValue) => {
    if (!audioURL) {
      console.error("Không có tệp âm thanh được chọn.");
      return;
    }

    const audioRef = ref(imageDB, `files/${v4()}`);
    try {
      console.log("Bắt đầu tải nhạc lên...");
      await uploadBytes(audioRef, audioURL);
      console.log("Tải nhạc lên thành công.");
      const downloadURL = await getDownloadURL(audioRef);
      console.log("URL của nhạc đã được tải lên:", downloadURL);
      setAudioURL(downloadURL);
      setFieldValue("fileName", downloadURL);
      setIsFileUploaded(true); // Đặt trạng thái là đã tải lên thành công
    } catch (error) {
      console.error("Lỗi khi tải nhạc lên:", error);
    }
  };

  const create = async (song) => {
    await method.createSpotify(song);
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
  }, []);

  if (!categories) {
    return <span>Loading....</span>;
  }

  return (
    <>
      <HeaderAdmin />
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
                      onSubmit={(values) => create(values)}
                    >
                      {({ setFieldValue }) => (
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
                                <Field
                                  as="select"
                                  name="category"
                                  className="custom-select form-control"
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
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group mt-2">
                                <label>Nhạc</label>
                                <br />
                                <input
                                  type="file"
                                  name="fileName"
                                  accept=".mp3"
                                  onChange={(e) =>
                                    setAudioURL(e.target.files[0])
                                  }
                                  className="form-control-field"
                                  style={{ color: "white" }}
                                />
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleAudioClick(setFieldValue)
                                  }
                                >
                                  Tải lên
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <button
                                type="submit"
                                className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                                disabled={!isFileUploaded} // Disable nút khi chưa tải lên thành công
                              >
                                <span> SUBMIT</span>
                              </button>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateSpotify;
