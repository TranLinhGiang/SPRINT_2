import "../../Css/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import BackupIcon from "@mui/icons-material/Backup";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

function Footer() {
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
          toast.success("Email đã được gửi thành công!");
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
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-black text-secondary footer py-3 wow fadeIn footer-position full-height"
        data-wow-delay="0.1s"
      >
        <div className="container">
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
                        style={{ width: "230px"}}
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

                      {/* <ReCAPTCHA
                  className="capcha"
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
                  timeout={0} //tắt thời gian chờ
                /> */}
                      <br />

                      <input
                        className="btn btn-success"
                        id="submit"
                        type="submit"
                        name="submit"
                        value="Gửi"
                      />
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
}
export default Footer;
