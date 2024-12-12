import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AutoCounter from "./components/AutoCounter";
import PaginatedUsers from "./components/PaginatedUsers";
import ThemeSwitcher from "./components/ThemeSwitcher";

const AppRouter = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link className="mr-4 text-blue-500" to="/auto-counter">Auto Counter</Link>
          <Link className="mr-4 text-blue-500" to="/paginated-users">Paginated Users</Link>
          <Link className="mr-4 text-blue-500" to="/theme-switcher">Theme Switcher</Link>
        </nav>

        <Routes>
          <Route path="/auto-counter" element={<AutoCounter />} />
          <Route path="/paginated-users" element={<PaginatedUsers />} />
          <Route path="/theme-switcher" element={<ThemeSwitcher />} />
          <Route
            path="/"
            element={<h1 className="text-xl">Welcome! Select an example above.</h1>}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
