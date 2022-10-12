import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { technologiesDataLoader } from '../../loaders/technologiesDataLoader';
import Technology from '../Technology/Technology';
import './Technologies.css';

const Technologies = ({ technologies }) => {


    console.log(technologies);

    return (
        <div className="technologies-container">
            <h2 className="text-danger technologies-title mb-5">Technologies</h2>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        technologies.map(technology => <Technology
                            key={technology.id}
                            technology={technology}
                        ></Technology>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Technologies;