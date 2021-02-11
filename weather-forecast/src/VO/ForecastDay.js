export default class ForecastDay {
    /**
     * @type {Number}
     */
    temp;

    /**
     * @type {Number}
     */
    feelsLike;

    /**
     * @type {Number}
     */
    tempMin;

    /**
     * @type {Number}
     */
    tempMax;

    /**
     * @type {String}
     */
    weather;

    /**
     * @type {Date}
     */
    date;

    static from(apiResponseItem) {
        const forecastDay = new ForecastDay();
        forecastDay.temp = apiResponseItem.main.temp;
        forecastDay.feelsLike = apiResponseItem.main.feels_like;
        forecastDay.tempMin = apiResponseItem.main.temp_min;
        forecastDay.tempMax = apiResponseItem.main.temp_max;
        forecastDay.weather = apiResponseItem.weather[0].description;
        forecastDay.date = new Date(apiResponseItem.dt_txt);
        return forecastDay;
    }

    getWeekDay() {
        return this.date.getDay();
    }
}