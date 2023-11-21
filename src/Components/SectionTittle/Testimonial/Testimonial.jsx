
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper,SwiperSlide } from "swiper/react";
import {Rating} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [review ,setReview]=useState([])
    console.log(review)
    useEffect(()=>{
        fetch('http://localhost:5007/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <section className="my-200">
            <SectionTitle
            subHeading={"What Our Client Saying"}
            heading={"Testimonials"}
            >

            </SectionTitle>
            <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
       
        {
            review.map(reviews=> <SwiperSlide key={reviews._id} >
                <div className="my-16 mx-24 flex flex-col items-center" >
                    <Rating
                    style={{maxWidth:180}}
                    value={reviews.rating}
                    readOnly
                    />
                    <p className=" py-8">{reviews.details}</p>
                    <h3 className=" text-2xl text-orange-400">{reviews.name}</h3>
                </div>
                </SwiperSlide>)
        }
        
      </Swiper>

        </section>
    );
};

export default Testimonial;