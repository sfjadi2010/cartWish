import "./App.css";
import Navbar from "@components/Navbar/Navbar";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <main>
          <HomePage />
        </main>
      </div>
    </>
  );
}

export default App;
