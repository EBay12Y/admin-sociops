const InputIcon = ({ onChange, value, name, placeholder, type }) => {
  return (
    <div className='relative'>
      <div className='absolute ms-4 left-0 bottom-0 top-0 text-white flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          className='bi bi-search'
          viewBox='0 0 16 16'
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
        </svg>
      </div>
      <input
        className='placeholder:capitalize rounded-[72px] text-base placeholder:text-white text-white px-[52px] py-6 border-2 border-primary-300 bg-primary-700'
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default InputIcon;
