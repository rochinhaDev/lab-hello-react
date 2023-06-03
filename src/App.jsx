import "./App.css";
import Index from "./components/index";

function App() {
  return (
    <>
      <div className="main">
        <Index img="./src/images/logo.png" />
        <Index img="./src/images/barras.png" />
      </div>
      <div>
        <h1>Say Hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library and become
          a super Ninja developer.
        </p>
        <button>Awsome!</button>
      </div>
      <div className="items">
        <div>
          <Index img="./src/images/chave.png" />
          <h2>Declarative</h2>
          <span>React makes ite paintless to create interactive UIs.</span>
        </div>
        <div>
          <Index img="./src/images/laptop.png" />
          <h2>Components</h2>
          <span>Build encapsulated components that manage their state.</span>
        </div>
        <div>
          <Index img="./src/images/desktop.png" />
          <h2>Single-Way</h2>
          <span>A set of immutable values are passed tod the component's.</span>
        </div>
        <div>
          <Index img="./src/images/code.png" />
          <h2>JSX</h2>
          <span>Statically-typed designed to run on modern browsers.</span>
        </div>
      </div>
    </>
  );
}

export default App;
