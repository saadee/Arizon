import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "antd";

function HomePage(props) {
    return (
        <div style={{ margin: '3rem auto ', width: '90%',border:'1px solid red' }}>
            <Carousel effect="fade">
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem sapiente aspernatur voluptate doloremque magnam optio nam fugiat voluptatibus, accusantium excepturi unde distinctio! Dignissimos vero, doloremque quae at iure quisquam reprehenderit.
                </div>
                <div>
                    ndsjdjjjsvd
                </div>
                <div>
                    dnvjndv nf nf
                </div>
                <div>
                    duvhjvndj
                </div>
            </Carousel>
        </div>
    );
}

HomePage.propTypes = {};

export default HomePage;
