// Utility functions for date calculations

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export const calculatePeriod = (startMonth, startYear, endMonth, endYear, isCurrent) => {
  const startDate = new Date(startYear, startMonth - 1);
  const endDate = isCurrent ? new Date() : new Date(endYear, endMonth - 1);
  
  // Calculate total months
  const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                     (endDate.getMonth() - startDate.getMonth());
  
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  // Format the period string
  const startMonthName = monthNames[startMonth - 1];
  const endMonthName = isCurrent ? 'Current' : monthNames[endMonth - 1];
  const endYearDisplay = isCurrent ? '' : ` ${endYear}`;
  
  let durationText = '';
  if (years > 0 && months > 0) {
    durationText = `(${years} Year${years > 1 ? 's' : ''} ${months} Month${months > 1 ? 's' : ''})`;
  } else if (years > 0) {
    durationText = `(${years} Year${years > 1 ? 's' : ''})`;
  } else if (months > 0) {
    durationText = `(${months} Month${months > 1 ? 's' : ''})`;
  }
  
  return `${startMonthName} ${startYear} – ${endMonthName}${endYearDisplay} ${durationText}`.trim();
};
