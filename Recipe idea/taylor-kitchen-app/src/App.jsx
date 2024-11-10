import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import MealDetailsPage from "./components/MealDetailsPage";
import FavoritesPage from "./components/FavoritesPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meal/:id" element={<MealDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
