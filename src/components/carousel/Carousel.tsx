import React from "react";
import styles from "./Carousel.module.css";
import {Image, Carousel as AntCarousel} from "antd";
import CarouselImage1 from "../../assets/images/carousel_1.jpg";
import CarouselImage2 from "../../assets/images/carousel_2.jpg";
import CarouselImage3 from "../../assets/images/carousel_3.jpg";

export const Carousel = () => {
    return(
        <AntCarousel autoplay>
            <Image src={CarouselImage1}/>
            <Image src={CarouselImage2}/>
            <Image src={CarouselImage3}/>
        </AntCarousel>
    )

}