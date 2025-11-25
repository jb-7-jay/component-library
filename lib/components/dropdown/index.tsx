import React, { useState } from "react";

interface BasicDropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const BasicDropdown: React.FC<BasicDropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-48">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-left">
        {selected ?? "Select an option"}
      </button>
      {isOpen && (
        <ul className="absolute mt-1 w-full bg-white border border-gray-300 rounded shadow z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BasicDropdown;
