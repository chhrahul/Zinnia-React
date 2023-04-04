import { Signup, Login, CreateAccount } from "./pages";
import { Routes, Route } from 'react-router-dom'
import { createContext } from 'react';

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/create-account" element={<CreateAccount />} />
      </Routes >
    </div>
  );
}

export default App;
