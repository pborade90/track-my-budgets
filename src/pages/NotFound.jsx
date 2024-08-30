import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404: Page Not Found</h2>
      <p>Go back to the <Link to="/">Dashboard</Link>.</p>
    </div>
  );
}
 
export default NotFound;