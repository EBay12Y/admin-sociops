const TableV3 = ({ className, header, children }) => {
  return (
    <table className={className}>
      <thead>
        <tr className='text-white'>{header}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default TableV3;
