const TableV3Cell = ({ className, children }) => {
  return (
    <td className={`p-5 text-justify text-sm ${className}`}>{children}</td>
  );
};

export default TableV3Cell;
