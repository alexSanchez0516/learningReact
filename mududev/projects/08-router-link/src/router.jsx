import { ErrorPage } from "./components/ErrorPage";
import { Contact } from "./components/Contact";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";

export const router = createBrowserRouter([
  {
    // path: '/contacto/:id',
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contact/:id',
        element: <Contact />,
        errorElement: <ErrorPage />
      },
    ]
  },
  

]);