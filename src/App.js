import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './layout/Login';
import SignUp from "./layout/SignUp";
import DemiosApp from './layout';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<DemiosApp />} />
        </Routes>
    </BrowserRouter>
);

export default App;
