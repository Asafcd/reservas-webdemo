import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PropertyDetailsOne = React.lazy(() => import("pages/PropertyDetailsOne"));
const Reservar = React.lazy(() => import("pages/Reservar"));
const PropertyDetails = React.lazy(() => import("pages/PropertyDetails"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/reservar" element={<Reservar />} />
          <Route path="/propertydetailsone" element={<PropertyDetailsOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
