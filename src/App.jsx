import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import CounterApp from "./pages/CounterApp";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import ToggleButton from "./pages/ToggleButton";
import CharacterCounter from "./pages/CharacterCounter";
import ControlledForm from "./pages/ControlledForm";
import DynamicInputs from "./pages/DynamicInputs";

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
      {
        path: "toggle-button",
        element: <ToggleButton />,
      },
      {
        path: "character-counter",
        element: <CharacterCounter />,
      },
      {
        path: "form-validation",
        element: <ControlledForm />,
      },
      {
        path: "dynamic-inputs",
        element: <DynamicInputs />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
