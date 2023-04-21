
import React from 'react';
import SearchFilter from './SearchFilter';
function MainSearchPhotographer(props) {
    const { activePage, setActivePage } = props
    const getOfferProps = {
        activePage,
        setActivePage,
    }

    return (
        <div className="container-fluid px-md-5  mt-3 img-bg custom-search" style={{ 'paddingRight': 0, 'paddingLeft': 0 }} >
            <SearchFilter type={'photographer'} {...getOfferProps} />
        </div>
    )
}
export default MainSearchPhotographer

