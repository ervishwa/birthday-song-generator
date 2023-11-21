import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

/**
 * A Layout Component that's combination of navbar and sidebar.
 * @returns - React element that represents the layout component.
 */
export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
