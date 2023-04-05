import { CreateAccountVender, Signup, Login, CreateAccount} from "./pages";
import { Routes, Route } from 'react-router-dom'
import { createContext } from 'react';

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={< Signup />} />
        <Route exact path="/signup-couple" element={<CreateAccount />} />
        <Route exact path="/signup-vender" element={<CreateAccountVender />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/create-account" element={<CreateAccount />} />
      </Routes >
    </div>
  );
}

export default App;
