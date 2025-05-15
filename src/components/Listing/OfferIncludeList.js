function OfferIncludeList(props) {
    const { includeOffering } = props
    console.log('includeOffering', includeOffering)

    return (
        <>
            {
                includeOffering.map((box, index) => {
                    return (
                        <span className='quantity-add-box m-0 p-0'>
                            <p className='paddin-lr p-bottom-margin'><img src="/images/icons/checked-gray.svg" alt=""  /> {box.title} </p>
                        </span>
                    );
                })}
        </>
    );
}

export default OfferIncludeList


