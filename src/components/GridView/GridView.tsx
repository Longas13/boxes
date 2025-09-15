import React from "react";

export type GridViewProps<T> = {
  grid: (T | null)[][];
  renderCell: (item: T, idx: number) => React.ReactNode;
  className?: string;
};

const GridView = <T,>({ grid, renderCell, className = "" }: GridViewProps<T>) => {
  return (
    <div className={`grid grid-cols-3 grid-rows-3 gap-4 ${className}`}>
      {grid
        .flat()
        .map((item, idx) =>
          item !== null ? (
            <React.Fragment key={`cell-${idx}`}>
              {renderCell(item, idx)}
            </React.Fragment>
          ) : (
            <div key={`empty-${idx}`} />
          )
        )}
    </div>
  );
};

export default GridView;
