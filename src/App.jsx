import { QuickMeasure, Portfolio } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Portfolio />} />
        <Route path="/quickmeasure" element={<QuickMeasure />} />
      </Routes>
    </BrowserRouter>
  );
}