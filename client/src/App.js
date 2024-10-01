import "./app.module.css";
import Canvas from "./components/Canvas";
import UI from "./components/UI";

export default function App() {
  return (
    <div className="App">
      <UI></UI>
      <Canvas></Canvas>
    </div>
  );
}
