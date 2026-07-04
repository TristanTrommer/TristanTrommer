export const elapsedTime = (startDate: Date, endDate: Date | 'Present') => {
  if (endDate === 'Present') {
    endDate = new Date(Date.now());
  }

  let years = endDate.getUTCFullYear() - startDate.getUTCFullYear();
  let months = endDate.getUTCMonth() - startDate.getUTCMonth() + 1;

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
};

export const elapsedTimeString = (
  startDate: Date,
  endDate: Date | 'Present'
) => {
  const { years, months } = elapsedTime(startDate, endDate);

  return (
    (years != 0 ? years + ' yrs' : '') +
    ' ' +
    (months != 0 ? months + ' mos' : '')
  );
};
