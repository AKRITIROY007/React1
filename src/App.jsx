import { Footer } from "./Footer";
import Homeee from "./Homeee";

const Hello = () => {
  return <h2>THIS IS FIRST react COMPONENT</h2>;
};

const Bye = () => {
  
};

const App = () => {
  return (
    <div>
      <Homeee />
      
      <Bye />
      <Hello />
      <Hello />
      <Footer/>
    </div>
  );
};

export default App;
