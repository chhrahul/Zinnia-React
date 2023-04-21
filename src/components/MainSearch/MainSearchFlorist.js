

import React from 'react';
import FloristIcon from '../Icons/FloristIcon.js';
import VenueIcon from '../Icons/VenueIcon.js';
import PhotographerIcon from '../Icons/PhotographerIcon.js';
import SearchFilter from './SearchFilter';
function MainSearchFlorist(props) {
    const { activePage, setActivePage } = props
    const handleClickActivePage = (data) => {
        setActivePage(data)
    }
    return (
        <div className="container-fluid px-md-5  mt-3 img-bg custom-search" style={{ 'paddingRight': 0, 'paddingLeft': 0 }} >
            <div className="row paddin-lr">
                <div className='row paddin-lr mt-2'>
                    <h2 className='heading_first newClass'>Let's plan your dream wedding</h2>

                </div>
            </div>
            <div className="row paddin-lr hover-div mb-3">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <ul className="d-flex p-0">
                        <li class="list_info" onClick={() => handleClickActivePage('venue')}><VenueIcon />Venue</li>
                        <li class="list_info" onClick={() => handleClickActivePage('photographer')}><PhotographerIcon />Photographer</li>
                        <li class="list_info active" onClick={() => handleClickActivePage('florist')}><FloristIcon />Florist</li>
                    </ul>
                </div>
            </div>
            <SearchFilter type={'florist'} />
        </div >

    )
}
export default MainSearchFlorist

