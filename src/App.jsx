import { QuickMeasure, Home, Projects } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";

export default function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/quickmeasure" element={<QuickMeasure />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}