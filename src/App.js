import "./styles.css";
import { useState } from "react";
export default function App() {
  const [selectedButton, setSelectedButton] = useState(0);

  const buttonsConfig = [
    {
      id: 1,
      title: "Dog"
    },
    {
      id: 2,
      title: "Cat"
    },
    {
      id: 3,
      title: "Ferret"
    }
  ];

  const handleButtonSelect = (title) => {
    setSelectedButton(title);
  };

  console.log(selectedButton);
  return (
    <div className="App">
      <h1>Single button selector demo</h1>
      {buttonsConfig.map((currentButton) => (
        <div key={currentButton.id}>
          <button
            style={
              selectedButton === currentButton.title
                ? { backgroundColor: "red" }
                : { backgroundColor: "white" }
            }
            onClick={() => handleButtonSelect(currentButton.title)}
          >
            {currentButton.title}
          </button>
        </div>
      ))}
      {selectedButton && <div>Selected button with title: {selectedButton}</div>}
    </div>
  );
}
