import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { DataContext } from "../context/dataContext";
import LoginButtons from "../utility/elements/btn";
import "../utility/sass/Navbar.scss";
import { Link } from "react-router-dom";

function NavbarApp(props) {
  const ctx = useContext(DataContext);

  const currencyHandler = (currency) => {
    ctx.setDefaultCurrency(currency);
  };
  const langHandler = (currency) => {
    ctx.setDefaultLang(currency);
  };
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <div
          className="container d-flex flex-column flex-lg-row align-items-start"
        >
          <div className="d-flex flex-row">
            <div>
              <Navbar.Brand className="fs-4 fw-bold text-white"><Link className="text-white" to='/'>Booking.com</Link></Navbar.Brand>
            </div>
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
          </div>
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  title={ctx.defaultCurrency}
                  id="basic-nav-dropdown"
                >
                  {ctx.currency.map((items) => (
                    <NavDropdown.Item>
                      <div className="d-flex justify-content-between align-items-center">
                        <span onClick={() => currencyHandler(items.currency)}>
                          {items.currency}
                        </span>
                        <span>{items.country}</span>
                      </div>
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <NavDropdown title={ctx.defaultLang} id="basic-nav-dropdown">
                  {ctx.lang.map((items) => (
                    <NavDropdown.Item>
                      <div className="d-flex justify-content-between align-items-center">
                        <span onClick={() => langHandler(items.lang)}>
                          {items.lang}
                        </span>
                        <img
                          className="flag"
                          src={items.flag}
                          alt="flag"
                        />
                      </div>
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <div className="d-flex justify-content-evenly">
                  <span className="ms-2"></span>
                  <LoginButtons refrence={'register'}>Register</LoginButtons>
                  <span className="mx-2"></span>
                  <LoginButtons refrence={'signin'}>Sign in</LoginButtons>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarApp;
