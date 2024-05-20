import React from "react";

const About = () => {
    return (
        <>
            <section className="about">
                <div className="aboutBody">
                    <div className="aboutBody_LeftContainer">
                        <div className="aboutBody_LeftContainer_CaraouselBody">

                        </div>
                    </div>
                    <div className="aboutBody_RightContainer">
                        <div className="aboutBody_RightContainer_Top">
                            <h2>Explore your first event</h2>
                        </div>
                        <div className="aboutBody_RightContainer_Mid">
                            <div className="aboutBody_RightContainer__Event">
                                <h1>Event Name</h1>
                                <div className="aboutBody_RightContainer__Event__datetime">
                                    <span className="aboutBody_RightContainer__Event__datetime1">Venue</span><span className="aboutBody_RightContainer__Event__datetime2">04/3/2024</span><span className="aboutBody_RightContainer__Event__datetime3">@19:00</span>
                                </div>
                                <p></p>
                            </div>
                        </div>
                        <div className="aboutBody_RightContainer_Bottom">
                            <h2>Artist Lineup</h2>
                            <div className="aboutBody_RightContainer_Bottom__ArtistLineup">
                                <img src="" alt="" srcset="" />
                                <img src="" alt="" srcset="" />
                                <img src="" alt="" srcset="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>Main
        </>
    );
};

export default About;
