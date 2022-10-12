import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-wrapper">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-lg-4 p-4">
                        <img src="images/banner-vector-img.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 d-flex align-items-center">
                        <div className="p-5">
                            <h3 className="banner-question">Are you curious to check your skill level?</h3>
                            <h3 className="fw-normal banner-answer fw-semibold">If the answer is yes this is the write place for you to check yoour skill.</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;