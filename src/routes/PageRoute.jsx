import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";

const PageRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PageRoute;