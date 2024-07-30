import "./App.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import BaseLayout from "./Resources/BaseLayout";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<BaseLayout />} />)
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
