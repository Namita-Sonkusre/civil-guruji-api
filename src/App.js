import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./component/header";
import Section1 from "./pagesSection/section1";
import Section2 from "./pagesSection/section2";
import Section3 from "./pagesSection/section3";
import Section4 from "./pagesSection/section4";
import Section5 from "./pagesSection/section5";
import Section6 from "./pagesSection/section6";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="App">
      <Header />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
    </div>
  );
}

export default App;
