
import React from 'react';
import SearchFilter from './SearchFilter';

function MainSearchVenue(props) {
    const { activePage, setActivePage, searchType, setSearchType, resultType, setResultType } = props
    const getOfferProps = {
        activePage,
        setActivePage,
        searchType,
        setSearchType,
        resultType,
        setResultType
    }
    let activeClass = "container-fluid px-md-5  img-bg custom-search"
    if (searchType) {
        activeClass = 'container-fluid px-md-5  custom-search';

    }
    return (
        <div className={activeClass}>
            {!searchType &&
                <div div className="row paddin-lr">
                    <div className='row paddin-lr mt-2'>
                        <h2 className='heading_first newClass'>Let's plan your dream wedding</h2>
                    </div>
                </div>
            }
            <SearchFilter type={'venue'}  {...getOfferProps} />
        </div>

    )
}
export default MainSearchVenue

