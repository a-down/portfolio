import { QuickMeasure, Portfolio } from "./pages";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      {/* <div> */}
        {/* <Outlet /> */}
      {/* </div> */}

      <BrowserRouter>
      
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/quickmeasure" element={<QuickMeasure />} />

            </Routes>

    </BrowserRouter>
    </>
  );
}