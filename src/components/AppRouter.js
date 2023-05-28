import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Airport from "../pages/Airport";
import TopAirports from "../pages/TopAirports";
function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/top_airports' element={<TopAirports />}/>
            {<Route path='/airport/:name' element={<Airport />}/>}
            {/*<Route path='/:ingredient/:time' element={<Home />}/>*/}
            <Route path ='*' element={<Home />} />
        </Routes>
    );
}

export default AppRouter;