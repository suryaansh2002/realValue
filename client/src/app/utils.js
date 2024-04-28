export const formatAmount = (amount) => {
  // Convert the amount to a number
  const num = parseFloat(amount);

  // Divide the amount by 100,000 to convert to lakhs
  const lakhs = num / 100000;

  // Format the lakhs amount with commas
  const formattedAmount = lakhs.toLocaleString(undefined, { maximumFractionDigits: 2 });

  // Return the formatted amount with 'Lakh' appended
  return `₹${formattedAmount} Lakh`;
};
