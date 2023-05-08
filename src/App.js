import * as React from 'react'
import { Signup, Login, Listings, MainSearch, MainSearchResult, BookingRequest, Checkout, CheckoutAvailability, BillingDetail, BillingConfirmation, Invoices, VenderAccountDetail, VenderBusinessDetail, PaymentInfo, PaymentDetail, Listing, CoupleDashboard, Account, LoginInfo, PersonalInfo, WeddingInfo, WeddingPayment, Calendar, SetAvailability, WeekDaysList, Chat } from "./pages";
import { FloristDetail, PhotographerDetail, VenueDetail } from "./pages/listing";
import { Routes, Route, useNavigate } from 'react-router-dom'
import Layout from "./components/Layout";

function App() {

  return (
    <Layout >
      <div className="">
        <Routes>
          <Route exact path="/" element={< MainSearch />} />
          <Route exact path="/sign-up" element={< Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/florist" element={<FloristDetail />} />
          <Route exact path="/photographer" element={<PhotographerDetail />} />
          <Route exact path="/venue" element={<VenueDetail />} />
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
          <Route exact path="/couple-dashboard" element={<CoupleDashboard />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/login-info" element={<LoginInfo />} />
          <Route exact path="/personal-info" element={<PersonalInfo />} />
          <Route exact path="/wedding-info" element={<WeddingInfo />} />
          <Route exact path="/wedding-payment" element={<WeddingPayment />} />
          <Route exact path="/calendar" element={<Calendar />} />
          <Route exact path="/set-availability" element={<SetAvailability />} />
          <Route exact path="/week-days-list" element={<WeekDaysList />} />
          <Route exact path="/messages" element={<Chat />} />
        </Routes >
      </div>
    </Layout>
  );
}

export default App;


