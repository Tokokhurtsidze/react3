import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LinkLayout from "./layouts/LinkLayout";
import ParamPage from "./pages/ParamPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LinkLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "main", element: <MainPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
  {
    path: ":name",
    element: <ParamPage />,
  },
]);

export default router;



