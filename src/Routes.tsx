import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "@/pages/Home";
import NextPage from "@/pages/Play";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "play", element: <NextPage /> },
    ],
  },
]);

export default router;
