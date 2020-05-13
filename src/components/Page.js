import React from 'react';
import './styles/Page.css';
import HeadLine from './HeadLine'
import Body from "./Body";
import Footer from "./Footer";


class Page extends React.Component {

    render() {
        return (
            <div>
                <HeadLine/>
                <Body />
                <Footer />
            </div>
        );
    }
}

export default Page