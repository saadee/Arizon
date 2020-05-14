import React from "react";
import PropTypes from "prop-types";
import Carousel from '../Carousel/Carousel'

function HomePage(props) {
    return (
        <div style={{ margin: ' auto ', width: '100%', maxHeight: '450px', height: '450px',border:'1px solid red' }}>
            <Carousel />
        </div>
    );
}

HomePage.propTypes = {};

export default HomePage;
