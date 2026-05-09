const Hello = () => {
  return <h2>THIS IS FIRST react COMPONENT</h2>;
};

const Bye = () => {
  
};

const App = () => {
  return (
    <div>
      <Bye />
      <Hello />
      <Hello />
    </div>
  );
};

export default App;
