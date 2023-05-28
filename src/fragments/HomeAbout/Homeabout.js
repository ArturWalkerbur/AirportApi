import React, {useEffect, useState} from "react";
import "./style.css";
import img1 from "../../assets/imgs/img1.jpg";
import img2 from "../../assets/imgs/img2.jpg";


function Homeabout() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('myImage');
            const elementPosition = element.offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;

            if (scrollPosition > elementPosition) {
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
            <div className="about_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about_info_wrap">
                                <h3>Airports API</h3>
                                <span className="long_dash"></span>
                                <p>The Airports API provides vital information on nearly 30,000 airports worldwide
                                    including major international airports and small regional airports.
                                    Returns a list of up to 30 airport results. Use the offset parameter to access more
                                    results if available. If your programming language is not listed in the Code Example
                                    above, you can still make API calls by using a HTTP request library written in your
                                    programming language and following the above documentation.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about_img">
                                <div className={`img_1 ${isVisible ? 'visible' : ''}`}>
                                    <img id="myImage" src={img1} alt="" />
                                </div>
                                <div className={`small_img ${isVisible ? 'visible' : ''}`}>
                                    <img id="myImage" src={img2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}


export default Homeabout;







