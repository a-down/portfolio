import {
  BrowserRouter,
  Routes, 
  Route
} from "react-router-dom";
import { Portfolio, QuickMeasure } from './pages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quickmeasure" element={<QuickMeasure />} />
        <Route path="/*" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
