import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <main>
      <div className="container px-2 mx-auto">
        <Outlet />
      </div>
    </main>
  );
};
