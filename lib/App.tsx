import { FaNewspaper } from "react-icons/fa6";
import Button from "./components/button";
import BasicDropdown from "./components/dropdown";
import SlickSlider from "./components/carousel";

function App() {
  const handleSelect = (option: string) => {
    console.log("Selected:", option);
  };
  return (
    <div className="text-center flex flex-col gap-4 p-6">
      <h1 className="font-bold text-4xl">Welcome to the App</h1>
      <h3 className="font-semibold text-2xl">Button Component</h3>

      <div className="flex flex-col justify-center items-center gap-2">
        <div>
          <Button label="Button with Icon" icon={<FaNewspaper />} />
        </div>
        <div>
          <Button label="Button without Icon" />
        </div>
      </div>

      <h3 className="font-semibold text-2xl">Slick Slider Component</h3>
      <SlickSlider />
      <h3 className="font-semibold text-2xl py-4">Dropdown Component</h3>
      <div className="flex items-center  justify-center">
        <BasicDropdown
          options={["Option 1", "Option 2", "Option 3"]}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
}

export default App;
