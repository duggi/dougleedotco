import { Link } from "react-router-dom";



function Bottom() {
  return (
    <div className="bottom-rail">
      <h1>[FOOTER]</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/auth">Auth</Link>
    </div>
  )
}



export default Bottom;
