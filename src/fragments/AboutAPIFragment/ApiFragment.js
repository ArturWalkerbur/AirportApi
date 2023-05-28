import React from 'react';
import "./style.css";
import img from "../../assets/imgs/imgAbout.JPG";
import img1 from "../../assets/imgs/imgAbout1.JPG";
import img2 from "../../assets/imgs/imgAbout2.JPG";

function ApiFragment(props) {
    return (
        <div className="aboutContainer">
            <div className="aboutTitle"><p>Airport API<br /> With the support of Api Ninjas</p></div>
            <br />
            <div className="description">
                <h2>Airports API</h2>
                <div className="apiDescription">
                    <p>The Airports API provides vital information on nearly 30,000 airports worldwide including major
                    international airports and small regional airports. If your programming language is not listed in
                    the Code Example above, you can still make API calls by using a HTTP request library written in your
                    programming language and following the above documentation.</p>
                    <img src={img} alt="" />
                </div>

            </div>
            <br />
            <br />
            <br />
            <div className="description">
                <h2>Api Ninjas</h2>
                <p>Serving over 20 million requests every month, Api Ninjas have condensed the positive feedback from
                    api users into what Api Ninjas call the three Q's.<br />An API is only as good as its documentation.
                    That's why Api Ninjas provide sample requests and responses, code snippets in different programming
                    langauges, and live demos for each API.</p>
                <br />
                <br />
                <div className="galeryAbout">
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>

                </div>
                <br />
                <br />

            </div>

        </div>
    );
}

export default ApiFragment;