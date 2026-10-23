export const elapsedTime = (startDate: Date, endDate: Date | 'Present') => {
  if (endDate === 'Present') {
    endDate = new Date(Date.now());
  }

  // The first and the last month both count, as on LinkedIn.
  const months =
    (endDate.getUTCFullYear() - startDate.getUTCFullYear()) * 12 +
    endDate.getUTCMonth() -
    startDate.getUTCMonth() +
    1;

  return { years: Math.floor(months / 12), months: months % 12 };
};

const unit = (count: number, singular: string, plural: string) =>
  count === 0 ? '' : `${count} ${count === 1 ? singular : plural}`;

export const elapsedTimeString = (
  startDate: Date,
  endDate: Date | 'Present'
) => {
  const { years, months } = elapsedTime(startDate, endDate);

  return [unit(years, 'yr', 'yrs'), unit(months, 'mo', 'mos')]
    .filter(Boolean)
    .join(' ');
};
