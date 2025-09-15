import { useState } from "react";

const GridViewButton = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    setTimeout(() => setActive(false), 2000);
  };

  return (
    <button
      className={`w-ful h-full inline-flex items-center justify-center border border-gray-500 rounded-lg cursor-pointer p-0 ${
        active ? "bg-violet-500" : "bg-gray-50"
      }`}
      aria-label="Grid View button"
      onClick={handleClick}
    />
  );
};

export default GridViewButton;
