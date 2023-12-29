import { QuickMeasure, Portfolio } from "./pages";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      {/* <div> */}
        <Outlet />
      {/* </div> */}
    </>
  );
}