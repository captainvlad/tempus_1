import React, {useState} from "react";
import "./styles/slider.scss"
import Img from "./Img";
import pic_2 from "./pics/pic_2.png"

function Slider() {
    let slideArr = [
        <Img src={pic_2}/>,
        <Img src={pic_2}/>,
        <Img src={pic_2}/>,
        <Img src={pic_2}/>,
    ]
    const [x, setX] = useState(0);

    const goLeft = () => {
        setX(x + 100)
        x === 0 ? setX( -100 * (slideArr.length - 1) ) : setX(x + 100)
    };
    const goRight = () => {
        setX(x - 100)
        x === -100 * (slideArr.length - 1) ? setX(0) : setX (x - 100)
    };

    return (<div className="slider">
            {
                slideArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={ { transform: `translateX(${x}%)` } }>
                            {item}
                        </div>
                    );
                })}
            <button id="goLeft" onClick={goLeft}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
}

export default Slider;