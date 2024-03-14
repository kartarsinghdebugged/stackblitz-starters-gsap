
// export const returnDate = (timeZone) => {
//   const currentTime = new Date().toLocaleTimeString('en-US', { timeZone });
//   return currentTime
// }

export const returnDate = (timeZone) => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    timeZone,
    hour12: false, // Use 24-hour format
    hour: '2-digit',
    minute: '2-digit',
  });

  return currentTime;
};
