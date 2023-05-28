import React, {useState} from 'react';
import "./style.css";
import Homeabout from "../../fragments/HomeAbout/Homeabout";
import ListofAirport from "../../fragments/List/ListofAirport";
import SearchFragment from "../../fragments/SearchFragment/SearchFragment";


function HomeContent() {

    const [data, setData] = useState('Air');

    const handleDataChange = (newData) => {
        setData(newData);
    };


    return (
        <div className="homecontent">
            <Homeabout/><br />
            <SearchFragment  onDataChange={handleDataChange} /> <br />
            <ListofAirport searchProps={data}/>
        </div>


    );
}


export default HomeContent;