import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './layout/Login';
import Layout from './layout';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Layout />} />
        </Routes>
    </BrowserRouter>
);

export default App;
