import React from 'react';
import "./portfolio.scss";
import webimpactimg from "../../../images/Webimpact_React.png";
import webimpacticon from "../../../images/webimpact_icon.png";


const Portfolio = () => (
    <div className="portfolio-wrap is-fullhd">
            <div className="container">
                <h1 className="title">Portfolio</h1>
                <h2 className="sub-title">Projects</h2>

                <div className="columns is-desktop">
                    <div className="column">
                      <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src={webimpactimg} alt="Webimpact" />
                                </figure>
                            </div>
                            <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                            <img src={webimpacticon} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">Webimpact</p>
                                            <p className="subtitle is-6">Reactjs</p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        React Single page application
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="column">
                      <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src={webimpactimg} alt="Webimpact" />
                                </figure>
                            </div>
                            <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                            <img src={webimpacticon} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">Webimpact</p>
                                            <p className="subtitle is-6">Reactjs</p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        React Single page application
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="column">
                      <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src={webimpactimg} alt="Webimpact" />
                                </figure>
                            </div>
                            <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                            <img src={webimpacticon} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">Webimpact</p>
                                            <p className="subtitle is-6">Reactjs</p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        React Single page application
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="column">
                      <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src={webimpactimg} alt="Webimpact" />
                                </figure>
                            </div>
                            <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                            <img src={webimpacticon} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">Webimpact</p>
                                            <p className="subtitle is-6">Reactjs</p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        React Single page application
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>


                
            </div>
    </div>

);

export default Portfolio;