import React from 'react';
import '../assets/scss/CityCard.scss';
import { Link } from 'react-router-dom';

const CityCard = (props) => (
    <div className="col-md-4">
        <div className="card mb-3 CityCard">
            <div className='card-header'>
                <h5 className="card-title mb-0">
                    <span><img src={props.city.country_flag_url} alt='flag'/></span>
                    {props.city.name}
                </h5>
            </div>
            <div className="card-body">
                <p>{props.city.country_name}</p>
                <Link to={`/city/${props.city.id}`} className="card-text">See restaurants in {props.city.name}</Link>
            </div>
        </div>
    </div>
)

export default CityCard