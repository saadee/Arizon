import React from 'react'
import PropTypes from 'prop-types'
import img from './img.png'
import './About.css'

function About(props) {
    return (
        <div className='aboutMainContainer'>

            <div className='aboutContainer'>
                <div className='aboutImgContainer'>
                    <img className='aboutImg' src={img} alt="" />
                </div>
                <div className='aboutTextContainer'>
                    <h1 className='aboutH1'>
                        DAILY FUSION WEAR
                        FOR FASHION
                        CONSCIOUS WOMEN
</h1>
                    <p className='aboutp'>
                        Our products are minimal yet experimental, functional yet versatile and most importantly affordable.
                        For fresh aesthetics and timeless elegance Lulusar is your only choice.
                    </p>
                </div>

            </div>
            <div>
                <hr className='abouthr' />
            </div>

            <div className='aboutContainer'>

                <div className='aboutTextContainer ' id='aboutTextContainer2'>
                    <h1 className='aboutH1' id='aboutH1-2'>
                        WE CONVERT IDEAS
                        INTO REALITY
</h1>
                    <p className='aboutp'>
                        We are fast fashion brand that is data driven & makes designs as per what our customers want.
                        We focus on the future, work on expansion and strive to be the best for you. You demand, we create
                    </p>
                </div>
                <div className='aboutImgContainer'>
                    <img className='aboutImg' src={img} alt="" />
                </div>

            </div>


        </div>
    )
}

About.propTypes = {

}

export default About

