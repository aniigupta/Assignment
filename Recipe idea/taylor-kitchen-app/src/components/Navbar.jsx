import { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-line">
        <div className="logo">Taylor's Kitchen</div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className="text-white">Home</Link>
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
