import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {dictionaryImg} from "../../assets/dictionary";
import img from "../../assets/imgs/img1.jpg";

function TopList(props) {
    const {airports} = useContext(Context)

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);


    return (
        <div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="section_title text-center mb-50">
                        <div className="item-list">

                            {airports.airports.map((airport) => {
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

export default TopList;