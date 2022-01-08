function Left({ toggleFaults, setToggleFaults, setCount, minMagnitude, setMinMagnitude, maxMagnitude, setMaxMagnitude }) {

    function handleToggle() {
        setToggleFaults(!toggleFaults);
    }

    function handleCount(e, count) {
        setCount(count);
    }

    return (
        <div className="col-md-1 column left">
            <button className="btn btn-info" onClick={() => handleToggle()}>Toggle Fault Lines</button>

            <div className="squares">
                <label>Count of last earthquakes:</label>
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
                <label>Min magnitude:</label>
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
                <label>Max magnitude:</label>
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
        </div>
    );
}

export default Left;
