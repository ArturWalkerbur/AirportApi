import React from 'react';
import "./style.css"
import TopList from "../../fragments/TopList/TopList";
function TopAirportsComponent(props) {
    return (
        <div>
            <div className="topTitle"><h1>Top Airports</h1></div>
            <TopList />
        </div>
    );
}

export default TopAirportsComponent;