import { useState, useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import faults from "./faults.json";

function Faults() {
    const [faultsData, setFaultsData] = useState([]);

    useEffect(() => {
        setFaultsData(faults.features);
    }, []);

    return (
        <>
            {faultsData.map((fault) => (
                <GeoJSON key={fault.properties.id} data={fault} />
            ))}
        </>
    );
}

export default Faults;
