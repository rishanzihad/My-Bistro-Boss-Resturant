import React from 'react';
import Banner from './Banner';
import Category from '../../Category/Category';
import PopularMenu from './PopularMenu';
import Feature from '../Feature/Feature';
import Testimonial from '../../Components/SectionTittle/Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Feature></Feature>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;