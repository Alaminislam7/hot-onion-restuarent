import React from 'react';
import img from '../../images/Image/logo/bannerbackground.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='top-banner'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img className='bg' src={img} alt=""/>
                        
                        <div className="col-md-5 search-btn text-center">
                            <div class="col">
                                <input class="form-control form-control-md form-control-borderless" type="search" placeholder="Search topics or keywords"></input>
                            </div>
                            
                            <div class="col-auto text-right">
                                <button class="btn btn-md btn-success" type="submit">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;