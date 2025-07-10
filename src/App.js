import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [size, setSize] = useState(20);
  const myText = `This is a simple text function.
    It returns a string that can be displayed in the component.`;
  const [color, setColor] = useState("black");
  const [text, setText] = useState(myText);
  const [bgColor, setBgColor] = useState("white");
  const [isLightOn, setIsLightOn] = useState(false);

  const onButtonClick = (isPlus) => {
    if (isPlus) {
      setSize(size + 5);
    } else {
      setSize(size - 5);
    }
  };
  const onColorButtonClick = (color) => {
    setColor(color);
  };
  const handleUpperCase = () => {
    setText(myText.toUpperCase());
  };
  const handleLowerCase = () => {
    setText(myText.toLowerCase());
  };
  const changeBackground = (color) => {
    setBgColor(color);
  };
  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <>
      <div
        className="App"
        style={{ backgroundColor: bgColor, padding: "20px" }}
      >
        <h1>Welcome to My First React Project</h1>

        <p
          style={{
            fontSize: size + "px",
            color: color,
          }}
        >
          {text}
        </p>
        <button
          onClick={() => onButtonClick(true)}
          style={{
            margin: "10px",
          }}
        >
          +
        </button>
        <button
          onClick={() => onButtonClick(false)}
          style={{
            margin: "10px",
          }}
        >
          -
        </button>
        <br />
        <button className="button" onClick={() => onColorButtonClick("red")}>
          red
        </button>
        <button className="button" onClick={() => onColorButtonClick("blue")}>
          blue
        </button>
        <button className="button" onClick={() => onColorButtonClick("green")}>
          green
        </button>
        <br />
        <br />

        <button className="button" onClick={handleUpperCase}>
          UPPER CASE
        </button>
        <button className="button" onClick={handleLowerCase}>
          lower case
        </button>
        <br />
        <br />

        <h3>Change Background Color</h3>
        <button
          className="button"
          onClick={() => changeBackground("lightblue")}
        >
          Light Blue
        </button>
        <button
          className="button"
          onClick={() => changeBackground("lightgreen")}
        >
          Light Green
        </button>
        <button className="button" onClick={() => changeBackground("purple")}>
          purple
        </button>
        <button className="button" onClick={() => changeBackground("white")}>
          Reset
        </button>
        <br />
        <br />
        <h3>Light Toggle Example</h3>
        <p style={{ fontWeight: "bold", color: isLightOn ? "orange" : "gray" }}>
          Light is {isLightOn ? "ON" : "OFF"}
        </p>
        <button className="button" onClick={toggleLight}>
          Turn {isLightOn ? "Off" : "On"}
        </button>
        {/* <TodoList></TodoList> */}
      </div>
    </>
  );
}

export default App;
