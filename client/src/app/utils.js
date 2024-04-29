export const formatAmount = (amount) => {
  // Convert the amount to a number
  const num = parseFloat(amount);

  // Divide the amount by 100,000 to convert to lakhs
  const lakhs = num / 100000;

  // Format the lakhs amount with commas
  const formattedAmount = lakhs.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });

  // Return the formatted amount with 'Lakh' appended
  return `₹${formattedAmount} Lakh`;
};

export const EMICalcLite = (principal, rate, tenure) => {
  const principalAmount = parseFloat(principal);
  const rateOfInterest = parseFloat(rate);
  const tenureMonths = parseFloat(tenure);

  if (principalAmount && rateOfInterest && tenureMonths) {
    const rate = rateOfInterest / 100 / 12;
    const emi =
      (principalAmount * rate * Math.pow(1 + rate, tenureMonths)) /
      (Math.pow(1 + rate, tenureMonths) - 1);

    return Math.round(emi);
  }
};

export const AmountWithCommas = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
