import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import CounterApp from "./pages/CounterApp";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "counter-app",
        element: <CounterApp />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
