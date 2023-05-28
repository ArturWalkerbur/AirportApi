import React from 'react';
import {useParams} from "react-router-dom";
import Head from "../components/Head/Head";
import Footer from "../components/Footer/Footer";
import AboutAPI from "../components/About/AboutAPI";

function About(props) {



    return (
        <div>
            <Head />
            <AboutAPI />
            <Footer />
        </div>
    );
}

export default About;