// rrd
import { Link, useNavigate, useRouteError } from "react-router-dom";

// heroicon
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/16/solid";

const Error = () => {

  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <div className="error">
      <h1>Uh oh! We have got a problem</h1>
      <p>{ error.message || error.statusText }</p>
      <div className="flex-md">
        <button
          className="btn btn--dark"
          onClick={() => navigate(-1)}
        >
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link
          className="btn btn--dark"
          to="/"
        >
          <HomeIcon width={20} />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
}
 
export default Error;