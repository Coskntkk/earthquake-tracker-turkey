import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";

function Navbar() {
    const {
        sidebarVisible, setSidebarVisible,
        setRefresh,
        toggleFaults, setToggleFaults
    } = useContext(SidebarContext);

    return (
        <nav>
            <strong>Earthquake Tracker Turkey</strong>
            <div className="nav-buttons">
                <button
                    type="button"
                    className="tools"
                    onClick={() => setRefresh(true)}
                >
                    <i className="fa-solid fa-arrows-rotate"></i>
                    <span>&nbsp;Refresh</span>
                </button>
                <button
                    type="button"
                    className="tools"
                    onClick={() => setToggleFaults(!toggleFaults)}
                >
                    <i className="fa-solid fa-grip-lines"></i>
                    <span>&nbsp;Fault Lines</span>
                </button>
                <button
                    type="button"
                    className="tools"
                    onClick={() => setSidebarVisible(!sidebarVisible)}
                >
                    <i className="fa-solid fa-filter"></i>
                    <span>&nbsp;Filter</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
