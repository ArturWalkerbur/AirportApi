import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import Airport from "../pages/Airport";
function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contactus' element={<ContactUs />}/>
            {<Route path='/airport/:name' element={<Airport />}/>}
            {/*<Route path='/:ingredient/:time' element={<Home />}/>*/}
            <Route path ='*' element={<Home />} />
        </Routes>
    );
}

export default AppRouter;