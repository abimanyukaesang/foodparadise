import React from 'react'
import Logo from "../assets/images/logo.png";
import '../assets/scss/ImageAndWelcome.scss';


const ImageAndWelcome = () => (
    <div className='main-banner'>
        <div className='banner-masking'>
            <div className='valign-banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <img className='brand' src={Logo} alt='logo'></img>
                            <h4 className="card-title">The Easiest Way to Find Restaurants and Food</h4>
                            <p>You can grab information about restaurants, cafees, cuisines with just a few clicks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ImageAndWelcome;