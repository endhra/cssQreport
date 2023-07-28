import React, { Component } from "react";




export class PayAnnually extends Component {
  render() {
    return (
      <div>
        <div className="row align-items-center">
          <div className="col-12">
            <div className="card automatic-block">
              <div className="card-body">
                <p className="mb-4">
                  Please tick the boxes below if you would like us to
                  automatically renew your policy each year from next year.
                </p>
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Yes"
                    checked
                  />
                  <label className="form-check-label" for="Yes">
                    Yes, I consent to my insurance policy automatically renewing
                    each year and authorise Jewellers Loop Pty Ltd to
                    automatically debit my insurance premium due at the time of
                    renewal. I understand that I can opt-out of automatic
                    renewals at any time by contacting 1300 882 018 or &nbsp;
                    <a href="mailto:info@qreport.com.au">info@qreport.com.au</a>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="agree"
                  />
                  <label className="form-check-label" for="agree">
                    I agree to the &nbsp;
                    <a href="#">Direct Debit Service Agreement</a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

    

        
      </div>
    );
  }
}
