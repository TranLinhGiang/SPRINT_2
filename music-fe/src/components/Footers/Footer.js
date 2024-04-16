import "../../Css/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import BackupIcon from "@mui/icons-material/Backup";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

function Footer({ language }) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_zfwbei6", "template_49r05n6", form.current, {
        publicKey: "jGRfK7ic4K5OcXh40",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Gửi Email thành công !");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Có lỗi xảy ra khi gửi email, vui lòng thử lại sau.");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div
        className="container-fluid bg-black text-secondary footer py-3 wow fadeIn footer-position full-height"
        data-wow-delay="0.1s"
      >
        <div className="container">
          {/* Footer content based on selected language */}
          {language === "en" ? (
            // English content

            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="d-flex pt-2">
                  <a
                    className="btn btn-square btn-outline-secondary rounded-circle me-2"
                    href=""
                  >
                    <TwitterIcon></TwitterIcon>
                  </a>
                  <a
                    className="btn btn-square btn-outline-secondary rounded-circle me-2"
                    href=""
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    className="btn btn-square btn-outline-secondary rounded-circle me-2"
                    href=""
                  >
                    <InstagramIcon></InstagramIcon>
                  </a>
                  <a
                    className="btn btn-square btn-outline-secondary rounded-circle me-2"
                    href=""
                  >
                    <BackupIcon></BackupIcon>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Community</h5>
                <a className="btn btn-link" href="">
                  For Artists
                </a>
                <a className="btn btn-link" href="">
                  Developers
                </a>
                <a className="btn btn-link" href="">
                  Advertisement
                </a>
                <a className="btn btn-link" href="">
                  Investors
                </a>
                <a className="btn btn-link" href="">
                  Supplier
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Spotify packages</h5>
                <a className="btn btn-link" href="">
                  Premium Individual
                </a>
                <a className="btn btn-link" href="">
                  Premium Student
                </a>
                <a className="btn btn-link" href="">
                  Spotify Free
                </a>
              </div>

              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Contact</h5>
                <div className="position-relative w-100">
                  <section>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="form">
                        <input
                          required
                          type="text"
                          name="user_name"
                          placeholder="Enter first and last name"
                          className="input-email-footer"
                          style={{ width: "230px" }}
                        />

                        <input
                          style={{ width: "230px" }}
                          required
                          type="email"
                          name="user_email"
                          placeholder="Enter email"
                          className="input-email-footer"
                        />

                        <textarea
                          className="textera"
                          style={{ width: "230px" }}
                          name="message"
                          required
                          placeholder="Enter message"
                          className="input-email-footer"
                        />
                        <br />

                        <input
                          className="btn btn-success"
                          id="submit"
                          type="submit"
                          name="submit"
                          value="Submit"
                        />
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          ) : (
            // Vietnamese content

            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="d-flex pt-2">
                  <a
                    className="btn btn-square btn-outline-secondary rounded-circle me-2"
                    href=""
                  >
                    <TwitterIcon></TwitterIcon>
                  </a>
                  <a
                    className="btn btn-square btn-outline-secondary rounded-circle me-2"
                    href=""
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    className="btn btn-square btn-outline-secondary rounded-circle me-2"
                    href=""
                  >
                    <InstagramIcon></InstagramIcon>
                  </a>
                  <a
                    className="btn btn-square btn-outline-secondary rounded-circle me-2"
                    href=""
                  >
                    <BackupIcon></BackupIcon>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Cộng đồng</h5>
                <a className="btn btn-link" href="">
                  Dành cho các Nghệ sĩ
                </a>
                <a className="btn btn-link" href="">
                  Nhà phát triển
                </a>
                <a className="btn btn-link" href="">
                  Quảng cáo
                </a>
                <a className="btn btn-link" href="">
                  Nhà đầu tư
                </a>
                <a className="btn btn-link" href="">
                  Nhà cung cấp
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Các gói của Spotify</h5>
                <a className="btn btn-link" href="">
                  Cá nhân cao cấp
                </a>
                <a className="btn btn-link" href="">
                  Sinh viên cao cấp
                </a>
                <a className="btn btn-link" href="">
                  Spotify miễn phí
                </a>
              </div>

              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Liên hệ</h5>
                <div className="position-relative w-100">
                  <section>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="form">
                        <input
                          required
                          type="text"
                          name="user_name"
                          placeholder="Nhập họ và tên"
                          className="input-email-footer"
                          style={{ width: "230px" }}
                        />

                        <input
                          style={{ width: "230px" }}
                          required
                          type="email"
                          name="user_email"
                          placeholder="Nhập email"
                          className="input-email-footer"
                        />

                        <textarea
                          className="textera"
                          style={{ width: "230px" }}
                          name="message"
                          required
                          placeholder="Nội dung"
                          className="input-email-footer"
                        />
                        <br />

                        <input
                          className="btn btn-success"
                          id="submit"
                          type="submit"
                          name="submit"
                          value="Gửi"
                          style={{"background": '#1FD860'}}
                        />
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          )}
          {/* Other Footer content */}
        </div>
      </div>
      {/* Footer content */}
    </>
  );
}
export default Footer;
