import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/about";
import Nav from "./components/nav";

function RouterList() {
    return (
        <div>

            <BrowserRouter>
                <Nav></Nav>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/about" element={<About />}></Route>

                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default RouterList;