import React from "react";
import './styles/HeadLine.css'

class HeadLine extends React.Component{
    openNav = () => {
        document.getElementById("mySidenav").style.width = "250px"
        document.getElementById("main").style.marginLeft = "250px"
    }

    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0"
        document.getElementById("main").style.marginLeft= "45%"
    }

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <i className="far fa-info-circle" id="btn_2"></i>
                <h1>Tempus</h1>

                <div id="menu" >
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={ () => this.closeNav() }>&times;</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>

                    <div id="main">
                        <span onClick={ () => this.openNav() }>&#9776;</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadLine