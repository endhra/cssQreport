import React, { Component } from "react";
import { PayAnnually } from "./../components/PayAnnually";
import { PayMonthly } from "./../components/PayMonthly";
import Card from "./../assets/images/card-primary.svg";
import Calender from "./../assets/images/date-primary.svg";
import Lock from "./../assets/images/lock-primary.svg";
import Visa from "./../assets/images/visa.png";
import Mastercard from "./../assets/images/mastercard.png";
import Express from "./../assets/images/express.png";
import Apple from "./../assets/images/apple-pay.png";
import Google from "./../assets/images/google-pay.png";
import Dotted from "./../assets/images/dotted-line.svg";

import "../payment.scss";


export default class PaymentSuccess extends Component {
render() {
return (
<div>
  <div className="ready-payment">
    <div className="container">
      <p><span className="d-block">Congrats Liran,</span> Your Policy is Ready for Payment.</p>
    </div>
  </div>
  <div className="payment-section">
    <div className="container">
    <small className="text-md-center d-block">POLICY DETAILS</small>
    <h1 className="text-md-center mb-1">
        Your Policy Payment
      </h1>
      <p className="text-md-center mb-0">Complete the payment below.</p>
    </div>
  </div>
  <div className="policy-payment">
  <div className="container">
  <div className="row justify-content-center pt-sm-4">
  <div className="col-md-8 col-xl-6">
  <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <p>
            <strong>Quote Number</strong>
          </p>
          <span>
            <strong>1652075973367</strong>
          </span>
        </li>
        <li className="list-group-item">
          <p>Mens Watch</p>
          <span>$60,000.00</span>
        </li>
        <li className="list-group-item">
          <p>
            <strong>Total Insured Value</strong>
          </p>
          <span>
            <strong>$60,000.00</strong>
          </span>
        </li>
      </ul>
      <p>The policy setup fee of $126.50 is included in your quote.</p>
      <img className="dotted-img" src={Dotted} alt="dot"></img>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <PayAnnually />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <PayMonthly />
        </div>
      </div>

      </div> 
    </div> 
    </div>
  </div>
  <div className="payment-type">
  <div className="container">
  <div className="row justify-content-center pb-4">
    <div className="col-md-8 col-xl-6 pb-2">
  <h5 className="font-bold mb-3 pt-3">
        Please choose how you’d like to pay.
      </h5>
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <input
              type="radio"
              name="flexRadioDefault"
              checked
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              <h5>Pay Annually</h5>
              <h2>$412.50</h2>
              <h6 className="">
                It costs less to pay annually
              </h6>
              <p>(incl. GST and Government fees)</p>
              

              <a
                href="javascript:void(0)"
                className="btn btn-outline-primary"
              >
                Select Annual
              </a>
            </label>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            <input
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" for="flexRadioDefault2">
              <h5>Pay Monthly</h5>
              <h2>$62.75</h2>
              <h6 className="">
                per instalment for 12 months
              </h6>
              <p>
                (incl. GST and Government fees. A $10.00 application fee
                will be added to the initial instalment)
              </p>
              <a
                href="javascript:void(0)"
                className="btn btn-outline-primary"
              >
                Select Annual
              </a>
            </label>
          </button>
        </li>
      </ul>
  </div>
  </div>
  </div>

  </div>


<div className="container">
  <div className="row justify-content-center mb-2">
    <div className="col-md-8 col-xl-6">
      <div className="card express-block">
        <div className="card-body text-center">
          <a href="#" className="btn btn-dark mx-1 mx-md-2">
            Pay with <img className="ms-2" src={Apple} alt="apple" />
          </a>
          <a href="#" className="btn btn-outline-primary mx-1 mx-md-2">
            Buy with
            <img className="ms-2" src={Google} alt="google" />
          </a>
        </div>
      </div>
      <div className="card card-details">
        <div className="card-body">
          <div className="row g-0">
            <div className="col-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name on card"
              />
            </div>
            <div className="col-12 position-relative card-number">
              <input
                type="number"
                className="form-control card-number"
                placeholder="Card number"
              />
              <span>
                <img src={Card} alt="" />
              </span>
            </div>
          </div>

          <div className="row g-0">
            <div className="col-6 position-relative">
              <input
                type="text"
                className="form-control border-right-0"
                placeholder="MM / YY"
              />
              <span>
                <img src={Calender} alt="" />
              </span>
            </div>
            <div className="col-6 position-relative">
              <input
                type="number"
                className="form-control border-left-0"
                placeholder="CCV"
              />
              <span>
                <img src={Lock} alt="" />
              </span>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-12 text-end">
              <button
                type="submit"
                className="btn btn-primary w-100 mt-4"
              >
                Pay $412.50
              </button>
            </div>
          </div>

          <p className="text-center">
            0% credit card surcharge, we cover that for you.
          </p>
          <p className="text-center">
            <a href="#">
              <img src={Visa} alt="Visa" />
            </a>
            <a href="#" className="mx-2">
              <img src={Mastercard} alt="Mastercard" />
            </a>
            <a href="#">
              <img src={Express} alt="Express" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
);
}
}
