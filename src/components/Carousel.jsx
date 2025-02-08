import React, { useEffect, useRef } from 'react';

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={carouselRef}
      className="carousel flex overflow-x-scroll no-scrollbar space-x-4"
    >
      <img src="image1.jpg" alt="Item 1" className="w-full" />
      <img src="image2.jpg" alt="Item 2" className="w-full" />
      <img src="image3.jpg" alt="Item 3" className="w-full" />
      {/* Duplicate items for looping */}
      <img src="image1.jpg" alt="Item 1" className="w-full" />
      <img src="image2.jpg" alt="Item 2" className="w-full" />
    </div>
  );
};

export default Carousel;
