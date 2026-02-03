// import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <ProductViewer />
    </div>
  );
}

export default App;
