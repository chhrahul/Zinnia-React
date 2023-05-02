function AddQuantity(props) {
    const { increaseDecreaseQuantity, listing, handleOnChange } = props
    const { title, quantity, price } = listing

    return (

        <span className='quantity-add-box'>
            <p className='paddin-lr p-bottom-margin'>
                <img src="/images/icons/checked-gray.svg" alt="" className='p-bottom-margin-1 m-1' /> {title} </p>
            <p className='px-md-4'>$ {price} each</p>
            <div className='row px-md-4'>
                <div class="input-group col">
                    <div class="input-group-prepend">
                        <span class="input-group-text" onClick={increaseDecreaseQuantity(listing, false)}>-</span>
                    </div>
                    <input type="number" class="form-control" value={quantity} min="1" size="1" onChange={handleOnChange(listing)} />
                    <div class="input-group-append">
                        <span class="input-group-text" onClick={increaseDecreaseQuantity(listing, true)}>+</span>
                    </div>
                </div>
                <div class=" col-5"></div>
            </div>
        </span>

    )
}

export default AddQuantity