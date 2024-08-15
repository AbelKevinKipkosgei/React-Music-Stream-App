import Home from "./Pages/Home";
import Albums from "./Pages/Albums";
import Artists from "./Pages/Artists";
import AlbumInfo from "./Pages/AlbumInfo"

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
  {
    path: "/Albums/:id",
    element: <AlbumInfo />
  }
];
export default routes;
