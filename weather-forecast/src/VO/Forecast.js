import ForecastDay from "./ForecastDay";

export default class Forecast {
    /**
     * @type {Number}
     */
    id;

    /**
     * @type {String}
     */
    city;

    /**
     * @type {ForecastDay[]}
     */
    dayItems;

    static from(apiResponse) {
        const forecast = new Forecast();
        forecast.id = apiResponse.city.id;
        forecast.city = apiResponse.city.name;

        forecast.dayItems = apiResponse.list
            .filter(
                //idx % 8 because it brings the forecast from every 3 hours, so this way we only get the results from every 24hs.
                (dayItem, idx) => idx % 8 === 0
            )
            .map((item) => ForecastDay.from(item));
        
        return forecast;
    }
}