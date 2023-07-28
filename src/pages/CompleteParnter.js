import React from "react";

const CompletePartner = () => {
  return (
    <>
      <div className="complete-partner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="text-center">
                <img className="success-img" src="/success.png" alt="success" />
                <h3>
                  Congratulations <span className="d-block"> Liran </span>
                </h3>

                <p>Your Jewellery is now protected.</p>

                <p className="mb-5">Thanks for trusting Q Report</p>
              </div>

              <div className="alert alert-light" role="alert">
                <img className="me-2 pe-1" src="/email.png" alt="email" />
                We’ve emailed your policy documents.
              </div>

              <div className="card">
                <div className="card-body">
                  <h4>Do You Want to Add Your Partner to the Policy?</h4>
                  <p className="pb-2">
                    To ensure those that are wearing the jewellery are
                    adequately protected. We won't contact your partner until
                    the date you specify below.
                  </p>

                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First Name*"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last Name*"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email*"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Mobile Phone*"
                      />
                    </div>

                    <div class="form-group field-icon">
                      <label class="form-label">
                        Do not contact before this date
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Select a Date*"
                      />
                      <img src="/calendar.png" alt="calendar" />
                    </div>

                    <div class="form-group">
                      <label class="form-label">
                        Primary contact for your policy
                      </label>
                      <select class="form-select">
                        <option selected>Select</option>
                        <option value="1">One</option>
                      </select>
                    </div>

                    <button type="submit" class="btn btn-primary w-100 mt-2">
                      Submit Information
                    </button>
                  </form>
                </div>
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

export default CompletePartner;
