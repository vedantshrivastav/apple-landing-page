// import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import { ScrollTrigger, SplitText } from "gsap/all";
import Showcase from "./components/Showcase";
import { gsap } from "gsap";
import Performance from "./components/Performance";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
    </div>
  );
}

export default App;
