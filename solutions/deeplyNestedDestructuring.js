const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Binds low and high from today to lowToday and highToday
const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;

// Binds an object `yesterday`
const {
  yesterday: { low, high },
} = LOCAL_FORECAST;
