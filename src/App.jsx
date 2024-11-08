import { QuickMeasure, Home, Projects } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 *
 * @returns {Element}
 */
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />}>
            <Route path=":section?" />
          </Route>
          <Route path="/projects">
            <Route path=":projectSlug?" element={<Projects />} />
          </Route>
          <Route path="/quickmeasure" element={<QuickMeasure />} />
          {/* <Route path="/messages" element={<PartykitMessages />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
