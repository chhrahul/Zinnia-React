

import React from 'react'


const ResultTab = (props) => {
    const { activePage, setActivePage, searchType, setSearchType, resultType, setResultType, first,
        second, type } = props
    const handleClickActiveTab = (data) => {
        setResultType(data)
    }
    return (
        <>
            <div className={!type ? "row mb-3 mt-2 paddin-lr" : "row mb-3 mt-2 paddin-lr px-md-5"}>
                <div className="col-lg-12 col-md-12 col-sm-12 venue-top ">
                    <ul className="d-flex p-0">
                        <li class={resultType === 'map' ? 'list_info active' : 'list_info'} onClick={() => handleClickActiveTab('map')}>
                            {!type &&
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                                    <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM7.5 9.5C6.12 9.5 5 8.38 5 7C5 5.62 6.12 4.5 7.5 4.5C8.88 4.5 10 5.62 10 7C10 8.38 8.88 9.5 7.5 9.5Z" fill="#505267" />
                                </svg>
                            }
                            {first}</li>
                        <li class={resultType === 'list' ? 'list_info active' : 'list_info'} onClick={() => handleClickActiveTab('list')}>
                            {!type &&
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                                    <path d="M0.5 6H2.5V4H0.5V6ZM0.5 10H2.5V8H0.5V10ZM0.5 2H2.5V0H0.5V2ZM4.5 6H18.5V4H4.5V6ZM4.5 10H18.5V8H4.5V10ZM4.5 0V2H18.5V0H4.5Z" fill="#505267" />
                                </svg>
                            }

                            {second}</li>
                    </ul>
                </div>
            </div >

        </>
    )
}

export default ResultTab