import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a
          href="https://guniet123.github.io"
          className="navbar-name"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guniet Dhillon
        </a>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/gilman">Gilman</Link>
          <Link to="/trips">Our Trips</Link>
        </div>
      </div>
    </nav>
  );
}
