const Loading = () => {
  return (
    <td colSpan={5} className='py-10 text-center'>
      <div
        className='radial-progress animate-spin'
        style={{ "--value": 70 }}
      ></div>
    </td>
  );
};

export default Loading;
