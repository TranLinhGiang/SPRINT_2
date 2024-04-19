import Footer from "../Footers/Footer";
import HeaderAdmin from "../Header/HeaderAdmin";
import "../../Css/CreateSpotify.css";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import * as method from "../../Service/method";

function CreateSpotify() {
  const [categories, setCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

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
                      src={selectedImage ? selectedImage : ""}
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
                              <Field
                                type="file"
                                className="form-control"
                                name="image"
                                style={{ color: "white" }}
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  const imageUrl = URL.createObjectURL(file);
                                  setSelectedImage(imageUrl);
                                }}
                              />
                            </div>
                          </div>

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
