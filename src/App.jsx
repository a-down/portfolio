import { QuickMeasure, Home, Projects } from "./pages";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Footer } from "./components";


export default function App() {
  let { projectSlug } = useParams();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/projects" >
            <Route path=":projectSlug" element={<Projects />} />
          </Route>
          <Route path="/quickmeasure" element={<QuickMeasure />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}