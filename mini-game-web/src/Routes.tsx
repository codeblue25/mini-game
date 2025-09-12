import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Start from "@/pages/Start";
import Ready from "@/pages/Ready";
import Play from "./pages/Play";
import Gatcha from "@/pages/Gatcha";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Start /> },
      { path: "ready", element: <Ready /> },
      { path: "play", element: <Play /> },
      { path: "gatcha", element: <Gatcha /> },
    ],
  },
]);

export default router;
