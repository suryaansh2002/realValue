"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import carImage from "../images/car-image.png";
import Image from "next/image";
import { formatAmount, AmountWithCommas, EMICalcLite } from "./utils";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

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
    <section className="py-10">
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
                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image
                      className="w-full"
                      src={car.images[0]}
                      width={300}
                      height={300}
                      alt={`${car.brand} ${car.model}`}
                    />

                    <div className="md:mb-0 md:pb-0 px-6 py-4 align-top  justify-between">
                      <div className="font-bold text-xl mb-2  w-[80%] inline-block">
                        {car.brand} {car.model}
                        <span className="text-gray-900 xs:text-sm ml-2  inline-block font-light text-base ">
                          {car.variant}
                        </span>
                      </div>
                      <div className="text-gray-700 font-semibold text-base inline-block">
                        {car.year}
                      </div>
                    </div>

                    <div className="mt-2 ml-6 ">
                      <div className="text-gray-800 font-bold text-lg mb-2 inline-block w-[65%]">
                        {formatAmount(car.price)}
                      </div>
                      <div className="text-green-600 text-basetranslate-0  inline-block">
                        EMI ₹{AmountWithCommas(EMICalcLite(car.price, 10, 36))}
                      </div>
                    </div>

                    <div className="px-6 pt-2 pb-4 flex flex-wrap">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {car.kmDriven}km
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {car.fuelType}
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {toTitleCase(car.transmissionType)}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default FeaturedCars;
