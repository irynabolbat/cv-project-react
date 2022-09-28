import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Porthofio/Portfolio";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Theme from "./components/Theme/There";

function App() {
    return (
        <Routes>
            <Route element={<Theme/>}>
                <Route element={<Menu/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<AboutMe/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
