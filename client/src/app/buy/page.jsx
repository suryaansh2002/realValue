"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import FeaturedCard from "../components/FeaturedCard";

export default function Buy() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState({});
  let url = "https://real-value-server.vercel.app/";
  // url = 'http://localhost:5000/'

  const fetchAllListings = async () => {
    try {
      const response = await axios.get(url + "api/listings");
      if (response.data) {
        setListings(response.data);
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("filters")) {
    }
    fetchAllListings();
  }, []);
  return (
    <div>
      {listings && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8 px-8">
          {listings.map((car) => (
            <FeaturedCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}
