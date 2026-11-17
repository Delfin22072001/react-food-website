import { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function Navbar({search, setSearch}) {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate()

  const searchForm = (extraClass = "") => (
    <form className={`search-form ${extraClass}`} role="search" onSubmit={(e) => e.preventDefault()}>
      <input type="search" placeholder="Search dishes..." aria-label="Search dishes" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button type="submit" aria-label="Search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">

        <a className="navbar-brand fs-3" href="/">
          SeaDrop
        </a>

        <div className="d-flex align-items-center order-lg-last gap-3">
          {searchForm("d-none d-lg-flex")}

          <button
            className="search-toggle d-lg-none"
            type="button"
            onClick={() => setShowSearch((s) => !s)}
            aria-label="Toggle search"
            aria-expanded={showSearch}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          {/* <div className="icons">
            <i className="fa-solid fa-cart-shopping fs-4"></i>
            <span className="cart-count"></span>
          </div> */}

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarSidebar"
            aria-controls="navbarSidebar"
            aria-label="Open navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {showSearch && searchForm("mobile w-100 d-lg-none")}

        <div className="collapse navbar-collapse d-none d-lg-flex">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className="nav-link active" onClick={() => navigate("/")}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#story">Our Story</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div
          className="offcanvas offcanvas-end d-lg-none"
          tabIndex="-1"
          id="navbarSidebar"
          aria-labelledby="sidebarTitle"
        >
          <div className="offcanvas-header bg-dark">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body bg-dark">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" onClick={() => navigate("/")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#story">Our Story</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}