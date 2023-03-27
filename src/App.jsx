import Nav from "./nav/Nav";
import AllTours from "./allTours/AllTours";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Login from "./login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllTours />,
  },
  {
    path: "/login",
    element: <Login />,
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
