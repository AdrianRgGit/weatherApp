const weatherApi = async () => {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=d2a92296456742b9a5481215240104&q=Valencia Spain&aqi=no"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default weatherApi;
