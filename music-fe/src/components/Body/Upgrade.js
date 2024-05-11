import { useEffect } from "react";
import "../../Css/Upgrade.css";
import Footer from "../Footers/Footer";
import HeaderLoginPage from "../Header/HeaderLoginPage";
import { Link } from "react-router-dom";

function Upgrade() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 1200,
      behavior: "smooth" // Cuộn mượt
    });
  };
  return (
    <>
      <div className="HeaderLoginPage">
        <HeaderLoginPage />
      </div>
      <div>
        <div className="display-pay">
          <div className="col-sm-1 col-lg-1"></div>
          <div className="col-sm-6 col-lg-6">
            <br />
            <br />
            <h1>59,000₫ cho 3 tháng</h1>
            <h1>dùng gói Premium</h1>
            <h6>
              Tận hưởng trải nghiệm nghe nhạc không quảng cáo, không cần kết nối
              mạng
            </h6>
            <h6>và nhiều lợi ích khác. Hủy bất cứ lúc nào.</h6>
            <br />
            <button onClick={scrollToTop} className="button-view-gpotify">Xem tất cả các gói</button>
            <br />
            <br />
            <p style={{ color: "white", "font-size": "x-small" }}>
              59.000 ₫ cho 3 tháng, sau đó là 59.000 ₫/tháng. Chỉ áp dụng ưu đãi
              nếu bạn chưa từng dùng gói Premium. Có áp dụng điều khoản.
              <br /> Ưu đãi kết thúc vào ngày 21 tháng 5, 2024.
            </p>
            <p></p>
          </div>
          <div className="col-sm-4 col-lg-4">
            <div className="container">
              <br />
              <img
                className="picture-pay"

                src="https://img.upanh.tv/2024/05/08/pexels-cottonbro-6863081.jpg"
                alt="pexels-cottonbro-6863081.jpg"
                border="0"
              ></img>
            </div>
          </div>
          <div className="col-sm-1 col-lg-1"></div>
        </div>
        <div>
          <div class="sc-5720056d-0 llbyKp">
            <section
              data-event-campaign-id="q2-2024-sea-revenue-campaign"
              data-event-offer-type-id="premium-mini-1d"
              data-event-country-code="VN"
              data-component-name="benefits-comparison"
              data-component-position="1"
              data-component-type="promo"
              data-hero-offer-type-id="intro"
              data-event-in-view="true"
              class="sc-e85487b-1 blDDfp"
              className="background-div"
            >
              <article class="sc-e85487b-2 fJyxkp">
                <div class="sc-eb0037a0-0 dOqyyy">
                  <header class="sc-edbf1e57-0 iJDUKT sc-eb0037a0-1 jnBJYG">
                    <h2 class="sc-edbf1e57-1 icAwBf">
                      Trải nghiệm sự khác biệt
                    </h2>
                    <h3 style={{color:'white'}} class="sc-edbf1e57-3 VkMl">
                      Dùng Premium để nắm toàn quyền kiểm soát trải nghiệm nghe
                      nhạc. Hủy bất cứ lúc nào.
                    </h3>
                  </header>
                  <table class="sc-eb0037a0-3 euEgPe">
                    <thead>
                      <tr>
                        <th
                          id="benefit-0"
                          scope="col"
                          class="sc-eb0037a0-2 sc-eb0037a0-5 kgxfCr ioSILX"
                        >
                          <div class="sc-eb0037a0-8 keWuTF">
                            Lợi ích dành cho bạn
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="sc-eb0037a0-2 sc-eb0037a0-9 kgxfCr ehwXih"
                        >
                          <div class="sc-eb0037a0-10 fukaKX">
                            <div class="sc-eb0037a0-11 gPhyQp">
                              Gói Free
                              <br />
                              của Gpotify
                            </div>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="sc-eb0037a0-2 sc-eb0037a0-9 jHOXQn fKvsJH"
                        >
                          <div class="sc-eb0037a0-10 fukaKX">
                            {/* <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"
                                         class="Svg-sc-ytk21e-0 hPIlex">
                                        <path d='M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm5.045 15.866a.686.686 0 0 1-.943.228c-2.583-1.579-5.834-1.935-9.663-1.06a.686.686 0 0 1-.306-1.337c4.19-.958 7.785-.546 10.684 1.226a.686.686 0 0 1 .228.943zm1.346-2.995a.858.858 0 0 1-1.18.282c-2.956-1.817-7.464-2.344-10.961-1.282a.856.856 0 0 1-1.11-.904.858.858 0 0 1 .611-.737c3.996-1.212 8.962-.625 12.357 1.462a.857.857 0 0 1 .283 1.179zm.116-3.119c-3.546-2.106-9.395-2.3-12.78-1.272a1.029 1.029 0 0 1-.597-1.969c3.886-1.18 10.345-.952 14.427 1.471a1.029 1.029 0 0 1-1.05 1.77z'/>
                                    </svg> */}
                            <div class="sc-eb0037a0-11 gPhyQp">Premium</div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="sc-eb0037a0-12 jpVivl">
                      <tr class="sc-eb0037a0-4 krRcyB">
                        <th
                          scope="row"
                          id="benefit-1"
                          class="sc-eb0037a0-2 sc-eb0037a0-5 kgxfCr ioSILX"
                        >
                          <div class="sc-eb0037a0-8 keWuTF">
                            <span
                              tabindex="0"
                              role="tooltip"
                              aria-describedby="tooltip-16527246720"
                              class="sc-d7ee545a-0 jvqTUD"
                            >
                              Nghe nhạc không quảng cáo
                            </span>
                          </div>
                        </th>
                        <td
                          headers="benefit-1"
                          aria-labelledby="benefit-1"
                          class="sc-eb0037a0-2 sc-eb0037a0-6 kgxfCr iFGUhA"
                        >
                          <svg
                            width="24"
                            height="4"
                            viewBox="0 0 24 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>not included</title>
                            <rect
                              x="0.513672"
                              y="0.826172"
                              width="22.8767"
                              height="3"
                              fill="#949494"
                            ></rect>
                          </svg>
                        </td>
                        <td
                          headers="benefit-1"
                          aria-labelledby="benefit-1"
                          class="sc-eb0037a0-2 sc-eb0037a0-6 jHOXQn evkOxA"
                        >
                          <span role="img">
                            <svg
                              data-encore-id="icon"
                              role="img"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              class="Svg-sc-ytk21e-0 jjKKTt"
                            >
                              <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.398-2.38a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr class="sc-eb0037a0-4 kxSxIa">
                        <th
                          scope="row"
                          id="benefit-2"
                          class="sc-eb0037a0-2 sc-eb0037a0-5 kgxfCr ioSILX"
                        >
                          <div class="sc-eb0037a0-8 keWuTF">
                            <span
                              tabindex="0"
                              role="tooltip"
                              aria-describedby="tooltip-16524465547"
                              class="sc-d7ee545a-0 jvqTUD"
                            >
                              Tải xuống để nghe offline
                            </span>
                          </div>
                        </th>
                        <td
                          headers="benefit-2"
                          aria-labelledby="benefit-2"
                          class="sc-eb0037a0-2 sc-eb0037a0-6 kgxfCr iFGUhA"
                        >
                          <svg
                            width="24"
                            height="4"
                            viewBox="0 0 24 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>not included</title>
                            <rect
                              x="0.513672"
                              y="0.826172"
                              width="22.8767"
                              height="3"
                              fill="#949494"
                            ></rect>
                          </svg>
                        </td>
                        <td
                          headers="benefit-2"
                          aria-labelledby="benefit-2"
                          class="sc-eb0037a0-2 sc-eb0037a0-6 jHOXQn evkOxA"
                        >
                          <span role="img">
                            <svg
                              data-encore-id="icon"
                              role="img"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              class="Svg-sc-ytk21e-0 jjKKTt"
                            >
                              <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.398-2.38a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr class="sc-eb0037a0-4 jcbIXf">
                        <th
                          scope="row"
                          id="benefit-3"
                          class="sc-eb0037a0-2 sc-eb0037a0-5 kgxfCr ioSILX"
                        >
                          <div class="sc-eb0037a0-8 keWuTF">
                            <span
                              tabindex="0"
                              role="tooltip"
                              aria-describedby="tooltip-7267713704"
                              class="sc-d7ee545a-0 jvqTUD"
                            >
                              Phát nhạc theo thứ tự bất kỳ
                            </span>
                          </div>
                        </th>
                        <td
                          headers="benefit-3"
                          aria-labelledby="benefit-3"
                          class="sc-eb0037a0-2 sc-eb0037a0-6 kgxfCr iFGUhA"
                        >
                          <svg
                            width="24"
                            height="4"
                            viewBox="0 0 24 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>not included</title>
                            <rect
                              x="0.513672"
                              y="0.826172"
                              width="22.8767"
                              height="3"
                              fill="#949494"
                            ></rect>
                          </svg>
                        </td>
                        <td
                          headers="benefit-3"
                          aria-labelledby="benefit-3"
                          class="sc-eb0037a0-2 sc-eb0037a0-6 jHOXQn evkOxA"
                        >
                          <span role="img">
                            <svg
                              data-encore-id="icon"
                              role="img"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              class="Svg-sc-ytk21e-0 jjKKTt"
                            >
                              <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.398-2.38a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr class="sc-eb0037a0-4 gzNVaU">
                        <th
                          scope="row"
                          id="benefit-4"
                          class="sc-eb0037a0-2 sc-eb0037a0-5 kgxfCr ioSILX"
                        >
                          <div class="sc-eb0037a0-8 keWuTF">
                            <span
                              tabindex="0"
                              role="tooltip"
                              aria-describedby="tooltip-25541232127"
                              class="sc-d7ee545a-0 jvqTUD"
                            >
                              Chất lượng âm thanh cao
                            </span>
                          </div>
                        </th>
                        <td
                          headers="benefit-4"
                          aria-labelledby="benefit-4"
                          class="sc-eb0037a0-2 sc-eb0037a0-6 kgxfCr iFGUhA"
                        >
                          <svg
                            width="24"
                            height="4"
                            viewBox="0 0 24 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>not included</title>
                            <rect
                              x="0.513672"
                              y="0.826172"
                              width="22.8767"
                              height="3"
                              fill="#949494"
                            ></rect>
                          </svg>
                        </td>
                        <td
                          headers="benefit-4"
                          aria-labelledby="benefit-4"
                          class="sc-eb0037a0-2 sc-eb0037a0-6 jHOXQn evkOxA"
                        >
                          <span role="img">
                            <svg
                              data-encore-id="icon"
                              role="img"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              class="Svg-sc-ytk21e-0 jjKKTt"
                            >
                              <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.398-2.38a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr class="sc-eb0037a0-4 fdXgpZ">
                        <th
                          scope="row"
                          id="benefit-5"
                          class="sc-eb0037a0-2 sc-eb0037a0-5 kgxfCr ioSILX"
                        >
                          <div class="sc-eb0037a0-8 keWuTF">
                            <span
                              tabindex="0"
                              role="tooltip"
                              aria-describedby="tooltip-13214733402"
                              class="sc-d7ee545a-0 jvqTUD"
                            >
                              Nghe cùng bạn bè theo thời gian thực
                            </span>
                          </div>
                        </th>
                        <td
                          headers="benefit-5"
                          aria-labelledby="benefit-5"
                          class="sc-eb0037a0-2 sc-eb0037a0-6 kgxfCr iFGUhA"
                        >
                          <svg
                            width="24"
                            height="4"
                            viewBox="0 0 24 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>not included</title>
                            <rect
                              x="0.513672"
                              y="0.826172"
                              width="22.8767"
                              height="3"
                              fill="#949494"
                            ></rect>
                          </svg>
                        </td>
                        <td
                          headers="benefit-5"
                          aria-labelledby="benefit-5"
                          class="sc-eb0037a0-2 sc-eb0037a0-6 jHOXQn evkOxA"
                        >
                          <span role="img">
                            <svg
                              data-encore-id="icon"
                              role="img"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              class="Svg-sc-ytk21e-0 jjKKTt"
                            >
                              <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.398-2.38a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr class="sc-eb0037a0-4 fjYBzy">
                        <th
                          scope="row"
                          id="benefit-6"
                          class="sc-eb0037a0-2 sc-eb0037a0-5 kgxfCr ioSILX"
                        >
                          <div class="sc-eb0037a0-8 keWuTF">
                            <span
                              tabindex="0"
                              role="tooltip"
                              aria-describedby="tooltip-12044263674"
                              class="sc-d7ee545a-0 jvqTUD"
                            >
                              Sắp xếp danh sách chờ nghe
                            </span>
                          </div>
                        </th>
                        <td
                          headers="benefit-6"
                          aria-labelledby="benefit-6"
                          class="sc-eb0037a0-2 sc-eb0037a0-6 kgxfCr iFGUhA"
                        >
                          <svg
                            width="24"
                            height="4"
                            viewBox="0 0 24 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>not included</title>
                            <rect
                              x="0.513672"
                              y="0.826172"
                              width="22.8767"
                              height="3"
                              fill="#949494"
                            ></rect>
                          </svg>
                        </td>
                        <td
                          headers="benefit-6"
                          aria-labelledby="benefit-6"
                          class="sc-eb0037a0-2 sc-eb0037a0-6 jHOXQn evkOxA"
                        >
                          <span role="img">
                            <svg
                              data-encore-id="icon"
                              role="img"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              class="Svg-sc-ytk21e-0 jjKKTt"
                            >
                              <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.398-2.38a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z" />
                            </svg>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </section>
            <section
            style={{background:'none'}}
              id="plans"
              data-event-campaign-id="q2-2024-sea-revenue-campaign"
              data-event-offer-type-id="premium-mini-1d"
              data-event-country-code="VN"
              data-component-name="storefront"
              data-component-position="2"
              data-component-type="product"
              data-hero-offer-type-id="intro"
              data-current-plan="false"
              class="sc-e85487b-1 blDDfp sc-5ea0f8a8-16 fgDxuH"
            >
              <article class="sc-e85487b-2 ipHOkF">
                <div class="sc-5ea0f8a8-15 cAmDON">
                  <div
                    data-current-plan-text="Gói hiện tại của bạn"
                    data-component-name="STOREFRONT-PLAN"
                    data-component-position="0"
                    data-component-type="product"
                    data-event-in-view="true"
                    class="sc-5ea0f8a8-0 sc-5ea0f8a8-3 hVAkWF jmqBuH"
                  >
                    <div>
                      <div
                        class="Container-sc-15slb3k-0 kOZwtm sc-5ea0f8a8-22 fycIlM"
                        data-encore-id="iconWithText"
                      >
                        <span
                          data-encore-id="type"
                          class="Type__TypeElement-sc-goli3j-0 hkczJp"
                        >
                          Premium
                        </span>
                      </div>
                      <h3
                        class="Type__TypeElement-sc-goli3j-0 dqldSo sc-5ea0f8a8-1 iMXmlo"
                        data-encore-id="type"
                      >
                        Mini
                      </h3>
                      <p class="sc-5ea0f8a8-5 lcuHR">2.300 ₫ cho 1 ngày</p>
                    </div>
                    <hr class="sc-5ea0f8a8-10 dFwbQo" />
                  </div>
                  <ul class="sc-5ea0f8a8-0 sc-5ea0f8a8-9 hVAkWF deERIC">
                    <li class="sc-5ea0f8a8-7 gsnBnB">
                      <div
                        stroke-width="1"
                        aria-hidden="true"
                        class="sc-2355f191-0 kJKBfs"
                      >
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-label=""
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          class="Svg-sc-ytk21e-0 hPIlex"
                        >
                          <path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" />
                        </svg>
                      </div>
                      <p class="sc-5ea0f8a8-8 fXohck">
                        1 tài khoản Premium chỉ dành cho thiết bị di động
                      </p>
                    </li>
                    <li class="sc-5ea0f8a8-7 gsnBnB">
                      <div
                        stroke-width="1"
                        aria-hidden="true"
                        class="sc-2355f191-0 kJKBfs"
                      >
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-label=""
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          class="Svg-sc-ytk21e-0 hPIlex"
                        >
                          <path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" />
                        </svg>
                      </div>
                      <p class="sc-5ea0f8a8-8 fXohck">
                        Nghe tối đa 30 bài hát trên 1 thiết bị khi không có kết
                        nối mạng
                      </p>
                    </li>
                    <li class="sc-5ea0f8a8-7 gsnBnB">
                      <div
                        stroke-width="1"
                        aria-hidden="true"
                        class="sc-2355f191-0 kJKBfs"
                      >
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-label=""
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          class="Svg-sc-ytk21e-0 hPIlex"
                        >
                          <path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" />
                        </svg>
                      </div>
                      <p class="sc-5ea0f8a8-8 fXohck">Thanh toán một lần</p>
                    </li>
                    <li class="sc-5ea0f8a8-7 gsnBnB">
                      <div
                        stroke-width="1"
                        aria-hidden="true"
                        class="sc-2355f191-0 kJKBfs"
                      >
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-label=""
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          class="Svg-sc-ytk21e-0 hPIlex"
                        >
                          <path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" />
                        </svg>
                      </div>
                      <p class="sc-5ea0f8a8-8 fXohck">
                        Chất lượng âm thanh cơ bản
                      </p>
                    </li>
                  </ul>
                  <div
                    data-current-plan-button-hidden="false"
                    data-component-name="STOREFRONT-PLAN"
                    data-component-position="0"
                    data-component-type="product"
                    class="sc-5ea0f8a8-0 sc-5ea0f8a8-14 hVAkWF gBkEkK"
                  >
                    <div>
                      <a
                        tabindex="0"
                        data-encore-id="buttonPrimary"
                        class="Button-sc-qlcn5g-0 hnsEeq"
                      >
                        <Link to={"/pay"} class="ButtonInner-sc-14ud5tc-0 bkCQee sc-67ff8803-1 sc-5ea0f8a8-13 cFVwIz ilSpoN">
                          <span>Mua Premium Mini</span>
                        </Link>
                        <span class="ButtonFocus-sc-2hq6ey-0 dXAHdj"></span>
                        
                      </a>
                    </div>
                  </div>
                  <div class="sc-5ea0f8a8-0 sc-5ea0f8a8-11 hVAkWF jkqXwW">
                    <p
                      class="Type__TypeElement-sc-goli3j-0 eRmZIa sc-5ea0f8a8-12 gtYrWf"
                      data-encore-id="type"
                    >
                      <a href="https://www.spotify.com/vn-vi/legal/end-user-agreement/">
                        Có áp dụng điều khoản
                      </a>
                      .<br />
                    </p>
                  </div>
                  <div
                    data-current-plan-text="Gói hiện tại của bạn"
                    data-component-name="STOREFRONT-PLAN"
                    data-component-position="1"
                    data-component-type="product"
                    data-event-in-view="true"
                    class="sc-5ea0f8a8-0 sc-5ea0f8a8-3 hVAkWF jmqBuH"
                  >
                    <ul class="sc-5ea0f8a8-17 eCiikK">
                      <li class="sc-757025a2-0 dPfVhm">
                        <span>59.000 ₫ cho 3 tháng</span>
                      </li>
                    </ul>
                    <div>
                      <div
                        class="Container-sc-15slb3k-0 kOZwtm sc-5ea0f8a8-22 fycIlM"
                        data-encore-id="iconWithText"
                      >
                        <span
                          data-encore-id="type"
                          class="Type__TypeElement-sc-goli3j-0 hkczJp"
                        >
                          Premium
                        </span>
                      </div>
                      <h3
                        class="Type__TypeElement-sc-goli3j-0 dqldSo sc-5ea0f8a8-1 jxvCWU"
                        data-encore-id="type"
                      >
                        Individual
                      </h3>
                      <p class="sc-5ea0f8a8-5 lcuHR">59.000 ₫ cho 3 tháng</p>
                      <p class="sc-5ea0f8a8-6 yyfgQ">
                        Sau đó là 59.000 ₫/tháng.
                      </p>
                    </div>
                    <hr class="sc-5ea0f8a8-10 dFwbQo" />
                  </div>
                  <ul class="sc-5ea0f8a8-0 sc-5ea0f8a8-9 hVAkWF deERIC">
                    <li class="sc-5ea0f8a8-7 gsnBnB">
                      <div
                        stroke-width="1"
                        aria-hidden="true"
                        class="sc-2355f191-0 kJKBfs"
                      >
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-label=""
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          class="Svg-sc-ytk21e-0 hPIlex"
                        >
                          <path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" />
                        </svg>
                      </div>
                      <p class="sc-5ea0f8a8-8 fXohck">1 tài khoản Premium</p>
                    </li>
                    <li class="sc-5ea0f8a8-7 gsnBnB">
                      <div
                        stroke-width="1"
                        aria-hidden="true"
                        class="sc-2355f191-0 kJKBfs"
                      >
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-label=""
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          class="Svg-sc-ytk21e-0 hPIlex"
                        >
                          <path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" />
                        </svg>
                      </div>
                      <p class="sc-5ea0f8a8-8 fXohck">Hủy bất cứ lúc nào</p>
                    </li>
                    <li class="sc-5ea0f8a8-7 gsnBnB">
                      <div
                        stroke-width="1"
                        aria-hidden="true"
                        class="sc-2355f191-0 kJKBfs"
                      >
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-label=""
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          class="Svg-sc-ytk21e-0 hPIlex"
                        >
                          <path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" />
                        </svg>
                      </div>
                      <p class="sc-5ea0f8a8-8 fXohck">
                        Đăng ký hoặc thanh toán một lần
                      </p>
                    </li>
                  </ul>
                  <div
                    data-current-plan-button-hidden="false"
                    data-component-name="STOREFRONT-PLAN"
                    data-component-position="1"
                    data-component-type="product"
                    class="sc-5ea0f8a8-0 sc-5ea0f8a8-14 hVAkWF papYq"
                  >
                    <div>
                      <a
                        tabindex="0"
                        data-encore-id="buttonPrimary"
                        class="Button-sc-qlcn5g-0 hnsEeq"
                      >
                       
                        <Link to={"/pay"} class="ButtonInner-sc-14ud5tc-0 jdgYHe sc-67ff8803-1 sc-5ea0f8a8-13 cFVwIz jmNiGl">
                          <span>Mua Premium Individual</span>
                        </Link>
                        <span class="ButtonFocus-sc-2hq6ey-0 dXAHdj"></span>
                       
                      </a>
                    </div>
                  </div>
                  <div class="sc-5ea0f8a8-0 sc-5ea0f8a8-11 hVAkWF ivWTsK">
                    <p
                      class="Type__TypeElement-sc-goli3j-0 eRmZIa sc-5ea0f8a8-12 gtYrWf"
                      data-encore-id="type"
                    >
                      59.000 ₫ cho 3 tháng, sau đó là 59.000 ₫/tháng. Chỉ áp
                      dụng ưu đãi nếu bạn chưa từng dùng gói Premium.{" "}
                      <a href="https://www.spotify.com/vn-vi/legal/premium-promotional-offer-terms/">
                        Có áp dụng điều khoản
                      </a>
                      .<br /> Ưu đãi kết thúc vào ngày 21 tháng 5, 2024.
                    </p>
                  </div>
                  <div
                    data-current-plan-text="Gói hiện tại của bạn"
                    data-component-name="STOREFRONT-PLAN"
                    data-component-position="2"
                    data-component-type="product"
                    data-event-in-view="true"
                    class="sc-5ea0f8a8-0 sc-5ea0f8a8-3 hVAkWF jmqBuH"
                  >
                    <ul class="sc-5ea0f8a8-17 fUQNVb">
                      <li class="sc-757025a2-0 dPfVhm">
                        <span>29.500 ₫ cho 3 tháng</span>
                      </li>
                    </ul>
                    <div>
                      <div
                        class="Container-sc-15slb3k-0 kOZwtm sc-5ea0f8a8-22 fycIlM"
                        data-encore-id="iconWithText"
                      >
                        <span
                          data-encore-id="type"
                          class="Type__TypeElement-sc-goli3j-0 hkczJp"
                        >
                          Premium
                        </span>
                      </div>
                      <h3
                        class="Type__TypeElement-sc-goli3j-0 dqldSo sc-5ea0f8a8-1 kROuKp"
                        data-encore-id="type"
                      >
                        Student
                      </h3>
                      <p class="sc-5ea0f8a8-5 lcuHR">29.500 ₫ cho 3 tháng</p>
                      <p class="sc-5ea0f8a8-6 yyfgQ">
                        Sau đó là 29.500 ₫/tháng.
                      </p>
                    </div>
                    <hr class="sc-5ea0f8a8-10 dFwbQo" />
                  </div>
                  <ul class="sc-5ea0f8a8-0 sc-5ea0f8a8-9 hVAkWF deERIC">
                    <li class="sc-5ea0f8a8-7 gsnBnB">
                      <div
                        stroke-width="1"
                        aria-hidden="true"
                        class="sc-2355f191-0 kJKBfs"
                      >
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-label=""
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          class="Svg-sc-ytk21e-0 hPIlex"
                        >
                          <path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" />
                        </svg>
                      </div>
                      <p class="sc-5ea0f8a8-8 fXohck">
                        1 tài khoản Premium đã xác minh
                      </p>
                    </li>
                    <li class="sc-5ea0f8a8-7 gsnBnB">
                      <div
                        stroke-width="1"
                        aria-hidden="true"
                        class="sc-2355f191-0 kJKBfs"
                      >
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-label=""
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          class="Svg-sc-ytk21e-0 hPIlex"
                        >
                          <path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" />
                        </svg>
                      </div>
                      <p class="sc-5ea0f8a8-8 fXohck">
                        Giảm giá cho sinh viên đủ điều kiện
                      </p>
                    </li>
                    <li class="sc-5ea0f8a8-7 gsnBnB">
                      <div
                        stroke-width="1"
                        aria-hidden="true"
                        class="sc-2355f191-0 kJKBfs"
                      >
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-label=""
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          class="Svg-sc-ytk21e-0 hPIlex"
                        >
                          <path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" />
                        </svg>
                      </div>
                      <p class="sc-5ea0f8a8-8 fXohck">Hủy bất cứ lúc nào</p>
                    </li>
                    <li class="sc-5ea0f8a8-7 gsnBnB">
                      <div
                        stroke-width="1"
                        aria-hidden="true"
                        class="sc-2355f191-0 kJKBfs"
                      >
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-label=""
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          class="Svg-sc-ytk21e-0 hPIlex"
                        >
                          <path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" />
                        </svg>
                      </div>
                      <p class="sc-5ea0f8a8-8 fXohck">
                        Đăng ký hoặc thanh toán một lần
                      </p>
                    </li>
                  </ul>
                  <div
                    data-current-plan-button-hidden="false"
                    data-component-name="STOREFRONT-PLAN"
                    data-component-position="2"
                    data-component-type="product"
                    class="sc-5ea0f8a8-0 sc-5ea0f8a8-14 hVAkWF hIcJzv"
                  >
                    <div>
                      <a
                        tabindex="0"
                        data-encore-id="buttonPrimary"
                        class="Button-sc-qlcn5g-0 hnsEeq"
                      >
                       
                        <Link to={"/pay"} class="ButtonInner-sc-14ud5tc-0 esiRgf sc-67ff8803-1 sc-5ea0f8a8-13 cFVwIz dHIAwc">
                          <span>Mua Premium Student</span>
                        </Link>
                        <span class="ButtonFocus-sc-2hq6ey-0 dXAHdj"></span>
                      </a>
                    </div>
                  </div>
                  <div class="sc-5ea0f8a8-0 sc-5ea0f8a8-11 hVAkWF gVrEKD">
                    <p
                      class="Type__TypeElement-sc-goli3j-0 eRmZIa sc-5ea0f8a8-12 gtYrWf"
                      data-encore-id="type"
                    >
                      29.500 ₫ cho 3 tháng, sau đó là 29.500 ₫/tháng. Ưu đãi chỉ
                      dành cho sinh viên tại các trường đại học và cao đẳng được
                      công nhận và nếu bạn chưa từng dùng gói Premium.{" "}
                      <a href="https://www.spotify.com/vn-vi/legal/premium-promotional-offer-terms/">
                        Có áp dụng điều khoản
                      </a>
                      .<br /> Ưu đãi kết thúc vào ngày 21 tháng 5, 2024.
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Upgrade;
