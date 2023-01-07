/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Export the context
export const SidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
    // Api Url
    // const apiUrl = "https://api-earthquake-turkey.cyclic.app/";
    const apiUrl = "http://localhost:3001/api/v1/earthquakes";
    // Sidebar control
    const [sidebarVisible, setSidebarVisible] = useState(true);
    // Refresh
    const [refresh, setRefresh] = useState(true);
    // Filters
    const [filters, setFilters] = useState({
        count: 100,
        sort_by: "date",
        order: "desc",
    });
    // Faults
    const [toggleFaults, setToggleFaults] = useState(false);
    // Earthquakes
    const [earthquakes, setEarthquakes] = useState([]);

    // Get earthquakes
    const getEarthquakes = async () => {
        let query = "?";
        for (const key in filters) {
            query += `${key}=${filters[key]}&`;
        }
        axios.get(apiUrl + query)
            .then((res) => {
                setEarthquakes(res.data.data);
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
        let timer = setTimeout(() => {
            getEarthquakes();
        }, 300);
        return () => clearTimeout(timer);
    }, [refresh, filters]);

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