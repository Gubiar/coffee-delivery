import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <div className="bg-coffee-light w-full bg-hero-somber bg-cover bg-center bg-no-repeat">
        <Header />
      </div>
      {<Outlet />}
    </>
  );
}
