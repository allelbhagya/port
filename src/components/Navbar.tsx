import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="navbar">
      <Link to="/about" className="navbar-link">
        About
      </Link>
      <Link to="/work" className="navbar-link">
        Work
      </Link>
      <Link to="/contact" className="navbar-link">
        Contact
      </Link>
    </div>
  );
}
