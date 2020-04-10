const LongDateFormat = (timecardDate) => {
  const dateOptions = {
    timeZone: "UTC",
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const dateFormatter = new Intl.DateTimeFormat("en-US", dateOptions);
  const dateAsFormattedString = dateFormatter.format(new Date(timecardDate));

  return dateAsFormattedString; // "JThursday, une 1, 2019"
};

export default LongDateFormat;
