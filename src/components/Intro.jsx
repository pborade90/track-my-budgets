
import { Form } from "react-router-dom";

// assets
import { UserPlusIcon } from "@heroicons/react/16/solid";
import loginPageIllustration from "../assets/loginPageIllustration.svg"

const Intro = () => {
  return (
    <div className="intro">
      <img src={loginPageIllustration} alt="Person with money" width={700} />
      <div>
        <h1>Own your <span className="accent">Financial</span> Future</h1>
        <p>It's not about how much money you make, but how you manage it. Start your journey today.</p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submitc" className="btn btn--accent">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Intro;