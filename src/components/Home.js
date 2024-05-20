import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(true); // Initially open
    const navigate = useNavigate();

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleNavigate = (event) => {
        // Check if clicked outside specific content area (e.g., modal content)
        if (event.target.classList.contains('modal-content')) return;
        navigate('/about'); // Replace with your actual next page path
    };
    return (
        <>
            <section className="homeMain">
                <div className={`modal ${isOpen ? 'active' : ''}`} onClick={handleNavigate}>
                    <div className="modal-content">
                        <div className="flex homeBody">
                            <div className="flex dynamicLines" id="dynamicLines1">
                                <div className="dynamicLines__firstLine">
                                    <h1 className="dynamicLines__text">We</h1>
                                </div>
                                <div className="dynamicLines__secondLine">
                                    <img src="" alt="" srcset="" />
                                </div>
                                <div className="dynamicLines__thirdLine">
                                    <h1 className="dynamicLines__text">Organize The</h1>
                                </div>
                            </div>

                            <div className="flex dynamicLines" id="dynamicLines2">
                                <div className="dynamicLines__firstLine">
                                    <h1 className="dynamicLines__text">Connection</h1>
                                </div>
                                <div className="dynamicLines__secondLine">
                                    <img src="" alt="" srcset="" />
                                </div>
                            </div>

                            <div className="flex dynamicLines" id="dynamicLines3">
                                <div className="dynamicLines__secondLine">
                                    <img src="" alt="" srcset="" />
                                </div>
                                <div className="dynamicLines__firstLine">
                                    <h1 className="dynamicLines__text">Between</h1>
                                </div>
                                <div className="dynamicLines__secondLine">
                                    <img src="" alt="" srcset="" />
                                </div>
                                <div className="dynamicLines__firstLine">
                                    <h1 className="dynamicLines__text">Music</h1>
                                </div>
                            </div>

                            <div className="flex dynamicLines" id="dynamicLines4">
                                <div className="dynamicLines__firstLine">
                                    <h1 className="dynamicLines__text">Artist</h1>
                                </div>
                                <div className="dynamicLines__secondLine">
                                    <img src="" alt="" srcset="" />
                                </div>
                                <div className="dynamicLines__firstLine">
                                    <h1 className="dynamicLines__text">Culture</h1>
                                </div>
                                <div className="dynamicLines__secondLine">
                                    <img src="" alt="" srcset="" />
                                </div>
                            </div>

                            <div className="flex dynamicLines" id="dynamicLines5">
                                <div className="dynamicLines__secondLine">
                                    <img src="" alt="" srcset="" />
                                </div>
                                <div className="dynamicLines__firstLine">
                                    <h1 className="dynamicLines__text">Art</h1>
                                </div>
                                <div className="dynamicLines__secondLine">
                                    <img src="" alt="" srcset="" />
                                </div>
                                <div className="dynamicLines__firstLine">
                                    <h1 className="dynamicLines__text"> & Collections</h1>
                                </div>
                            </div>

                        </div>
                        {/* <button onClick={handleClose}>Close Modal</button> */}
                    </div>
                </div>


            </section >
        </>
    );
};

export default Home;
