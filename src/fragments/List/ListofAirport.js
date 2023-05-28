import React, {useEffect, useRef, useState} from 'react';
import "./style.css";
import axios from 'axios';
import img from "../../assets/imgs/img1.jpg";
import {MY_APP_KEY} from "../../utils/const";
import {dictionaryImg} from '../../assets/dictionary';

function ListofAirport(props) {

    const [query, setQuery] = useState(props.searchProps);
    const [res, setRes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isNew, setIsNew] = useState(true);
    console.log(query);
    console.log(props.searchProps);
    if(query !== props.searchProps){
        setIsNew(true);
        setQuery(props.searchProps);
    }


    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        if(isNew){
            const fetchData = async () => {
                try {
                    const apiKey = MY_APP_KEY;
                    const url = `https://api.api-ninjas.com/v1/airports?name=${query}`;

                    const response = await axios.get(url, {
                        headers: {
                            'X-Api-Key': apiKey,
                            'Content-Type': 'application/json',
                        },
                    });
                    setIsNew(false);
                    setRes(response.data);
                    setIsLoading(false);
                    console.log(response.data);
                } catch (error) {
                    console.error('Error: ', error.response.data);
                }
            };

            fetchData();
        }

            }, [isNew]);


    useEffect(() => {
        setIsVisible(true);
    }, []);

    if (isLoading) {
        return <div className="loading"><b>L</b>oading...</div>;
    }


    return (
        <div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="section_title text-center mb-50">
                        <h1>
                            Popular airports
                        </h1>

                        <br />

                        <div className="item-list">

                            {res.map((airport) => {
                                const randomIndex = Math.floor(Math.random() * dictionaryImg.length);
                                const randomImg = dictionaryImg[randomIndex];
                                return(
                                    <div className={`item ${isVisible ? 'visible' : ''}`}>
                                        <a href={'/airport/' + airport.name}><img src={randomImg} alt="" /></a>
                                        <div className="item-content">
                                            <div className="main-content">
                                                <div className="meta-category">
                                                    <p>{airport.name}</p>
                                                </div>
                                                <a href={'/airport/' + airport.name}><h4>{airport.region}</h4></a>
                                                <ul className="post-info">
                                                    <li><a href={'/airport/' + airport.name}>{airport.city}</a></li>
                                                    <li><a href={'/airport/' + airport.name}>{airport.country}</a></li>
                                                    <li><a href={'/airport/' + airport.name}>{airport.icao}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>


                    </div>
                </div>
            </div>



        </div>
    );
}

export default ListofAirport;