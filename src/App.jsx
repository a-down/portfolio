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
        <Route path="/" element={<Portfolio />} />
        <Route path="/quickmeasure" element={<QuickMeasure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
