import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import SignupScreen from "./components/SignupScreen/SignupScreen";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import NavBar from "./components/NavBar/NavBar";

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
