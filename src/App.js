import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import SketchCard from "./components/SketchCard";

function App() {
  return (
    <div className="App">
      <Navbar />

      <SketchCard />
    </div>
  );
}

export default App;
