import ForecastNav from '../ForecastNav/ForecastNav'
import ReportItem from '../ReportItem/ReportItem'
import Search from '../Search/Search'
import './WeatherCard.css'

const WeatherCard = () => {
    return (
        <>
            <Search />
            <ReportItem />
            <ForecastNav />
        </>
    )
}

export default WeatherCard
