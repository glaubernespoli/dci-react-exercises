import Forecast from "../VO/Forecast";

class OpenWeatherMapService {
    requestForecast = (location, setForecast) => {
        if (location) {
            fetch(this.#buildURL(location))
              .then((res) => res.json())
              .then((res) => setForecast(Forecast.from(res)))
              .catch((e) => console.log(e));
      }
  };

  #buildURL = (location) => {
    const url = new URL(process.env.REACT_APP_OWM_API_URL);
    url.search = new URLSearchParams({
      lat: location.latitude,
      lon: location.longitude,
      units: "metric",
      appid: process.env.REACT_APP_OWM_API_KEY,
    });

    return url;
  };
}

const openWeatherMapService = new OpenWeatherMapService();
export default openWeatherMapService;