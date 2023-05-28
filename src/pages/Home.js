import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Head from "../components/Head/Head";
import HomeContent from "../components/HomeContent/HomeContent";
import Footer from "../components/Footer/Footer";
import "../assets/css/style.css";
function Home(props) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        setIsVisible(true);
        const handleScroll = () => {
            const element = document.getElementById('welcome');
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div>
            <div className="bghead">
                <Head />
                <div id="welcome" className={`text ${isVisible ? 'visible' : ''}`}>
                    <b>\/\/</b>elcome aboard
                </div>
            </div><br/>
            <HomeContent /><br/><br/>
            <Footer />
        </div>
    );
}

export default Home;