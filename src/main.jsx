import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { About, Contact, Home } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<div className="bg-red-600 text-sky-50 text-3xl">Page Not Found</div>} />
    </Route>
  )
);




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>
);
