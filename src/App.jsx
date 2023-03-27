import Nav from "./components/nav/Nav";
import Tours from "./components/Tours";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login";
import Signup from "./pages/signup/Signup";
import Account from "./pages/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tours />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/me",
    element: <Account />,
  },
]);

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
