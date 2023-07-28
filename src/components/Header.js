import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-white">
          <div className="container">
            <Link className="navbar-brand py-0">
              <img className="logo" src="/logo.png" alt="logo" />
            </Link>

            <ul className="list-unstyled d-flex align-items-center m-0 p-0">
              <li>
                <Link type="button" class="btn btn-outline-secondary">
                  <img src="/phone.png" alt="phone" />
                </Link>
              </li>
              <li>
                <Link
                  href="true"
                  type="button"
                  class="btn btn-outline-secondary"
                >
                  Need Help <i className="fa fa-caret-down ms-2"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
