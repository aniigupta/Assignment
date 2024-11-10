import { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="logo">Taylor's Kitchen</div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className="text-white">Home</Link>
          <Link to="/favorites" className="text-white">Favorites</Link>
        </div>
        <button
          className="hamburger text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
