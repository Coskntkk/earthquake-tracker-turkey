class Earthquake {
    constructor(
        date,
        time,
        latitude,
        longitude,
        depth,
        magnitude,
        place,
        city
    ) {
        this.date = date;
        this.time = time;
        this.latitude = latitude;
        this.longitude = longitude;
        this.depth = depth;
        this.magnitude = magnitude;
        this.place = place;
        this.city = city;
    }
}

module.exports = Earthquake;
