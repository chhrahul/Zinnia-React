import { NamedTimeZoneImpl } from '@fullcalendar/core/internal';
import React from 'react';
const AddToCart = (props) => {
  const [cart, setCart] = React.useState([])
  const [tempAdded, setTempAdded] = React.useState(0)

  const { prodid, added, name, price } = props
  const addToCart = (data) => {
    let newVal
    if (localStorage.getItem("cart")) {
      newVal = JSON.parse(localStorage.getItem("cart")).concat(data)
    } else {
      newVal = cart.concat(data)
    }
    setCart(newVal)
    localStorage.setItem("cart", JSON.stringify(newVal));
    // added = 1;
    setTempAdded(1)
    document.querySelector('.cartCoutBadge').click();
  }


  return (
    <>

      {added && added.length > 0 || tempAdded > 0 ?
        <button className='added-to-cart-btn btn ' ><img src="/images/icons/selected.svg" alt="plus" /> Added to cart</button>
        :
        <button className='add-to-cart-btn btn btn-secondary' onClick={() => addToCart({ 'id': prodid, 'qty': '10', 'name': name, 'price': price })}>Add to cart</button>
      }
    </>
  )
}

export default AddToCart