import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to= '/'>Home Page</Link>
      <Link to= '/blue'> Blue Page</Link>
      <Link to= '/red'>Red Page</Link>
    </nav>
  )
}

export default NavBar