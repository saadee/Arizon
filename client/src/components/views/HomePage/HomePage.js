import React from "react";
import PropTypes from "prop-types";
import Carousel from '../Carousel/Carousel'

function HomePage(props) {
    return (
        <div style={{ margin: ' auto ', width: '100%', maxHeight: '400px', height: '400px' }}>
            <Carousel />
        </div>
    );
}

HomePage.propTypes = {};

export default HomePage;
