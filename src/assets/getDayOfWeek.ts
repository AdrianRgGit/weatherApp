const getDayOfWeek = (date: string) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dateObj = new Date(date);
  // NOTE: getDay es un método de las fechas para obtener el día
  const weekDay = days[dateObj.getDay()];
  return weekDay;
};

export default getDayOfWeek;
