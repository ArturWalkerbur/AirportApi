import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import AirportStore from "./utils/AirportStore";


export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <Context.Provider value={{
        airports: new AirportStore()
    }}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context.Provider>



);
