import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Cashier from "./pages/Cashier";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import NotFound from "./pages/NotFound";
import Overview from "./pages/Overview";
import Reports from "./pages/Reports";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "Overview", element: <Overview /> },
      { path: "Cashier", element: <Cashier /> },
      { path: "Expenses", element: <Expenses /> },
      { path: "Reports", element: <Reports /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <div className="min-h-screen w-full relative flex items-center pt-26.25 text-center text-white flex-col gap-10 bg-linear-to-br from-[#0C0C0C] via-[#a3d706] to-[#0C0C0C]">
      <RouterProvider router={router} />
    </div>
  );
}
