const TableV3Header = ({ className, title }) => {
  return (
    <th
      className={`p-5 font-semibold text-xl bg-primary-600 first:rounded-tl-xl last:rounded-tr-xl ${className}`}
    >
      {title}
    </th>
  );
};

export default TableV3Header;
