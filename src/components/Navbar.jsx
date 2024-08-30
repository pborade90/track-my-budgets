//rrd
import { Form, NavLink } from "react-router-dom";

// assests
import logomark from "../assets/logomark.svg"
import { TrashIcon } from "@heroicons/react/16/solid";

const Navbar = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to Home" >
        <img src={logomark} alt="logo" width={40} />
        <span>TrackMyBudgets</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={e => {
            if (!confirm("Delete user and all data?")) {
              e.preventDefault()
            }
          }}
        >
          <button type="submit" className="btn btn--warning" >
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
}

export default Navbar;