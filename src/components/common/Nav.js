import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/list">List</Link>
      <Link to="/mypage">My Page</Link>
    </nav>
  );
};

export default Nav;
