import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <main>
      <Header />
      <div className="container px-2 mx-auto">
        <Outlet />
      </div>
    </main>
  );
};
