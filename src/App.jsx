import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Adjust the path if different
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword'
import ProductView from "./pages/ProductView"; // move this to pages
import ProductListPage from "./pages/ProductListPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/category/:category" element={<ProductListPage />} /> {/* ✅ Add this route */}


        {/* Add other routes here later */}
      </Routes>
    </Router>
  );
}
