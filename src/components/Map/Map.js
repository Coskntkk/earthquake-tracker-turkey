// Hooks
import { useState, useEffect, useContext } from "react";
// Context
import { SidebarContext } from "../../context/sidebarContext";
// Modules
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import axios from "axios";
import { nanoid } from "nanoid";
// Components
import Left from "./components/Left";
import Loading from "./components/Loading";
import Faults from "./components/Faults";
// Api Urş
const apiUrl = "https://api-earthquake-turkey.cyclic.app/";

function Map() {
    const { sidebarVisible, toggleFaults, earthquakes, refresh } = useContext(SidebarContext);
    // States
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // useEffect(() => {
    //     if (refresh) {
    //         axios.get(apiUrl)
    //             .then((res) => {
    //                 setQuakes(res.data);
    //                 setLoading(false);
    //             })
    //             .catch((err) => {
    //                 setError(true);
    //                 setErrorMessage(err.message);
    //             });
    //         setRefresh(false);
    //     }
    // }, [refresh]);

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
                {/* Main Frame for map */}
                <div className={`col-lg-${sidebarVisible ? "9" : "12"} col-md-12 map`}>

                    {/* Loading & Error Screen */}
                    {refresh && <Loading error={error} errorMessage={"hata"} />}

                    {/* Map */}
                    {!refresh && <MapContainer
                        center={[39, 35]}
                        zoom={6}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {toggleFaults && <Faults />}

                        {earthquakes.map((quake) => {
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
                {sidebarVisible && <Left />}
            </div>
        </>
    )
};

export default Map;
