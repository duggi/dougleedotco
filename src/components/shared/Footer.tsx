import { Link } from "react-router-dom";



function Footer() {
  return (
    <div id="navlinks">
      <h1>[FOOTER]</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/auth">Auth</Link>
    </div>
  )
}



export default Footer;
