"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import carImage from "../images/car-image.png";
import Image from "next/image";
import FeaturedCard from "./components/FeaturedCard";

const FeaturedCars = () => {
  const [carData, setCarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make API call.
    const fetchFeaturedCars = async () => {
      try {
        const response = await fetch(
          "https://real-value-server.vercel.app/api/listings/featured",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setCarData(result);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedCars();
  }, []);

  return (
    <section className="py-10 !bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-5">
            Featured Cars
          </h2>
          <span className="text-lg text-gray-500 font-medium block mb-2">
            Check out our best!
          </span>
        </div>

        {error && <p>Error, please try again...</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={32}
            navigation
            scrollbar={{ draggable: true }}
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 32 },
              768: { slidesPerView: 2, spaceBetween: 32 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
          >
            {carData &&
              carData.map((car) => (
                <SwiperSlide key={car._id} style={{ paddingBottom: "40px" }}>
                  <FeaturedCard car={car} />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default FeaturedCars;
