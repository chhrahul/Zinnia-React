import { Signup, Login } from "./pages";
import { Routes, Route } from 'react-router-dom'
import { createContext } from 'react';

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={< Signup />} />
        <Route exact path="/sign-up" element={< Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes >
    </div>
  );
}

export default App;
