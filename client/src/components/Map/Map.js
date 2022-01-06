import { useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import axios from "axios";
const apiUrl = "http://localhost:3000/";

function Map() {
    const [quakes, setQuakes] = useState([]);
    useEffect(() => {
        axios.get(apiUrl).then((res) => {
            setQuakes(res.data);
        });
    }, []);

    useEffect(() => {
        console.log(quakes);
    }, [quakes]);

    function getColor(mag) {
        if (mag < 2) {
            return "orange";
        } else if (mag < 4) {
            return "red";
        } else if (mag < 6) {
            return "brown";
        } else if (mag < 8) {
            return "black";
        }
    }

    function getInfo(quake) {
        return `PLACE: ${quake.place} ${quake.city}\n
DATE: ${quake.date} ${quake.time}\n
MAGNITUDE: ${quake.magnitude}\n
DEPTH: ${quake.depth}`;
    }

    return (
        <div className="map">
            <MapContainer
                center={[39, 35]}
                zoom={7}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                closePopupOnClick={false}
                dragging={false}
                zoomSnap={false}
                zoomDelta={false}
                trackResize={false}
                touchZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {quakes.map((quake) => {
                    return (
                        <CircleMarker
                            center={[quake.latitude, quake.longitude]}
                            pathOptions={{ color: getColor(quake.magnitude) }}
                            radius={quake.magnitude * 5}
                        >
                            <Popup>{getInfo(quake)}</Popup>
                        </CircleMarker>
                    );
                })}
            </MapContainer>
        </div>
    );
}

export default Map;
