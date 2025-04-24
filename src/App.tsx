import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages";
import Login from "./auth/Login";

const App = () => {
  return (
    <Router>
      {/* Page content */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
