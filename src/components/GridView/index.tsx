import GridViewButton from "../GridViewButton";

const grid = [
  [1, 2, 3], // Top row: all buttons
  [null, null, 4], // Middle row: button only in third column
  [5, 6, 7], // Bottom row: all buttons
];

const GridView = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 w-56 border-2 border-black rounded-lg p-[10px]">
      {grid.flat().map((id, idx) =>
        id ? (
          <GridViewButton key={`btn-${id}-${idx}`} />
        ) : (
          <div key={`empty-${idx}`} />
        )
      )}
    </div>
  );
};

export default GridView;
