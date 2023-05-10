import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Offers from "./pages/offers";
import Profile from "./pages/profile";
import Register from "./pages/register";
import SignIn from "./pages/signin";
import ForgotPassword from "./pages/forgotpass";

function App() {
  return ( 
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
