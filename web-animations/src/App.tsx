import { useEffect } from "react";
import "./App.css";
import AnimationSelectMainPage from "./pages/animation-select/animation-select";
function App() {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      window.innerWidth - document.documentElement.clientWidth + "px"
    );
    console.log(
      window.innerWidth - document.documentElement.clientWidth + "px"
    );
  }, []);

  return (
    <div className="App">
      <AnimationSelectMainPage />
    </div>
  );
}

export default App;
