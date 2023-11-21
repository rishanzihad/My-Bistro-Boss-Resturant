import React from 'react';
import SectionTitle from '../../Components/SectionTittle/SectionTitle';
import featuredImg from "../../assets/home/featured.jpg"
import './feature.css'
const Feature = () => {
    return (
        <div className='featured-item text-white bg-fixed pt-8 my-20'>
            <SectionTitle subHeading={"Check It Out"} heading={"Featured Item"}></SectionTitle>
           <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36' >
           <div  >
                <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10'>
                <p>Aug 20, 2029</p>
                <p className='uppercase'> Where I get Some?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas animi voluptate consequatur. Accusamus laudantium repudiandae repellat dolorum enim est perspiciatis?</p>
                <button className='btn btn-outline bottom-0 border-b-4 mt-4'>Order Now</button>
            </div>
           </div>
        </div>
    );
};

export default Feature;