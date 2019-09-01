import React, { memo } from 'react';
import "./banner.scss";
import bannerImage from '../../../images/success_webimpact.png';

const Banner = () => (
    
        <div className="is-fullhd">
            <div className="banner-block">
                <div className="banner-image">
                    <img src={bannerImage} className="id-logo" alt="logo" />
                </div>
                
            </div>

            {/* <section className="hero">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">
                        Hero title
                    </h1>
                    <h2 className="subtitle">
                        Hero subtitle
                    </h2>
                    </div>
                </div>
            </section> */}
        </div>
    
);


export default memo(Banner);