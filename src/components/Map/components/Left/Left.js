import { useContext } from "react";
import { SidebarContext } from "../../../../context/sidebarContext";

function Left() {
    const { 
        filters, setFilters
    } = useContext(SidebarContext);

    function handleCount(e, count) {
        setFilters({
            ...filters,
            count: count,
        });
    }

    return (<>
        <div className="col-lg-3 col-md-12 column left">
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
