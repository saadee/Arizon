import React from "react";
import { Carousel } from "antd";
import PropTypes from "prop-types";
import img1 from "./Dummy/ban.jpg";
import img2 from "./Dummy/1920.jpg";
import img3 from "./Dummy/1921.jpg";

function Carousels(props) {
    return (
        <div>
            <Carousel effect="fade" autoplay>
                <div>
                    <img src={img1} alt="" style={{ width: "100%", height: "550px" }} />

                </div>{" "}
                <div>
                    <img src={img2} alt="" style={{ width: "100%", height: "550px" }} />
                </div>{" "}
                <div>
                    <img src={img3} alt="" style={{ width: "100%", height: "550px" }} />
                </div>
            </Carousel>
        </div>
    );
}

Carousel.propTypes = {};

export default Carousels;
