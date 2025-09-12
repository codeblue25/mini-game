import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Start from "@/pages/Start";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Start /> }],
  },
]);

export default router;
