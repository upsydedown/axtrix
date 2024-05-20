import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <>
            <section className="homeMain">
                <div className="flex homeBody">
                    <div className="flex dynamicLines" id="dynamicLines1">
                        <div className="dynamicLines__firstLine">
                            <h1 className="dynamicLines__text">We</h1>
                        </div>
                        <div className="dynamicLines__secondLine">
                            <img src="./images/Home/1st screen 01/01.png" alt="" srcset="" />
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
                            <img src="./images/Home/1st screen 01/02.png" alt="" srcset="" />
                        </div>
                    </div>

                    <div className="flex dynamicLines" id="dynamicLines3">
                        <div className="dynamicLines__secondLine">
                            <img src="./images/Home/1st screen 01/03.png" alt="" srcset="" />
                        </div>
                        <div className="dynamicLines__firstLine">
                            <h1 className="dynamicLines__text">Between</h1>
                        </div>
                        <div className="dynamicLines__secondLine">
                            <img src="./images/Home/1st screen 01/04.png" alt="" srcset="" />
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
                            <img src="./images/Home/1st screen 01/05.png" alt="" srcset="" />
                        </div>
                        <div className="dynamicLines__firstLine">
                            <h1 className="dynamicLines__text">Culture</h1>
                        </div>
                        <div className="dynamicLines__secondLine">
                            <img src="./images/Home/1st screen 01/06.png" alt="" srcset="" />
                        </div>
                    </div>

                    <div className="flex dynamicLines" id="dynamicLines5">
                        <div className="dynamicLines__secondLine">
                            <img src="./images/Home/1st screen 01/07.png" alt="" srcset="" />
                        </div>
                        <div className="dynamicLines__firstLine">
                            <h1 className="dynamicLines__text">Art</h1>
                        </div>
                        <div className="dynamicLines__secondLine">
                            <img src="./images/Home/1st screen 01/08.png" alt="" srcset="" />
                        </div>
                        <div className="dynamicLines__firstLine">
                            <h1 className="dynamicLines__text"> & Collections</h1>
                        </div>
                    </div>

                </div>

            </section >
        </>
    );
};

export default Home;
