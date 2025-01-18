import "./App.css";
import { Section1 } from "./components/section1";

import { Section1Extra } from "./components/section1-extra";

import { Section2 } from "./components/section2";
import { Section3 } from "./components/section3";
import { Section4 } from "./components/section4";
import { Section5 } from "./components/section5";
import Section6 from "./components/section6";
import Section7 from "./components/section7";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Section1 />

      <Section1Extra />

      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </>
  );
}

export default App;
