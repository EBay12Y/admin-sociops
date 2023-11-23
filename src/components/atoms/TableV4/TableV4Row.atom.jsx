const TableV4Row = ({
  variant,
  button,
  no,
  program,
  customer,
  tanggal,
  id,
}) => {
  let bgContent;
  if (variant) {
    switch (variant) {
      case "primary":
        bgContent = "odd:bg-blue-gray-50 even:bg-blue-gray-100";
        break;
      case "warning":
        bgContent = "odd:bg-warning-50 even:bg-warning-100";
        break;
      default:
        bgContent = "odd:bg-blue-gray-50 even:bg-blue-gray-100";
        break;
    }
  }
  return (
    <tr
      className={`text-center text-Gray-900 ${
        bgContent || "odd:bg-blue-gray-50 even:bg-blue-gray-100"
      }`}
    >
      <td className='p-5 align-top font-semibold'>
        <div>{no}</div>
      </td>
      <td className='text-start align-top p-5'>
        <div className='line-clamp-3'>{program}</div>
      </td>
      <td className='text-start p-5'>
        <div className='line-clamp-3'>{customer}</div>
      </td>
      <td className='p-5 align-top'>
        <div>{id}</div>
      </td>
      <td className='p-5 align-top'>
        <div>{tanggal}</div>
      </td>
      <td className='p-5 align-top'>{button}</td>
    </tr>
  );
};

export default TableV4Row;
