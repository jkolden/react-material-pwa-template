import moment from "moment";

function getWeekDays(weekStart) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(moment(weekStart).add(i, "days").toDate());
  }
  return days;
}

function getWeekRange(date) {
  return {
    from: moment(date).startOf("week").toDate(),
    to: moment(date).endOf("week").toDate(),
  };
}

const DefaultDate = () => {
  let BDOStartDate = localStorage.getItem("BDOStartDate");

  if (BDOStartDate) {
    return getWeekDays(getWeekRange(BDOStartDate).from);
  } else {
    BDOStartDate = new Date(
      "Sun Apr 05 2020 00:00:00 GMT-0700 (Pacific Daylight Time)"
    );
    return getWeekDays(getWeekRange(BDOStartDate).from);
  }
};

export default DefaultDate;
