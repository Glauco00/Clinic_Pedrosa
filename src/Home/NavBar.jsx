import { useState, useEffect } from "react";
import logo from "../assets/arte.png";
import logoDark from "../assets/arte2.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function scrollToFooter(e) {
  e.preventDefault();
  const footerSection = document.getElementById("contato");
  if (footerSection) {
    footerSection.scrollIntoView({ behavior: "smooth" });
  }
}

function handleNavClick(e, sectionId) {
  e.preventDefault();
  if (sectionId === "contato") {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  } else {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleToggle = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);
  const toggleDarkMode = () => setDarkMode((d) => !d);

  return (
    <>
      <nav className={`navbar navbar-expand-lg mb-4 ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
        style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box', margin: 0, left: 0, right: 0, borderRadius: 0, padding: 0 }}>
        <div className="container-fluid" style={{ paddingLeft: 0, paddingRight: 0, margin: 0, width: '100%', maxWidth: '100%' }}>
          <a className="navbar-brand" href="#banner" onClick={closeMenu}>
            <img
              src={darkMode ? logoDark : logo}
              alt="logo"
              style={{ height: "70px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#banner" onClick={e => handleNavClick(e, "banner")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre" onClick={e => handleNavClick(e, "sobre")}>Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servicos" onClick={e => handleNavClick(e, "servicos")}>Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato" onClick={e => handleNavClick(e, "contato")}>Contato</a>
              </li>
            </ul>
            <div className="w-100 d-lg-none d-flex justify-content-center my-3">
              <div className="theme-switch" onClick={toggleDarkMode} aria-label="Alternar tema" role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
                <div className={`switch-track${darkMode ? ' switch-dark' : ''}`}> 
                  <div className={`switch-thumb${darkMode ? ' switch-thumb-dark' : ''}`}></div>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-flex align-items-center ms-3">
              <div className="theme-switch" onClick={toggleDarkMode} aria-label="Alternar tema" role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
                <div className={`switch-track${darkMode ? ' switch-dark' : ''}`}> 
                  <div className={`switch-thumb${darkMode ? ' switch-thumb-dark' : ''}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
      </div>
    </>
  );
}

export default NavBar;
