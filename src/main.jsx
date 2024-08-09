import React from "react";
import ReactDOM from "react-dom/client";
import Our_Services from "./Our_Services/Our_services.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Contact from "./Contact/Contact.jsx";
import About_us from "./About_us/About_us.jsx";
import Network from "./About_us/Network.jsx";
import Growth_story from "./About_us/Growth_story.jsx";
import Freight_forwarding from "./Our_Services/Freight_forwarding.jsx";
import Supply_chain_management from "./Our_Services/Supply_chain_management.jsx";
import Project_cargo_ODC_handle from "./Our_Services/Project_cargo_ODC_handle.jsx";
import Warehouse_distributation from "./Our_Services/Warehouse_distributation.jsx";
import Customs_brokerage_air_sea from "./Our_Services/Customs_brokerage_air_sea.jsx";
import Learning_module from "./About_us/Learning_module.jsx";
import SingleQuote from "./Forms/SingleQuote.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Our_Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about_us",
    element: <About_us />,
  },
  {
    path: "/network",
    element: <Network />,
  },
  {
    path: "/growth_story",
    element: <Growth_story />,
  },
  {
    path: "/freight_forwarding",
    element: <Freight_forwarding />,
  },
  {
    path: "/supply_chain_management",
    element: <Supply_chain_management />,
  },
  {
    path: "/project_cargo_ODC_handle",
    element: <Project_cargo_ODC_handle />,
  },
  {
    path: "/warehouse_distributation",
    element: <Warehouse_distributation />,
  },
  {
    path: "/customs_brokerage_services",
    element: <Customs_brokerage_air_sea />,
  },
  {
    path: "/learning_module",
    element: <Learning_module />,
  },
  {
    path: "/single_quote",
    element: <SingleQuote/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
