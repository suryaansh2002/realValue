"use client";
import { useState } from "react";
import styles from "../styles/Sell.module.css";
import axios from "axios";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SellRequestForm = () => {
  let url = "https://real-value-server.vercel.app/";
  url = "http://localhost:5000/";
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    location: "",
    registrationNumber: "",
    brand: "",
    model: "",
    variant: "",
    manufactureYear: "",
    kilometers: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for compulsory fields
    const compulsoryFields = [
      "name",
      "phoneNumber",
      "location",
      "registrationNumber",
      "brand",
      "model",
      "manufactureYear",
      "kilometers",
    ];
    const missingFields = compulsoryFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return;
    }

    try {
      await axios.post(url + "api/sellRequests", formData);
      // Clear form after submission
      setShowForm(false);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        location: "",
        registrationNumber: "",
        brand: "",
        model: "",
        variant: "",
        manufactureYear: "",
        kilometers: "",
        price: "",
      });
    } catch (error) {
      console.error("Error submitting sell request:", error);
      alert("Error submitting sell request. Please try again later.");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHeading}>Sell Your Vehicle</div>

      <button
        onClick={() => setShowForm(!showForm)}
        className={styles.showForm}
      >
        Submit Your Sell Request{" "}
        {showForm ? (
          <FaChevronUp className={styles.icon} />
        ) : (
          <FaChevronDown className={styles.icon} />
        )}
      </button>
      {showForm && (
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Phone Number *</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <label>Registration Number *</label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              required
            />
            <label>Brand *</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
            <label>Model *</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
            <label>Variant</label>
            <input
              type="text"
              name="variant"
              value={formData.variant}
              onChange={handleChange}
            />
            <label>Manufacture Year *</label>
            <input
              type="number"
              name="manufactureYear"
              value={formData.manufactureYear}
              onChange={handleChange}
              required
            />
            <label>Kilometers *</label>
            <input
              type="number"
              name="kilometers"
              value={formData.kilometers}
              onChange={handleChange}
              required
            />
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      )}
      <div className={styles.steps}>
        <h4>Steps to sell your vehicle:</h4>
        <ul type="1">
          <li>- Fill the above form with all the details of your vehicle.</li>
          <li>- Wait for out executive to contact you.</li>
        </ul>
      </div>
      {showModal && (
        <>
          <div className={styles.overlay}></div>
          <div className={styles.model}>
            <h4>Thank You for submitting your car details!</h4>
            <p>Our executive will reach out to you soon!</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SellRequestForm;
