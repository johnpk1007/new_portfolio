import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Landing from "./landing/landing";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <Landing />;
}

export default App;
