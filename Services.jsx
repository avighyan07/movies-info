import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGljfGVufDB8fDB8fHww" alt="Item1" />
          <p className="legend">Laptop Work</p>
        </div>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1666273190872-1ad5f89e39f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="Item3" />
          <p className="legend"> Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;