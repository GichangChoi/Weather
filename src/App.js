import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import React, {useState} from "react";
import "./App.css";
import Main from "./pages/main";
import Osaka from "./pages/osaka";

function App() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Navigate to={"/main"}/>}></Route>
                <Route exact path="/main" element={<Main/>}></Route>
                <Route exact path="/osaka" element={<Osaka/>}>Osaka</Route>
            </Routes>

        </Router>
    );
}

export default App;

;