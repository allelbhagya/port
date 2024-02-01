import { Link } from "react-router-dom";
export function Logo() {
  return (
    <div className="logo">
      <div>
        <Link to="/" style={{ textDecoration: 'none', color: 'maroon' }}>
          RedLight
        </Link>
      </div>
    </div>
  );
}
