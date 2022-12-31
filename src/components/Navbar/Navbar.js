import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";

function Navbar() {
    const { sidebarVisible, setSidebarVisible } = useContext(SidebarContext);

    return (
        <nav>
            <strong>Earthquake Tracker Turkey</strong>
            <button
                type="button"
                className="tools"
                onClick={() => setSidebarVisible(!sidebarVisible)}
            >
                Tools
            </button>
        </nav>
    );
}

export default Navbar;
