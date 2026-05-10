import Footer from "./Footer";
import Homeee from "./Homeee";
import { Hello, FunctionInFooter } from "./Footer";
import { Bye } from "./Homeee";
import { Body } from "./Body";

const App = () => {
  return (
    <>
      <Homeee />
      <Body />
      <Footer />
      <FunctionInFooter />
    </>
  );
};

export default App;
