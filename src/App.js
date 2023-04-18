import * as React from 'react'
import { Signup, Login, Listings } from "./pages";
import {
  FloristDetail, PhotographerDetail, VenueDetail
} from "./pages/listing";
import {
  MainSearchFlorist, MainSearchPhotographer, MainSearchVenue
} from "./pages/new";
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";

function App() {
  const [cart, setCart] = React.useState([])
  const [addedToCart, setaddedToCart] = React.useState(0)
  const addToCart = (productId, variantInfo) => {
    const newCart = {
      'id': productId,
      'variants': variantInfo
    }
    setCart([...cart, newCart])

    setaddedToCart(productId)
  }
  const gettingCartProps = {
    addToCart,
    cart,
    addedToCart,
    setCart
  }

  return (
    <Layout {...gettingCartProps}>
      <div className="">
        <Routes>
          <Route exact path="/" element={< Signup />} />
          <Route exact path="/sign-up" element={< Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/florist" element={<FloristDetail {...gettingCartProps} />} />
          <Route exact path="/photographer" element={<PhotographerDetail {...gettingCartProps} />} />
          <Route exact path="/venue" element={<VenueDetail {...gettingCartProps} />} />
          <Route exact path="/main-search-florist" element={<MainSearchFlorist />} />
          <Route exact path="/main-search-photographer" element={<MainSearchPhotographer />} />
          <Route exact path="/main-search-venue" element={<MainSearchVenue />} />
        </Routes >
      </div>
    </Layout>
  );
}

export default App;


