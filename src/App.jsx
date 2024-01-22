import { QuickMeasure, Home, Projects } from "./pages";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";


export default function App() {
  let { projectSlug, section } = useParams();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} >
            <Route path=":section?" />
          </Route>
          <Route path="/projects" >
            <Route path=":projectSlug?" element={<Projects />} />
          </Route>
          <Route path="/quickmeasure" element={<QuickMeasure />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}