const NewProgram = ({ title, children }) => {
  return (
    <div className='px-5'>
      <div className='font-semibold text-lg mb-[15px] text-Gray-800'>
        {title}
      </div>
      <div className='grid grid-cols-1 gap-[15px]'>{children}</div>
    </div>
  );
};

export default NewProgram;
