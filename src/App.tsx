import { Header } from "@/components";
import Router from "./router";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes("signin") && <Header />}
      <Router />
    </>
  );
}

export default App;
