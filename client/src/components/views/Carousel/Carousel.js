import React from "react";
import { Carousel } from "antd";
import PropTypes from "prop-types";

import img1 from "./Dummy/ban.jpg";
function Carousels(props) {
    return (
        <div>
            <Carousel effect="fade" autoplay>
                <div >
                    <img src={img1} alt="" style={{width:'100%',height:'450px'}}/>
                </div>
                {/* <div>ndsjdjjjsvd</div>
                <div>dnvjndv nf nf</div>
                <div>duvhjvndj</div> */}
            </Carousel>
        </div>
    );
}

Carousel.propTypes = {};

export default Carousels;
