export const getTimeFromDate = (timeString) => {
  const dateObj = new Date(timeString);
  if (dateObj instanceof Date && !isNaN(dateObj)) {
    return `${new Date("1970-01-01T" + timeString.split("T")[1]).toLocaleTimeString(
        "en-US",
        {
          timeZone: "UTC",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }
      )}`;
  }
  return ''
 
};
