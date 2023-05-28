import React, {useEffect, useState} from 'react';
import {MY_APP_KEY} from "../../utils/const";
import axios from "axios";
import {useParams} from "react-router-dom";
import "./style.css"
import img from "../../assets/imgs/img1.jpg";
import {dictionaryImg} from "../../assets/dictionary";
import ErrorBoundary from "../../components/Errors/ErrorBoundary";

function AirportInfo(props) {

    const { name } = useParams();
    const [res, setRes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = MY_APP_KEY;
                const url = `https://api.api-ninjas.com/v1/airports?name=${name}`;

                const response = await axios.get(url, {
                    headers: {
                        'X-Api-Key': apiKey,
                        'Content-Type': 'application/json',
                    },
                });
                setRes(response.data[0]);
                setIsLoading(false);
                console.log(response.data[0]);
            } catch (error) {
                console.error('Error: ', error.response.data);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div className="loading"><b>L</b>oading...</div>;
    }
    const randomIndex = Math.floor(Math.random() * dictionaryImg.length);
    const randomImg = dictionaryImg[randomIndex];
    return (

        <ErrorBoundary>
            {res ? (
                <div>
                    <div className="airportinfo">
                        <div className="itemContainer">
                            <h1>{res.name}</h1>

                            <div className="fullinfo">
                                <h3>Full information</h3>
                                <h5><b>Country: </b> {res.country}</h5>
                                <h5><b>City:</b> {res.city}</h5>
                                <h5><b>Region:</b> {res.region}</h5>
                                <h5><b>Timezone:</b> {res.timezone}</h5>
                                <div className="codec">
                                    <h5><b>iata:</b> {res.iata}</h5>
                                    <h5><b>icao:</b> {res.icao}</h5>
                                </div>

                                <h5><b>lat/long:</b> {res.latitude}/{res.longitude}</h5>
                            </div>

                        </div>

                        <img src={randomImg} alt="" />

                    </div>
                </div>
            ) : (
                <div className="loading"><b>L</b>oading...</div>
            )}
        </ErrorBoundary>


    );
}

export default AirportInfo;