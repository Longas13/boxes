export type GridViewButtonProps = {
  active: boolean;
  onClick: () => void;
};
const GridViewButton = ({ active, onClick }: GridViewButtonProps) => {
  return (
    <button
      className={`w-full h-full inline-flex items-center justify-center border border-gray-500 rounded-lg cursor-pointer p-0 ${
        active ? "bg-violet-500" : "bg-gray-50"
      }`}
      aria-label="Grid View button"
      onClick={onClick}
    />
  );
};

export default GridViewButton;
