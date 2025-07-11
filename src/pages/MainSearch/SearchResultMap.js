
import React from 'react';

import { MainSearchFlorist, MainSearchPhotographer, MainSearchVenue } from "../../components";
function SearchResultMap() {
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
        </>

    )
}
export default SearchResultMap

