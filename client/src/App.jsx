import { useState } from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./index.Routes.jsx";
const routes = createBrowserRouter(ROUTES);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
export default App;
