import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import AllServices from "./pages/AllServices";
import PriceList from "./pages/PriceList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthVerification from "./components/Authentication/AuthVerification";

function App() {
  return (
    <Router>
      <Header></Header>
      <SideBar>
        <Routes>
          <Route path="/" element={<AuthVerification><Dashboard /></AuthVerification>} />
          <Route path="/assistants" element={<AuthVerification><Users /></AuthVerification>} />
          <Route path="/messages" element={<AuthVerification><Messages /></AuthVerification>} />
          <Route path="/analytics" element={<AuthVerification><Analytics /></AuthVerification>} />
          <Route path="/file-manager" element={<AuthVerification><FileManager /></AuthVerification>} />
          <Route path="/order" element={<AuthVerification><Order /></AuthVerification>} />
          <Route path="/saved" element={<AuthVerification><Saved /></AuthVerification>} />
          <Route path="/settings" element={<AuthVerification><Setting /></AuthVerification>} />
          <Route path="/services-offered/price-list" element={<AuthVerification><PriceList /></AuthVerification>} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<SignUp />} />
          <Route
            path="/services-offered/view-all-services"
            element={<AuthVerification><AllServices /></AuthVerification>}
          />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
      <Footer></Footer>
    </Router>
  );
}

export default App;
