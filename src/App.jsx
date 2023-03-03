import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App  h-screen flex items-center justify-center">
      <div className="container  flex flex-col md:flex-row justify-center w-auto drop-shadow-2xl m-5">
        <div className="top flex flex-col items-center bg-blue-800 rounded-3xl p-5">
          <h2 className="text-gray-300 text-xl font-bold p-2">Your Result</h2>
          <div
            className="score flex flex-col
          items-center  bg-blue-900 rounded-full p-10 m-4"
          >
            <h1 className="text-4xl text-white font-bold">76</h1>
            <p className="text-gray-400">of 100</p>
          </div>

          <h2 className="text-white text-2xl font-bold m-2">Great</h2>
          <p className="text-gray-400 text-center max-w-[300px] mb-2">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="bottom bg-white flex flex-col items-center rounded-3xl p-5">
          <h2 className="font-bold text-lg mt-5">Summary</h2>
          <div className="reaction  bg-red-200 flex justify-between w-[300px] p-3 m-3 rounded-lg">
            <img src="../assets/images/icon-reaction.svg" alt="" />
            <p className="text-red-500">Reaction</p>
            <p>
              <span className="font-bold">80</span> / 100
            </p>
          </div>
          <div className="memory  bg-yellow-200 flex justify-between w-[300px] p-3 m-3 rounded-lg">
            <img src="../assets/images/icon-memory.svg" alt="" />
            <p className="text-yellow-500">Memory</p>
            <p>
              <span className="font-bold">92</span> / 100
            </p>
          </div>
          <div className="verbal  bg-green-200 flex justify-between w-[300px] p-3 m-3 rounded-lg">
            <img src="../assets/images/icon-verbal.svg" alt="" />
            <p className="text-green-500">Verbal</p>
            <p>
              <span className="font-bold">61</span> / 100
            </p>
          </div>
          <div className="visual  bg-blue-200 flex justify-between w-[300px] p-3 m-3 rounded-lg">
            <img src="../assets/images/icon-visual.svg" alt="" />
            <p className="text-blue-500">Visual</p>
            <p>
              <span className="font-bold">72</span> / 100
            </p>
          </div>

          <button className="bg-indigo-900 pl-5 pr-5 pt-2 pb-2 text-center mb-10 mt-5 text-white font-semibold rounded-3xl w-[300px]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
