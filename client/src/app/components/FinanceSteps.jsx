import React from 'react'
import {
  FaAddressCard,
  FaFileAlt,
  FaHandshake,
  FaMoneyCheckAlt,
} from 'react-icons/fa'

const FinanceSteps = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-8">
        <h2 className="mb-4 lg:mb-8 text-3xl font-extrabold tracking-tight leading-tight text-white md:text-4xl">
          Steps to Sell your Car
        </h2>
        <h3 className="mb-8 lg:mb-16 text-xl tracking-tight leading-tight text-gray-400 md:text-2xl">
          Simple, easy and intuitive.
        </h3>
        <div className="grid grid-cols-1 gap-10 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 dark:text-gray-400">
          <div className="flex flex-col">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-gray-900">
              <FaAddressCard size={30} />
            </div>
            <div className="text-white text-2xl mt-4 font-semibold">
              1. Share basic details:
              <ol className="mt-2 text-left text-gray-400 text-lg list-inside">
                <li>a. Aadhar Card</li>
                <li>b. PAN Card</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-gray-900">
              <FaFileAlt size={30} />
            </div>
            <div className="text-white text-2xl mt-4 font-semibold">
              2. Pre-Approval of Loan
              <ol className="mt-2 text-left text-gray-400 text-lg list-inside">
                <li>a. Book the car of your choice</li>
                <li>b. Share bank statement</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-gray-900">
              <FaHandshake size={30} />
            </div>
            <div className="text-white text-2xl mt-4 font-semibold">
              3. Loan Offer
              <ol className="mt-2 text-left text-gray-400 text-lg list-inside">
                <li>a. Customize EMI</li>
                <li>b. Physical Verification and KYC</li>
                <li>c. Loan Agreement</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-gray-900">
              <FaMoneyCheckAlt size={30} />
            </div>
            <div className="text-white text-2xl mt-4 font-semibold">
              4. Loan Disbursement
              <ol className="mt-2 text-left text-gray-400 text-lg list-inside">
                <li>b. We will contact our finance partners</li>
                <li>c. Your loan should be credited in 3-4 business days.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinanceSteps
