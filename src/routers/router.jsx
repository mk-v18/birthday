import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Letter from "../components/Letter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/letter",
    element: <Letter />,
  },
]);

export default router;