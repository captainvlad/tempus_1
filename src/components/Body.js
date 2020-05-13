import React from "react";
import './styles/Body.css'
import Slider from "./Slider";


import data from "./data";

class Body extends React.Component{
    render() {
        return (
            <div id="block_main">
                <Slider/>
            </div>
        );
    }
}

export default Body