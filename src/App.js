import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {

  const [ isOpen, setIsOpen ] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNavigate = (event) => {
    if (event.target.classList.contains('modal-content')) return;
    navigate('/about');
  };

  const location = useLocation();
  const [ backgroundColor, setBackgroundColor ] = useState('white'); // Default color
  const [ logo, setLogo ] = useState('../images/logo_light.png'); // Default logo

  useEffect(() => {
    const updateStyles = () => {
      switch (location.pathname) {
        case '/Home':
          setBackgroundColor('#FFF4DF');
          setLogo('../images/logo_light.png');
          break;
        case '/about':
          setBackgroundColor('green');
          setLogo('../images/logo_dark.png');
          break;
        // Add more cases for other pages
        default:
          setBackgroundColor('#FFF4DF');
          setLogo('../images/logo_light.png');
      }
    };

    updateStyles();
  }, [ location ]);

  return (
    <>
      <section className="appMain" >
        <div className="appLogo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="appBody" >
          {/* <div className="NavigationPanel">
            <Navbar />
          </div> */}

          <div className={`modal ${isOpen ? 'active' : ''}`} onClick={handleNavigate}>
            <div className="modal-content">
              <div className="PagesPanel">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </div>
              {/* <button onClick={handleClose}>Close Modal</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
