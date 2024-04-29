"use client";
import React from "react";
import {
  FaAward,
  FaHandshake,
  FaRecycle,
  FaCar,
  FaRupeeSign,
} from "react-icons/fa";
import { BiHappyBeaming } from "react-icons/bi";

import {
  CheckOutlined,
  UserAddOutlined,
  CarOutlined,
  DollarCircleOutlined,
  SmileOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import FaqCard from "./FaqCard";

const Faq = () => {
  const faqData = [
    {
      question: "Can I test drive before I buy?",
      answer: (
        <div>
          Yes, you can book a free test drive at our showroom through the
          following line
        </div>
      ),
    },
    {
      question: "How can I buy cars from Real Value?",
      answer: (
        <div>
          Simply choose your favourite car and book a test drive at your nearest
          Real Value Showroom from{" "}
          <u>
            <a href="/buy">here</a>
          </u>
          !
        </div>
      ),
    },
    {
      question: "What are the benefits in Real Value Prime?",
      answer: (
        <div>
          Real Value Prime are a selected range of cars that have benefits like
          warranty, first party insurance, and free paper transfer.
        </div>
      ),
    },
    {
      question: "Does Real Value offer Warranty?",
      answer: (
        <div>
          Real value offers warranty on Real Value Prime cars. Generally, the
          warranty is on the engine and gearbox for a period of 1 year or next
          10,000kms, whichever comes first.
        </div>
      ),
    },
    {
      question: "Are the cars Accidental and meter Tampered?",
      answer: (
        <div>
          No, Real Value does not provide accidental or meter tampered cars.
        </div>
      ),
    },
    {
      question: "Is there a refund policy?",
      answer: (
        <div>
          Booking amount can be refunded in cases involving genuine cases for
          cancellation.
        </div>
      ),
    },
    {
      question: "Does Real Value offer Roadside Assistance?",
      answer: (
        <div>
          RSA includes Battery jumpstart, tyre puncture assistance, on-road
          minor repairs, towing assistance, emergency fuel assistance, and key
          lock-out assistance. Detailed coverage and T&Cs will be shared with
          you after service activation.
        </div>
      ),
    },
    {
      question: "What is the process of RC transfer?",
      answer: (
        <div>
          Our team will take care of the entire ownership transfer process for
          you. This will begin as soon as you purchase the car. The process and
          timeline of RC transfer may vary as per the RTO, but our team will
          handle all the paperwork and strive to get the transfer completed
          within 60-90 days after receiving all the required documents.
        </div>
      ),
    },
    {
      question: "What are the RC transfer charges?",
      answer: (
        <div>
          We charge a standard fee of Rs 5000 for facilitating the transfer of
          ownership of a car. The following additional charges may be applicable
          depending upon the availability of documents, registration address,
          transfer location, and additionally opted services.
          <br />
          NOC/CC: No Objection Certificate Charges are applicable when transfer
          from one RTO to another is required. It includes NOC Issuance from the
          Source RTO and re-registration in the destination RTO.
          <br />
          HPA: Hypothecation Addition charges are applicable if the car is taken
          on loan.
          <br />
          Road Tax: Applicable if ownership is being transferred from one state
          to another.
          <br />
          Any other additional charges applicable based on the documents
          submitted for transfer.
        </div>
      ),
    },
    {
      question: "How to change details in my insurance?",
      answer: (
        <div>
          Real Value will help you throughout the process of insurance transfer.
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            FAQ
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Please reach out to us if your queries are not answered below.
          </p>
        </div>
        <div className="">
          {faqData.map((item) => (
            <FaqCard question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
