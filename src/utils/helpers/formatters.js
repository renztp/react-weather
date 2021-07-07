export function formatDay(fullYear) {
  let properDate = fullYear.replaceAll("-", ",");
  let d = new Date(properDate);
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getDayOfWeek = dayNames[d.getDay()];
  const getDayOfMonth = d.getDate();

  return `${getDayOfWeek}, ${getDayOfMonth}`;
}
