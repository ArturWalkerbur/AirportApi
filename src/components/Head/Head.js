import React, {useEffect, useState} from 'react';
import "./style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";



function Head() {

    return (
        <div>
            <header>
                <div className={`header-area`}>
                    <div id="sticky-header" className="main-header-area">
                        <div className="container-fluid p-0">
                            <div className="header_bottom_border">
                                <div className="row align-items-center no-gutters">
                                    <div className="col-xl-3 col-lg-2">
                                        <div className="logo">
                                            <a className="navbar-brand" href="/"><h2><em><b>/\</b></em>irport API</h2></a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-7">
                                        <div className="main-menu  d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><a className="active" href="/">home</a></li>
                                                    <li><a href="/about">About API</a></li>
                                                    <li><a href="/top_airports">TopAirports</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        </div>


    );
}


export default Head;