import { useState, useRef } from "react";
import { debounce } from "../../utils/debounce";
import GridView from "../../components/GridView/GridView";
import GridViewButton from "../../components/GridViewButton";

// Data from api or state. Array of arrays for grid layout
const gridData = [
  [1, null, 2], // First row: 3 buttons
  [3, 4, 5], // Second row: button in rightmost column
  [6, null, 7], // Third row: 3 buttons
];

const HomeScreen = () => {
  const [listActiveButtons, setListActiveButtons] = useState<Set<number>>(
    new Set()
  );

  const clearActiveButtons = useRef(
    debounce(() => setListActiveButtons(new Set()), 2000)
  ).current;

  const handleClickButton = (id: number) => {
    setListActiveButtons((prev) => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
    clearActiveButtons();
  };
  console.log(listActiveButtons);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <GridView
        grid={gridData}
        renderCell={(id) => (
          <GridViewButton
            key={id}
            active={listActiveButtons.has(id as number)}
            onClick={() => handleClickButton(id as number)}
          />
        )}
        className="w-56 h-56 border-2 border-black rounded-lg p-4"
      />
    </div>
  );
};

export default HomeScreen;
