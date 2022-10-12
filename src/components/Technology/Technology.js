import React from 'react';
import './Technology.css';

const Technology = ({ technology }) => {

    const {logo, name, total} = technology;

    return (

        <div className="col">
            <div className="card">
                <img src={logo} className={`card-img-top rounded ${name === 'React' ? 'react-bg' : name === 'CSS' ? 'css-bg' : name === 'Git' ? 'github-bg' : undefined }`} alt="..." />
                <div className="card-body">
                    <h5 className="card-title technology-name">{name}</h5>
                    <p className="card-text">Total Question: {total}</p>
                    <button className="text-uppercase py-2 rounded text-white fw-semibold w-100 quiz-btn">Go to quiz</button>
                </div>
            </div>
        </div>


    );
};

export default Technology;