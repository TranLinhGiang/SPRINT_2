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
import FileUploadIcon from "@mui/icons-material/FileUpload";
function CreateSpotify() {
  const [categories, setCategories] = useState([]);
  const [img, setImg] = useState("");
  const [audioURL, setAudioURL] = useState("");
  const navigate = useNavigate();
  const [isImageUploaded, setIsImageUploaded] = useState(false); // Trạng thái của việc tải lên ảnh
  const [isAudioUploaded, setIsAudioUploaded] = useState(false); // Trạng thái của việc tải lên audio

  // Hàm xử lý khi người dùng nhấn nút "Tải ảnh lên"
  const handleImageUpload = async (setFieldValue) => {
    if (!img) {
      console.error("Không có tệp được chọn.");
      alert("Không có hình ảnh nào được chọn ");
      return;
    }

    const imgRef = ref(imageDB, `files/${v4()}`);
    try {
      console.log("Bắt đầu tải ảnh lên...");
      await uploadBytes(imgRef, img);
      console.log("Tải ảnh lên thành công.");
      const downloadURLs = await getDownloadURL(imgRef);
      console.log("URL của ảnh đã được tải lên:", downloadURLs);
      setImg(downloadURLs);
      console.log(downloadURLs + " kiểm tra biến downloadURL");
      console.log(setImg + "kiểm tra hình ảnh có hay không");
      setFieldValue("image", downloadURLs);
      setIsImageUploaded(true); // Đặt trạng thái là đã tải lên thành công
      console.log(img + "log imgURL");
    } catch (error) {
      console.error("Lỗi khi tải ảnh lên:", error);
    }
  };

  // Hàm xử lý khi người dùng nhấn nút "Tải audio lên"
  const handleAudioClick = async (setFieldValue) => {
    if (!audioURL) {
      console.error("Không có tệp âm thanh được chọn.");
      alert("Không có tệp âm thanh nào được chọn ");
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
      console.log(setAudioURL + "Kiểm tra nhạc xem có hay không");
      setFieldValue("fileName", downloadURL);
      setIsAudioUploaded(true); // Đặt trạng thái là đã tải lên thành công
    } catch (error) {
      console.error("Lỗi khi tải nhạc lên:", error);
    }
  };

  // Hàm xử lý khi người dùng nhấn nút "Submit"
  const create = async (song) => {
    // Kiểm tra xem cả hai tệp đã được tải lên thành công chưa
    if (!isImageUploaded || !isAudioUploaded) {
      toast.error("Vui lòng tải lên cả hình ảnh và nhạc trước khi thêm mới!");
      return;
    }

    const newSong = { ...song, category: JSON.parse(song.category) };
    console.log(newSong);
    await method.createSpotify(newSong);
    toast.success("Thêm mới thành công !");
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
                    <img src={img} className="img-fluid picture-create-admin" />
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
                                  <option value="" selected disabled>
                                    -- Chọn thể loại nhạc (Genre) --
                                  </option>
                                  {categories.map((category) => (
                                    <option
                                      key={category.id}
                                      value={JSON.stringify(category)}
                                      style={{ color: "red" }}
                                    >
                                      {category.name}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="form-group mt-2">
                                <label>Hình ảnh</label>
                                <br />

                                <input
                                  type="file"
                                  name="image"
                                  onChange={(e) => setImg(e.target.files[0])}
                                  className="form-control-field"
                                  style={{ color: "white" }}
                                />
                                <button
                                  type="button"
                                  className="upload"
                                  onClick={() =>
                                    handleImageUpload(setFieldValue)
                                  }
                                >
                                  <FileUploadIcon />
                                </button>
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
                                  className="upload"
                                  type="button"
                                  onClick={() =>
                                    handleAudioClick(setFieldValue)
                                  }
                                >
                                  <FileUploadIcon />
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <button
                                type="submit"
                                className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                                disabled={!(isImageUploaded && isAudioUploaded)} // Disable nút khi chưa tải lên thành công cả ảnh và audio
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
