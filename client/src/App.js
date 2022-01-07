import { useState } from "react";

import Navbar from "./components/Navbar";
import Left from "./components/Left";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
    const [toggleFaults, setToggleFaults] = useState(false);

    return (
        <>
            <Navbar />
            <div className="row" style={{height: "92%"}}>
                <div className="col-md-1 column">
                    <Left toggleFaults={toggleFaults} setToggleFaults={setToggleFaults} />
                </div>
                <div className="col-md-11 column">
                    <Map toggleFaults={toggleFaults} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
