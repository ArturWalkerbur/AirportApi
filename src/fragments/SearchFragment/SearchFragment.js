import React, {useState} from 'react';
import "./style.css";

function SearchFragment({ onDataChange }) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        onDataChange(inputValue);
    };

    return (
        <div>
            <div className="container-search">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-content">
                            <div className="row-content">
                                    <input className="input-group" value={inputValue} onChange={handleInputChange} placeholder="ex. London Heathrow Airport"/>

                                <div className="main-button">
                                    <button onClick={handleButtonClick}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchFragment;