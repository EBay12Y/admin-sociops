const TableV4 = ({
  variant,
  header1,
  header2,
  header3,
  header4,
  header5,
  header6,
  children,
}) => {
  let bgHeader;
  if (variant) {
    switch (variant) {
      case "primary":
        bgHeader = "bg-blue-gray-600";
        break;
      case "warning":
        bgHeader = "bg-warning-400";
        break;
      default:
        bgHeader = "bg-blue-gray-600";
        break;
    }
  }
  return (
    <table className='table-auto'>
      <thead>
        <tr className={`${bgHeader || "bg-blue-gray-600"} text-white text-xl`}>
          <th className='w-1/12 p-5'>{header1}</th>
          <th className='w-3/12 p-5'>{header2}</th>
          <th className='w-1/12 p-5'>{header3}</th>
          <th className='w-3/12 p-5'>{header4}</th>
          <th className='w-3/12 p-5'>{header5}</th>
          <th className='w-1/12 p-5'>{header6}</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default TableV4;
