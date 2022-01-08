// Hooks
import { useState, useEffect } from "react";
// Modules
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import axios from "axios";
import { nanoid } from "nanoid";
// Components
import Left from "./components/Left";
import Loading from "./components/Loading";
import Faults from "./components/Faults";
// Api Urş
const apiUrl = "https://earthquake-tracker-tr-api.herokuapp.com/";

function Map() {
    // States
    const [quakes, setQuakes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // Filters
    const [toggleFaults, setToggleFaults] = useState(false);
    const [count, setCount] = useState(100);
    const [minMagnitude, setMinMagnitude] = useState(0);
    const [maxMagnitude, setMaxMagnitude] = useState(10);

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

    // Functions for earthquake markers
    function getColor(mag) {
        if (mag < 2) {
            return "orange";
        } else if (mag < 4) {
            return "red";
        } else if (mag < 6) {
            return "brown";
        } else if (mag < 8) {
            return "purple";
        }
    }
    function getInfo(quake) {
        return `PLACE: ${quake.place} ${quake.city}\n
DATE: ${quake.date} ${quake.time}\n
MAGNITUDE: ${quake.magnitude}\n
DEPTH: ${quake.depth}km`;
    }

    return (
        <>
            <div className="row" style={{ height: "92%" }}>
                {/* Left frame for filters */}
                <Left 
                    toggleFaults={toggleFaults} setToggleFaults={setToggleFaults} 
                    setCount={setCount} 
                    minMagnitude={minMagnitude} setMinMagnitude={setMinMagnitude}
                    maxMagnitude={maxMagnitude} setMaxMagnitude={setMaxMagnitude}
                />

                {/* Main Frame for map */}
                <div className="col-md-11 map">

                    {/* Loading & Error Screen */}
                    {loading && <Loading error={error} errorMessage={errorMessage} />}

                    {/* Map */}
                    {!loading && <MapContainer
                        center={[39, 35]}
                        zoom={6}
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

                        {quakes
                            // Filter by count
                            .slice(0, count)
                            // Filter by magnitude
                            .filter((quake) => quake.magnitude >= minMagnitude && quake.magnitude <= maxMagnitude)
                            // Map to markers
                            .map((quake) => {
                                return (
                                    <CircleMarker
                                        key={nanoid()}
                                        center={[quake.latitude, quake.longitude]}
                                        pathOptions={{ color: getColor(quake.magnitude) }}
                                        radius={quake.magnitude * 5}
                                    >
                                        <Popup>{getInfo(quake)}</Popup>
                                    </CircleMarker>
                                )
                        })}
                    </MapContainer>}
                </div>
            </div>
        </>
    )
};

export default Map;
