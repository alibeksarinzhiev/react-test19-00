import React from 'react';
import Banner from './Banner/Banner';
import NewCollection from './NewCollection/NewCollection';

const Home = ({clothes}) => {
    return (
        <>
        <Banner/>
        <NewCollection clothes={clothes}/>
        </>
    );
};

export default Home;