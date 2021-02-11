export default class Location {
    constructor(lat, long) {
        this.lat = lat;
        this.long = long;
    }

    static fromGeoLocation(geoLocation) {
        return new Location(geoLocation.latitude, geoLocation.longitude);
    }

    static fromPlacesAPI(result) {
        return new Location();
    }
}