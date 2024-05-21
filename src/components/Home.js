import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

const Home = () => {


    return (
        <>
            <section className="flex homeMain">

                <div className="flex homeBody">
                    <div className="flex dynamicLines" id="dynamicLines1">
                        <div className="dynamicLines__firstLine">
                            <h1 className="dynamicLines__text">We</h1>
                        </div>
                        <div className=" line antibar dynamicLines__secondLine">
                            <img className="" src="./images/Home/screen_01/01.png" alt="" srcset="" />
                        </div>
                        <div className="dynamicLines__thirdLine">
                            <h1 className="dynamicLines__text">Organize The</h1>
                        </div>
                    </div>

                    <div className="flex dynamicLines" id="dynamicLines2">
                        <div className="dynamicLines__firstLine">
                            <h1 className="dynamicLines__text">Connection</h1>
                        </div>
                        <div className="line antibar dynamicLines__secondLine">
                            <img src="./images/Home/screen_01/02.png" alt="" srcset="" />
                        </div>                    </div>

                    <div className="flex dynamicLines" id="dynamicLines3">
                        <div className="line bar dynamicLines__secondLine">
                            <img src="./images/Home/screen_02/03.png" alt="" srcset="" />
                        </div>
                        <div className="dynamicLines__firstLine">
                            <h1 className="dynamicLines__text">Between</h1>
                        </div>
                        <div className="dynamicLines__secondLine">
                            <img src="./images/Home/screen_02/04.png" alt="" srcset="" />
                        </div>
                        <div className="dynamicLines__firstLine">
                            <h1 className="dynamicLines__text">Music</h1>
                        </div>
                    </div>

                    <div className="flex dynamicLines" id="dynamicLines4">
                        <div className="dynamicLines__firstLine">
                            <h1 className="dynamicLines__text">Artist</h1>
                        </div>
                        <div className="line antibar dynamicLines__secondLine">
                            <img src="./images/Home/screen_01/05.png" alt="" srcset="" />
                        </div>
                        <div className="dynamicLines__firstLine">
                            <h1 className="dynamicLines__text">Culture</h1>
                        </div>
                        <div className="line bar dynamicLines__secondLine">
                            <img src="./images/Home/screen_02/06.png" alt="" srcset="" />
                        </div>
                    </div>

                    <div className="flex dynamicLines" id="dynamicLines5">
                        <div className="line bar dynamicLines__secondLine">
                            <img src="./images/Home/screen_01/07.png" alt="" srcset="" />
                        </div>
                        <div className="dynamicLines__firstLine">
                            <h1 className="dynamicLines__text">Art</h1>
                        </div>
                        <div className=" dynamicLines__secondLine">
                            <img src="./images/Home/screen_02/08.png" alt="" srcset="" />
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
