import "./App.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import BaseLayout from "./Resources/BaseLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import MissionPage from "./pages/MissionPage";
import Membership from "./pages/Membership";
import Program from "./pages/Program";
import Ministries from "./pages/Ministries";
import Founder from "./pages/Founder";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />\
      <Route path="/mission" element={<MissionPage />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/programs" element={<Program />} />
      <Route path="/ministries" element={<Ministries />} />
      <Route path="/founder" element={<Founder />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
