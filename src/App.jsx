import { useState } from "react";
import "./App.css";
import { Key } from "./components/Key";
import { keysInfo } from "./sounds";

function App() {
  const [sounds, setSounds] = useState(keysInfo);

  return (
    <div className="keys">
      <h1>Drums Kit</h1>
      <span>Press any key</span>

      <div className="content">
        {sounds.map((sound, index) => (
          <Key key={index} sound={sound} />
        ))}
      </div>
    </div>
  );
}

export default App;
