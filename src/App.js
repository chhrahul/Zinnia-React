import * as React from 'react'
import { Signup, Login, Listings, MainSearch, MainSearchResult, BookingRequest, Checkout, CheckoutAvailability, BillingDetail, BillingConfirmation, Invoices, VenderAccountDetail, VenderBusinessDetail, PaymentInfo, PaymentDetail, Listing } from "./pages";
import { FloristDetail, PhotographerDetail, VenueDetail } from "./pages/listing";
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";

function App() {
  const [cart, setCart] = React.useState([])
  const [activeNav, setActiveNav] = React.useState('dashboard')
  const gettingCartProps = {
    cart,
    setCart,
    activeNav,
    setActiveNav
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
          <Route exact path="/booking-request" element={<BookingRequest />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/checkout-availability" element={<CheckoutAvailability />} />
          <Route exact path="/billing-detail" element={<BillingDetail />} />
          <Route exact path="/billing-confirmation" element={<BillingConfirmation />} />
          <Route exact path="/listing" element={<Listing />} />
          <Route exact path="/invoices" element={<Invoices />} />
          <Route exact path="/about" element={<VenderAccountDetail />} />
          <Route exact path="/vender-business-detail" element={<VenderBusinessDetail />} />
          <Route exact path="/payment-info" element={<PaymentInfo />} />
          <Route exact path="/payment-detail" element={<PaymentDetail />} />
        </Routes >
      </div>
    </Layout>
  );
}

export default App;


