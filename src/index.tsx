import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Page from "./Page";
import NoPage from "./NoPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="about" />} /> {/* Redirect / to /about */}
                <Route path="/about" element={<Page page="about" />} />
                <Route path="/store" element={<Page page="store" />} />
                <Route path="/admin" element={<Page page="admin" />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
