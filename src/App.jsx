import Nav from "./nav/Nav";
import AllTours from "./allTours/AllTours";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main">
        <AllTours />
      </main>
    </div>
  );
}

export default App;
