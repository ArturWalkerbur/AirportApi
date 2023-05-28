import React from 'react';
import Head from "../components/Head/Head";
import Footer from "../components/Footer/Footer";
import TopAirportsComponent from "../components/TopAirportsComponent/TopAirportsComponent";

function TopAirports(props) {
    return (

        <div>
            <Head />
            <TopAirportsComponent />
            <Footer />
        </div>

    );
}

export default TopAirports;