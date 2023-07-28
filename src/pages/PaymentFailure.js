import React, { Component } from "react";
import Alert from "./../assets/images/Error.svg";
import Rating from "./../assets/images/Google-Rating.svg";

export default class PaymentFailure extends Component {
  render() {
    return (
      <section>
        <div className="payment-success payment-failure">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-5">

                <img className="mb-4 alert-img" src={Alert} alt="alert" />
                <h1>Sorry Your Payment<br/>Method Was Declined</h1>
                 <p>Please click the button<br/> below to try again.</p>
                <a href="javascript:void(0)" className="btn btn-outline-primary px-4">
                  Try Again
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="rating-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5">
                <h2>
                  Australia’s #1 Jewellery <br /> Insurance Provider
                </h2>
                <a href="javascript:void(0)">
                  <img src={Rating} alt="rating" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="policy-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <p>
                  Disclaimer for data consent | <a href="#">Policy wording</a>
                </p>
              </div>
            </div>
          </div>
        </div> */}

      </section>
    );
  }
}
