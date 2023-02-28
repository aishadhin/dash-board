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

function App() {
  return (
    <Router>
      <Header></Header>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assistants" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/services-offered/price-list" element={<PriceList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<SignUp />} />
          <Route
            path="/services-offered/view-all-services"
            element={<AllServices />}
          />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
      <Footer></Footer>
    </Router>
  );
}

export default App;
