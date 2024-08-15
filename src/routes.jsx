import Home from "./Pages/Home";
import Albums from "./Pages/Albums";
import Artists from "./Pages/Artists";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Albums",
    element: <Albums />,
  },
  {
    path: "/Artists",
    element: <Artists />,
  },
];
export default routes;
