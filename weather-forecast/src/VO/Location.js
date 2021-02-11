export default class Location {
    constructor(lat, long) {
        this.latitude = lat;
        this.longitude = long;
    }

    static fromGeoLocation(geoLocation) {
        console.log(geoLocation)
        return new Location(
          geoLocation.coords.latitude,
          geoLocation.coords.longitude
        );
    }

    static fromPlacesAPI(result) {
        return new Location();
    }
}