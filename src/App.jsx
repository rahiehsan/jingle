import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
