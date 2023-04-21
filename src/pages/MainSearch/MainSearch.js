
import React from 'react';

import { MainSearchFlorist, MainSearchPhotographer, MainSearchVenue } from "../../components";
import SearchResultVenueMap from '../../components/MainSearch/SearchResultVenueMap';
function MainSearch() {
    const [activePage, setActivePage] = React.useState('venue')
    const getOfferProps = {
        activePage,
        setActivePage,
    }

    return (
        <>
            {activePage === 'florist' &&
                <MainSearchFlorist {...getOfferProps} />
            }
            {activePage === 'photographer' &&
                <MainSearchPhotographer {...getOfferProps} />
            }
            {activePage === 'venue' &&
                <MainSearchVenue {...getOfferProps} />
            }
            {/* <SearchResultVenueMap /> */}
        </>

    )
}
export default MainSearch

