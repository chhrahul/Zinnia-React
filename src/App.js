import { Signup, Login } from "./pages";
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
        </Routes >
      </div>
    </Layout>
  );
}

export default App;
