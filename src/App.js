import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Footer from "./components/Footer";
import SidebarContextProvider from "./context/sidebarContext";
function App() {
    return (
        <SidebarContextProvider>
            <Navbar />
            <Map />
            <Footer />
        </SidebarContextProvider>
    );
}

export default App;
