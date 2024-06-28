import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
    </Routes>
  );
};
