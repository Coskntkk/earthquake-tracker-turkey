import Province from "./Province";

function Left({ toggleFaults, setToggleFaults, setCount, minMagnitude, 
    setMinMagnitude, maxMagnitude, setMaxMagnitude, setRefresh, setProvince }) {

    function handleToggle() {
        setToggleFaults(!toggleFaults);
    }

    function handleCount(e, count) {
        setCount(count);
    }

    return (
        <div className="col-lg-1 col-md-12 column left">

            <button className="btn btn-info left-button" onClick={() => setRefresh(true)}>Refresh</button>

            <button className="btn btn-info left-button" onClick={() => handleToggle()}>Toggle Fault Lines</button>

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

            <div className="squares">
                <label>Min magnitude: </label>
                <input
                    type="number"
                    name="count"
                    id="minmagnitude"
                    min={0}
                    max={maxMagnitude}
                    defaultValue={0}
                    step={0.1}
                    onChange={(e) => setMinMagnitude(e.target.value)}
                />
            </div>

            <div className="squares">
                <label>Max magnitude: </label>
                <input
                    type="number"
                    name="count"
                    id="maxmagnitude"
                    min={minMagnitude}
                    max={10}
                    defaultValue={10}
                    step={0.1}
                    onChange={(e) => setMaxMagnitude(e.target.value)}
                />
            </div>

            <Province setProvince={setProvince} />
        </div>
    );
}

export default Left;
