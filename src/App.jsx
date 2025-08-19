import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeviceDetail from "./pages/DeviceDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/device/:id" element={<DeviceDetail />} />
    </Routes>
  );
}
