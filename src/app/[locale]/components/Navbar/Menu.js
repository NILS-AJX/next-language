import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

import { Fragment } from "react";
const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src="assets/images/logos/logo_principal.png"
                alt="Logo"
                title="Logo"
              />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix">
          
          <ul className="navigation clearfix">
            <li className="dropdown">
              <a href="/" onClick={() => active("home")}>
                Inicio
              </a>
              {/* <ul style={activeSubMenu("home")}>
                <li>
                  <Link href="/">IT Company</Link>
                </li>
                <li>
                  <Link href="index2">IT Solutions</Link>
                </li>
                <li>
                  <Link href="index3">IT Services</Link>
                </li>
                <li>
                  <Link href="index4">IT Agency</Link>
                </li>
              </ul> */}
              {/* <div className="dropdown-btn" onClick={() => active("home")}>
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
            <li className="dropdown">
              <Link href="" onClick={() => active("services")}>
                Servicios
              </Link>
              {/* <ul style={activeSubMenu("services")}>
                <li>
                  <Link href="services">Services One</Link>
                </li>
                <li>
                  <Link href="services2">Services Two</Link>
                </li>
                <li>
                  <Link href="service-details">service details</Link>
                </li>
              </ul> */}
              {/* <div className="dropdown-btn" onClick={() => active("services")}>
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
            {/* <li className="dropdown">
              <a href="#" onClick={() => active("Project")}>
                Project
              </a>
              <ul style={activeSubMenu("Project")}>
                <li>
                  <Link href="project-grid">Project Grid</Link>
                </li>
                <li>
                  <Link href="project-masonry">Project Masonry.</Link>
                </li>
                <li>
                  <Link href="project-details">Project Details</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("Project")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li> */}
            <li >
              <Link href="/">¿Quienes somos?</Link>
              {/*  <ul style={activeSubMenu("shop")}>
                <li>
                  <Link href="shop">shop grid</Link>
                </li>
                <li>
                  <Link href="product-details">product details</Link>
                </li>
                <li>
                  <Link href="cart">cart page</Link>
                </li>
                <li>
                  <Link href="checkout">checkout</Link>
                </li>
              </ul> */}

            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("blog")}>
                ¿Como funciona?
              </a>
              {/* <ul style={activeSubMenu("blog")}>
                <li>
                  <Link href="blog">blog standard</Link>
                </li>
                <li>
                  <Link href="blog-details">blog details</Link>
                </li>
              </ul> */}
              {/* <div className="dropdown-btn" onClick={() => active("blog")}>
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
            {/* <li className="dropdown">
              <a href="#" onClick={() => active("pages")}>
                pages
              </a>
              <ul style={activeSubMenu("pages")}>
                <li>
                  <Link href="about">About us</Link>
                </li>
                <li>
                  <Link href="contact">Contact us</Link>
                </li>
                <li>
                  <Link href="team">Team</Link>
                </li>
                <li>
                  <Link href="faqs">faqs</Link>
                </li>
                <li>
                  <Link href="pricing">Pricing Plan</Link>
                </li>
                <li>
                  <Link href="404">404 error</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("pages")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li> */}
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};

const DeskTopMenu = () => {
  return (
    <nav className="main-menu navbar-expand-lg desktop-menu ">
      <div className="navbar-header">
        <div className="mobile-logo">
          <Link href="/">
            <img
              src="assets/images/logos/logo_principal.png"
              alt="Logo"
              title="Logo"
            />
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          <li className="dropdown">
            <a href="/">Inicio</a>
            {/* <ul>
              <li>
                <Link href="/">IT Company</Link>
              </li>
              <li>
                <Link href="index2">IT Solutions</Link>
              </li>
              <li>
                <Link href="index3">IT Services</Link>
              </li>
              <li>
                <Link href="index4">IT Agency</Link>
              </li>
            </ul> */}
            {/* <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>
          <li className="dropdown">
            <a href="#">Servicios</a>
            {/* <ul>
              <li>
                <Link href="services">Services One</Link>
              </li>
              <li>
                <Link href="services2">Services Two</Link>
              </li>
              <li>
                <Link href="service-details">service details</Link>
              </li>
            </ul> */}
            {/* <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>
          {/* <li className="dropdown">
            <a href="#">Project</a>
            <ul>
              <li>
                <Link href="project-grid">Project Grid</Link>
              </li>
              <li>
                <Link href="project-masonry">Project Masonry.</Link>
              </li>
              <li>
                <Link href="project-details">Project Details</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li> */}
          <li className="dropdown">
            <Link href="/aboutus">¿Quienes Somos?</Link>
            {/*  <ul>
              <li>
                <Link href="shop">shop grid</Link>
              </li>
              <li>
                <Link href="product-details">product details</Link>
              </li>
              <li>
                <Link href="cart">cart page</Link>
              </li>
              <li>
                <Link href="checkout">checkout</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>
          {/* <li className="dropdown">
            <a href="#">blog</a>
            <ul>
              <li>
                <Link href="blog">blog standard</Link>
              </li>
              <li>
                <Link href="blog-details">blog details</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li> */}
          <li className="dropdown">
            <a href="#">¿Como funciona?</a>
            {/* <ul>
              <li>
                <Link href="about">About us</Link>
              </li>
              <li>
                <Link href="contact">Contacto</Link>
              </li>
              <li>
                <Link href="team">Team</Link>
              </li>
              <li>
                <Link href="faqs">faqs</Link>
              </li>
              <li>
                <Link href="pricing">Pricing Plan</Link>
              </li>
              <li>
                <Link href="404">404 error</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
