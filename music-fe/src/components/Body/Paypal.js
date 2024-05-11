import { useNavigate } from "react-router-dom";
import "../../Css/Paypal.css";
import {Checkout} from "./Checkout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
function Paypal() {
    const navigate= useNavigate();
  const initialOptions = {
    "client-id":
      "AUmMVZfZg3RyJCDxp5aXWPTXAaYKZgQnqw7XtYIcveSqt4L-jTAlOt6XImKtW8vfycj2t6YtYAeR1EuG",
    currency: "USD",
    intent: "capture",
  };

  return (
    <>
      <div className="div-count">
        <div
          style={{ padding: "161px", "min-height": "655px" }}
          className="container div-body-paypal"
        >
          <div style={{ background: "grey" }} className="displayflex hi">
            <div className="col-sm-6 col-lg-6">
              <img className="img-paypal" src="/img/Header/paypal.jpg"></img>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="form-pay">
                <h3 style={{ textAlign: "center" }}>Thanh toán</h3>
                <br />
                <br />
                <br />
                <PayPalScriptProvider options={initialOptions}>
                  <Checkout />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Paypal;
