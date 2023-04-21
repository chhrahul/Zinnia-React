import * as React from 'react'
import { Signup, Login, Listings, MainSearch, MainSearchResult, MainSearchResultPhotographer, MainSearchResultFlorist, SearchResultListing } from "./pages";
import { FloristDetail, PhotographerDetail, VenueDetail } from "./pages/listing";
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import { FiArrowLeftCircle } from "react-icons/fi";
import { WiDayThunderstorm } from "react-icons/wi";

function App() {
  const [cart, setCart] = React.useState([])
  const gettingCartProps = {
    cart,
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
          <Route exact path="/main-search" element={<MainSearch />} />
          <Route exact path="/search-result-venue" element={<MainSearchResult />} />
          <Route exact path="/search-result-photographer" element={<MainSearchResultPhotographer />} />
          <Route exact path="/search-result-florist" element={<MainSearchResultFlorist />} />
          <Route exact path="/search-result-listing" element={<SearchResultListing />} />
        </Routes >
      </div>
    </Layout>
  );
}

export default App;


