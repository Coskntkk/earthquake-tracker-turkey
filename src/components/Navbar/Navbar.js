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
                    <i className="fa-solid fa-arrows-rotate fa-xs"></i>&nbsp;
                    Refresh
                </button>
                <button
                    type="button"
                    className="tools"
                    onClick={() => setToggleFaults(!toggleFaults)}
                >
                    <i class="fa-solid fa-grip-lines"></i>&nbsp;
                    Fault Lines
                </button>
                <button
                    type="button"
                    className="tools"
                    onClick={() => setSidebarVisible(!sidebarVisible)}
                >
                    <i className="fa-solid fa-filter fa-xs"></i>&nbsp;
                    Filter
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
