import SearchResultPhotographerMap from "../components/MainSearch/SearchResultPhotographerMap"
import SearchResultVenueMap from "../components/MainSearch/SearchResultVenueMap"
import SearchResultFloristMap from "../components/MainSearch/SearchResultFloristMap"
import SearchResultVenueList from "../components/MainSearch/SearchResultVenueList"
import SearchResultPhotographerList from "../components/MainSearch/SearchResultPhotographerList"
import SearchResultFloristList from "../components/MainSearch/SearchResultFloristList"


function MainSearchResult(props) {
    const { activePage, setActivePage, searchType, setSearchType, resultType, setResultType } = props
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
            {searchType && activePage === 'venue' && resultType === 'map' &&

                <SearchResultVenueMap {...getOfferProps} />
            }

            {searchType && activePage === 'venue' && resultType === 'list' &&

                <SearchResultVenueList {...getOfferProps} />
            }

            {searchType && activePage === 'photographer' && resultType === 'map' &&
                <SearchResultPhotographerMap {...getOfferProps} />
            }

            {searchType && activePage === 'photographer' && resultType === 'list' &&
                <SearchResultPhotographerList {...getOfferProps} />
            }

            {searchType && activePage === 'florist' && resultType === 'map' &&
                <SearchResultFloristMap {...getOfferProps} />
            }

            {searchType && activePage === 'florist' && resultType === 'list' &&
                <SearchResultFloristList {...getOfferProps} />
            }
        </>

    )
}
export default MainSearchResult

