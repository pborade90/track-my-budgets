// rrd
import { Outlet, useLoaderData } from "react-router-dom";

// helper function
import { fetchData } from "../helpers";

// components
import Navbar from "../components/Navbar";

// assets 
import wave from "../assets/wave.svg"

// loader
export const mainLoader = () => {
  const userName = fetchData("userName")
  return { userName }
}

const RootLayout = () => {

  const { userName } = useLoaderData()

  return (
    <div className="layout">
      <Navbar userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="Footer" />
    </div>
  );
}

export default RootLayout;