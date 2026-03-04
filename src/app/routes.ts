import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import GridPatterns from "./components/GridPatterns";
import FlexboxPatterns from "./components/FlexboxPatterns";
import CombinedPatterns from "./components/CombinedPatterns";
import ResponsivePatterns from "./components/ResponsivePatterns";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "grid", Component: GridPatterns },
      { path: "flexbox", Component: FlexboxPatterns },
      { path: "combined", Component: CombinedPatterns },
      { path: "responsive", Component: ResponsivePatterns },
    ],
  },
]);
