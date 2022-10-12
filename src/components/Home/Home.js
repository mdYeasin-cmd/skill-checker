import React from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Technologies from '../Technologies/Technologies';

const Home = () => {

    const technologies = useLoaderData();
    

    return (
        <div>
            <Banner></Banner>
            <Technologies technologies={technologies}></Technologies>
        </div>
    );
};

export default Home;