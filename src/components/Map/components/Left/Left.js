import { useContext } from "react";
import { SidebarContext } from "../../../../context/sidebarContext";

function Left() {
    const { 
        filters, setFilters, 
        toggleFaults, setToggleFaults,
    } = useContext(SidebarContext);
    function handleToggle() {
        setToggleFaults(!toggleFaults);
    }

    function handleCount(e, count) {
        setFilters({
            ...filters,
            count: count,
        });
    }

    return (<>
        <div className="col-lg-3 col-md-12 column left">
            <button className="btn btn-info left-button" onClick={() => handleToggle()}>
                <i class="fa-solid fa-layer-group"></i>{" "}
                Toggle Fault Lines
            </button>

            <div className="squares">
                <label>Count of earthquakes: </label>
                <input
                    type="number"
                    name="count"
                    id="quakecount"
                    min={1}
                    max={500}
                    defaultValue={100}
                    onChange={(e) => handleCount(e, e.target.value)}
                />
            </div>
        </div>
    </>
    );
}

export default Left;
