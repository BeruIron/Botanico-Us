import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-normal gap-8">
          <li className="flex1">
            <Link to="/">Home</Link>
          </li>
          <li className="flex1">
            <Link to="/our story">Our Story</Link>
          </li>
          <li className="flex1">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="flex1">
            <Link to="/beer finder">BeerFinder</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;