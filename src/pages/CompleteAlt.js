import React from "react";

const CompleteAlt = () => {
  return (
    <>
      <div className="complete-partner">
        <div className="container">
          <div className="row justify-content-center pb-144">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="text-center">
                <img className="success-img" src="/success.png" alt="success" />
                <h3>
                  You’re all set <span className="d-block"> Liran </span>
                </h3>

                <p className="mb-5">Have a great day!</p>
              </div>

              <div className="alert alert-light alt-mb" role="alert">
                <img className="me-2 pe-1" src="/email.png" alt="email" />
                We’ve emailed your policy documents.
              </div>

              <div className="alert alert-light alt-mb" role="alert">
                <img
                  className="me-2 pe-1"
                  src="/partner-added.png"
                  alt="Added"
                />
                Your partner has been added.
              </div>
            </div>
          </div>
        </div>

        <div className="google-rating">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5 text-center">
                <h4>
                  Australia’s #1 Jewellery{" "}
                  <span className="d-block"> Insurance Provider </span>
                </h4>

                <a href="true">
                  <img src="/google-rating.png" alt="google-rating" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteAlt;
