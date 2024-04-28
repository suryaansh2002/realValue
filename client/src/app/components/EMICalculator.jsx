'use client';
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const EMICalculator = () => {
  const [principalAmount, setPrincipalAmount] = useState(100000);
  const [rateOfInterest, setRateOfInterest] = useState(9);
  const [tenure, setTenure] = useState(24);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateEmi = () => {
    const principal = parseFloat(principalAmount);
    const rate = parseFloat(rateOfInterest) / 100 / 12;
    const months = parseFloat(tenure);

    if (principal && rate && months) {
      const emi =
        (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
      setEmi(emi.toFixed(2));

      const totalPayment = emi * months;
      setTotalPayment(totalPayment.toFixed(2));

      const totalInterest = totalPayment - principal;
      setTotalInterest(totalInterest.toFixed(2));
    } else {
      setEmi(0);
      setTotalPayment(0);
      setTotalInterest(0);
    }
  };

  const pieChartData = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        label: 'Amount in rupees',
        data: [principalAmount, totalInterest],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    calculateEmi();
  }, []);

  const pieOptions = {
    maintainAspectRatio: false,
    aspectRatio: 1,
  };

  return (
    <section className='py-24'>
      {/* Heading on the left */}
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mb-16'>
          <h2 className='text-4xl text-center font-bold text-gray-900 mb-5'>Finance</h2>
          <span className='text-lg text-gray-500 font-medium text-center block mb-2'>
            Everything you need to know financially before buying/selling a car.
          </span>
        </div>
        <div className='flex lg:flex-row flex-col justify-center'>
          <div className='p-4'>
            <div className='bg-white p-4 rounded-lg shadow-lg mb-4'>
              <div className='text-center text-2xl font-bold mb-4'>EMI Calculator</div>
              <div className='flex flex-col space-y-4'>
                <div className='flex items-center justify-between'>
                  <label htmlFor='principalAmount'>Principal Amount:</label>
                  <input
                    id='principalAmount'
                    type='number'
                    value={principalAmount}
                    onChange={(e) => {
                      setPrincipalAmount(e.target.value);
                      calculateEmi();
                    }}
                    className='border rounded px-2 py-1 w-1/2'
                  />
                  <input
                    type='range'
                    min='10000'
                    max='1000000'
                    step='10000'
                    value={principalAmount}
                    onChange={(e) => {
                      setPrincipalAmount(e.target.value);
                      // Recalculate EMI
                      calculateEmi();
                    }}
                    className='w-1/2 ml-5'
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <label htmlFor='rateOfInterest'>Rate of Interest:</label>
                  <input
                    id='rateOfInterest'
                    type='number'
                    value={rateOfInterest}
                    onChange={(e) => {
                      setRateOfInterest(e.target.value);
                      calculateEmi();
                    }}
                    className='border rounded px-2 py-1 w-1/2'
                  />
                  <input
                    type='range'
                    min='0'
                    max='20'
                    step='0.1'
                    value={rateOfInterest}
                    onChange={(e) => {
                      setRateOfInterest(e.target.value);
                      calculateEmi();
                    }}
                    className='w-1/2 ml-5'
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <label htmlFor='tenure'>Tenure (in months):</label>
                  <input
                    id='tenure'
                    type='number'
                    value={tenure}
                    onChange={(e) => {
                      setTenure(e.target.value);
                      calculateEmi();
                    }}
                    className='border rounded px-2 py-1 w-1/2'
                  />
                  <input
                    type='range'
                    min='1'
                    max='128'
                    step='1'
                    value={tenure}
                    onChange={(e) => {
                      setTenure(e.target.value);
                      calculateEmi();
                    }}
                    className='w-1/2 ml-5'
                  />
                </div>
                <button
                  onClick={calculateEmi}
                  className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                >
                  Calculate EMI
                </button>
              </div>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-lg'>
              <div className='text-xl font-bold mb-2'>EMI Details:</div>
              <div className='flex justify-between mb-2'>
                <div>₹EMI:</div>
                <div className='font-bold'>{emi}</div>
              </div>
              <div className='flex justify-between mb-2'>
                <div>Total Interest:</div>
                <div>{totalInterest}</div>
              </div>
              <div className='flex justify-between'>
                <div>Total Payment:</div>
                <div>{totalPayment}</div>
              </div>
            </div>
          </div>
          <div className='p-4'>
            <div className='bg-white p-4 rounded-lg shadow-lg'>
              <div className='text-xl font-bold mb-2'>Interest vs Principal:</div>
              <div style={{ height: '416px' }}>
                <Pie data={pieChartData} options={pieOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
