import GridView from "../../components/GridView/GridView";
import GridViewButton from "../../components/GridViewButton";

// Data from api or state. Array of arrays for grid layout
const gridData = [
  [1, 2, 3], // First row: 3 buttons
  [null, null, 4], // Second row: button in rightmost column
  [5, 6, 7], // Third row: 3 buttons
];

const HomeScreen = () => (
  <div className="flex items-center justify-center min-h-screen">
    <GridView
      grid={gridData}
      renderCell={(id) => <GridViewButton key={id} />}
      className="w-56 h-56 border-2 border-black rounded-lg p-4"
    />
  </div>
);

export default HomeScreen;
