import React, { memo } from 'react';

const Banner = () => (
    
        <div classNameName="container">
            <section className="hero">
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
            </section>
        </div>
    
);


export default memo(Banner);