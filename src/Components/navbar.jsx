import React from "react";
import { UserContext } from "./context";
import { useLocation } from "react-router-dom";
function NavBar() {
  const [isHovering, setIsHovering] = React.useState(false);
  const [popperMsg, setpopperMsg] = React.useState(false);
  const location = useLocation();
  const currentLink = location.pathname;
  let ActiveLink = "activeLink";

  function showPopper(message) {
    setIsHovering(true);
    setpopperMsg(message);
  }

  function handleMouseOut() {
    setIsHovering(false);
    setpopperMsg("");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid ">
        <div className={isHovering ? "d-block popperBox" : "d-none"}>
          <h2>{popperMsg}</h2>
        </div>
        <div className="collapse navbar-collapse links" id="navbarNavAltMarkup">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className={currentLink == "/" ? ActiveLink : "navbar-item"}>
                <a
                  className="nav-link"
                  href="#/"
                  data-testid="homelink"
                  aria-label="Home"
                  onMouseOver={(event) => showPopper("Home")}
                  onMouseOut={(event) => handleMouseOut()}
                >
                  EZBank
                </a>
              </li>
              <li
                className={
                  currentLink == "/createaccount" ? ActiveLink : "navbar-item"
                }
              >
                <a
                  className="nav-link"
                  href="#/createaccount"
                  data-testid="createaccountlink"
                  aria-label="Create Account"
                  onMouseOver={(event) => showPopper("Create a Bank Account")}
                  onMouseOut={(event) => handleMouseOut()}
                >
                  Create Account
                </a>
              </li>
              <li
                className={
                  currentLink == "/deposit" ? ActiveLink : "navbar-item"
                }
              >
                <a
                  className="nav-link"
                  href="#/deposit"
                  data-testid="depositlink"
                  aria-label="Deposit"
                  onMouseOver={(event) =>
                    showPopper("Make a Deposit into your Account!")
                  }
                  onMouseOut={(event) => handleMouseOut()}
                >
                  Deposit
                </a>
              </li>
              <li
                className={
                  currentLink == "/withdraw" ? ActiveLink : "navbar-item"
                }
              >
                <a
                  className="nav-link"
                  href="#/withdraw"
                  data-testid="withdrawlink"
                  aria-label="Withdraw"
                  onMouseOver={(event) =>
                    showPopper("Make a Withdraw from your Account!")
                  }
                  onMouseOut={(event) => handleMouseOut()}
                >
                  Withdraw
                </a>
              </li>
              <li
                className={
                  currentLink == "/alldata" ? ActiveLink : "navbar-item"
                }
              >
                <a
                  className="nav-link"
                  href="#/alldata"
                  data-testid="alldatalink"
                  aria-label="Customer Data"
                  onMouseOver={(event) => showPopper("Review Customer's Data!")}
                  onMouseOut={(event) => handleMouseOut()}
                >
                  Customer Data
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
