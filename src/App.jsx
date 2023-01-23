import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Production } from "./pages/Production";
import { Cart } from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Production />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
