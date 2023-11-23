const HeaderToggleButton = ({ onClick, isOpen }) => {
  return (
    <div className='p-2 mr-10 md:hidden'>
      <button className='md:hidden' onClick={onClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-primary-600'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          {isOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default HeaderToggleButton;
