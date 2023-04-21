
import React from 'react';
import FloristIcon from '../Icons/FloristIcon';
import VenueIcon from '../Icons/VenueIcon';
import PhotographerIcon from '../Icons/PhotographerIcon';
import SearchFilter from './SearchFilter';

function MainSearchVenue(props) {
    const { activePage, setActivePage } = props
    const getOfferProps = {
        activePage,
        setActivePage,
    }

    return (

        <div className="container-fluid px-md-5  mt-3 img-bg custom-search">
            <SearchFilter type={'venue'}  {...getOfferProps} />
        </div>

    )
}
export default MainSearchVenue

