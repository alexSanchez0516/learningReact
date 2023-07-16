import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Home = () => {
  return (
    <>
      <h1>Home Init</h1>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}