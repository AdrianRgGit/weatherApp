const forecastWeather = async () => {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=d2a92296456742b9a5481215240104&q=Valencia Spain&days=5&aqi=no&alerts=no"
    );
    const data = await response.json();
    console.log("forecast:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default forecastWeather;
