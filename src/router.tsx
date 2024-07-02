import { Route, Routes } from "react-router-dom";
import { OrderDetails, ProductManagement, Student, SignInPage } from "@/pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<OrderDetails />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/order" element={<OrderDetails />} />
      <Route path="/product" element={<ProductManagement />} />
      <Route path="/student" element={<Student />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default Router;
