// Hooks
import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Export the context
export const SidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
    // Api Url
    const apiUrl = "https://api-earthquake-turkey.cyclic.app/";
    // Sidebar control
    const [sidebarVisible, setSidebarVisible] = useState(false);
    // Refresh
    const [refresh, setRefresh] = useState(true);
    // Filters
    const [filters, setFilters] = useState({
        count: 100,
    });
    // Faults
    const [toggleFaults, setToggleFaults] = useState(false);
    // Earthquakes
    const [earthquakes, setEarthquakes] = useState([]);

    // Get earthquakes
    const getEarthquakes = async () => {
        axios.get(apiUrl)
            .then((res) => {
                setEarthquakes(res.data);
            })
            .catch((err) => {
                console.log(err);
                setEarthquakes([]);
            })
            .finally(() => {
                setRefresh(false);
            });
    };

    useEffect(() => {
        if (refresh) {
            getEarthquakes();
        }
    }, [refresh]);

    return (
        <SidebarContext.Provider value={{
            sidebarVisible, setSidebarVisible,
            refresh, setRefresh,
            filters, setFilters,
            toggleFaults, setToggleFaults,
            earthquakes, setEarthquakes,
        }}>
            {children}
        </SidebarContext.Provider>
    )
}
export default SidebarContextProvider;