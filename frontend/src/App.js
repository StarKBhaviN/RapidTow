import Home from "./components/home";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Profile from "./components/profile";
import Book from "./components/Book";
import UserDetails from "./components/UserDetails";
import VehicleDetails from "./components/VehicleDetails";
import Help from './components/Help';
import Feedback from './components/Feedback';
import ChangePassword from './components/ChangePassword';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";



function App() {
  return (
    <>
      <Router>
        <div className="main">
          <div className="box"></div>
          <Header />
          <div className="App w-100" style={{ position: "absolute", border: "0px solid red", height: "90%" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/SignIn" element={<Signin />} />
              <Route path="/SignUp" element={<Signup />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Book" element={<Book />} />
              <Route path='/UserDetails' element={<UserDetails />} />
              <Route path='/VehicleDetails' element={<VehicleDetails />} />
              <Route path='/ChangePassword' element={<ChangePassword />} />
              <Route path='/Help' element={<Help />} />
              <Route path='/Feedback' element={<Feedback />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
