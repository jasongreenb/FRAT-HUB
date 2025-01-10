import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  console.log(isActive);
  return (
    <ul>
      <li>
        {isActive("/") ? <a disabled={true}>Home</a> : <Link to="/">Home</Link>}
      </li>
      <li>
        {isActive("/login") ? (
          <a disabled={true}>Login</a>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
      <li>
        {isActive("/signup") ? (
          <a disabled={true}>Signup</a>
        ) : (
          <Link to="/signup">Signup</Link>
        )}
      </li>
    </ul>
  );
};

export default NavBar;
