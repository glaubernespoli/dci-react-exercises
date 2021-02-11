import Location from "../VO/Location";

class PlacesAPIService {
  getCurrentLocation = (updateLocation) =>
    navigator.geolocation.getCurrentPosition((pos) =>
      updateLocation(Location.fromGeoLocation(pos))
    );

  setSelectedLocation = (latLong, updateLocation) =>
    updateLocation(Location.fromPlacesAPI(latLong));
}

const placesAPIService = new PlacesAPIService();
export default placesAPIService;