import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        <Navbar bg="dark" expand="dark">
      <Container>
          <li>
            <Link style={{padding:"25px"}} to="/">Home</Link>
            <Link style={{padding:"25px"}} to="/about">About</Link>
            <Link style={{padding:"25px"}} to="/contact">Contact</Link>
            <Link style={{padding:"25px"}} to="/destination">Destination</Link>
            <Link style={{padding:"25px"}} to="/registrationform">Registration Form</Link>
          </li>
          </Container>
    </Navbar>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;