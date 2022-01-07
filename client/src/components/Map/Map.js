import { useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import Loading from "./components/Loading";
import Faults from "./components/Faults";
import axios from "axios";
import { nanoid } from "nanoid";
const apiUrl = "https://earthquake-tracker-tr-api.herokuapp.com/";

function Map({toggleFaults}) {
    const [quakes, setQuakes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        axios.get(apiUrl)
            .then((res) => {
                setQuakes(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err.message);
            });
    }, []);

    // useEffect(() => {
    //     console.log(quakes);
    // }, [quakes]);

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
DEPTH: ${quake.depth}km`;
    }

    return (
        <div className="map">

            {loading && <Loading error={error} errorMessage={errorMessage} />}

            {!loading && <MapContainer
                center={[39, 35]}
                zoom={7}
            // scrollWheelZoom={false}
            // doubleClickZoom={false}
            // dragging={false}
            // zoomSnap={false}
            // zoomDelta={false}
            // trackResize={false}
            // touchZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {toggleFaults && <Faults />}

                {quakes.map((quake) => {
                    return (
                        <CircleMarker
                            key={nanoid()}
                            center={[quake.latitude, quake.longitude]}
                            pathOptions={{ color: getColor(quake.magnitude) }}
                            radius={quake.magnitude * 5}
                        >
                            <Popup>{getInfo(quake)}</Popup>
                        </CircleMarker>
                    );
                })}
            </MapContainer>}
        </div>
    );
}

export default Map;
