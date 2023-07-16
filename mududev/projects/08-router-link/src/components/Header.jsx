import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
      </ul>
    </header>
  );
};
