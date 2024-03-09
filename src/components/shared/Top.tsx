import { Link } from "react-router-dom";



function Top() {
  return (
    <div id="navlinks">
      <h1>[TOP]</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/auth">Auth</Link>
    </div>
  )
}



export default Top;
