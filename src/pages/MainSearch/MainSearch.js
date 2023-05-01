
import React from 'react';

import { MainSearchFlorist, MainSearchPhotographer, MainSearchVenue } from "../../components";
import SearchResultVenueMap from '../../components/MainSearch/SearchResultVenueMap';
function MainSearch() {
    const [activePage, setActivePage] = React.useState('venue')
    const [searchType, setSearchType] = React.useState(false);
    const [resultType, setResultType] = React.useState('map');
    const getOfferProps = {
        activePage,
        setActivePage,
        searchType,
        setSearchType,
        resultType,
        setResultType
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

