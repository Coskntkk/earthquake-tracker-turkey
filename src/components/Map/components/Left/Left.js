import { useContext } from "react";
import { SidebarContext } from "../../../../context/sidebarContext";

function Left() {
    const {
        filters, setFilters
    } = useContext(SidebarContext);

    function handleChange(e) {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    }

    function handleResetFilters() {
        setFilters({
            count: 100,
            sort_by: "date",
            order: "desc",
        });
    }

    return (<>
        <div className="col-lg-3 col-md-12 column left">
            <div className="mb-12 d-flex justify-content-center">
                <button className="tools" onClick={handleResetFilters}> Reset Filters </button>
            </div>
            <hr />
            <div className="mb-3">
                <label htmlFor="customRange1" className="form-label">Count of earthquakes</label>
                <input type="range" className="form-range range" id="customRange1" min="1" max="500" step="1" value={filters.count} onChange={handleChange} name="count" />
                <div className="count">{filters.count}</div>
            </div>
            <hr />
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Sort by</label>
                <select className="form-select" onChange={handleChange} name="sort_by">
                    <option value="date">Date</option>
                    <option value="magnitude">Magnitude</option>
                    <option value="depth">Depth</option>
                </select>
            </div>
        </div>
    </>
    );
}

export default Left;
