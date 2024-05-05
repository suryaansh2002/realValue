'use client'
import React from 'react'
import FaqCard from './FaqCard'

const Faq = ({ FAQs, title }) => {
  return (
    <section className=" bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl lg:text-4xl tracking-tight font-extrabold text-white">
            {title} FAQ's
          </h2>
          <p className=" text-lg lg:text-xl text-gray-400">
            Please reach out to us if your queries are not answered below.
          </p>
        </div>
        <div className="">
          {FAQs.map((item) => (
            <FaqCard
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
