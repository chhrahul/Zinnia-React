import { Signup, Login, Listings } from "./pages";
import { FloristDetail, PhotographerDetail, VenueDetail } from "./pages/listing";
import { MainSearch } from "./pages/new";
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="">
        <Routes>
          <Route exact path="/" element={< Signup />} />
          <Route exact path="/sign-up" element={< Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/florist" element={<FloristDetail />} />
          <Route exact path="/photographer" element={<PhotographerDetail />} />
          <Route exact path="/main-search" element={<MainSearch />} />
        </Routes >
      </div>
    </Layout>
  );
}

export default App;
