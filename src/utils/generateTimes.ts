export const generateTimes = () => {
  const availableTimes = [];
  let currentHour = 8;
  let currentMinute = 30;

  while (!(currentHour === 23 && currentMinute === 0)) {
    const formattedTime = `${currentHour
      .toString()
      .padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
    availableTimes.push(formattedTime);

    // Increment by 30 minutes
    currentMinute += 30;
    if (currentMinute === 60) {
      currentMinute = 0;
      currentHour += 1;
    }
  }

  return availableTimes;
};
