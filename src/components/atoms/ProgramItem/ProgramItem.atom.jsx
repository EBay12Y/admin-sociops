/* eslint-disable @next/next/no-img-element */
const ProgramItem = ({ title, deskripsi, nomor, variant, image }) => {
  if (variant) {
    switch (variant) {
      case "netral":
        variant = "text-Gray-500";
        break;
      case "label-primary":
        variant = "bg-primary-500 text-white rounded-[50px] py-[3px] px-[10px]";
        break;
      case "label-error":
        variant = "bg-error-400 text-white rounded-[50px] py-[3px] px-[10px]";
        break;
      default:
        variant = "text-Gray-500";
        break;
    }
  }
  return (
    <div className='flex items-center'>
      {image ? (
        <div className='mr-[10px] w-10 h-10'>{image}</div>
      ) : (
        <div className='text-sm text-Gray-800 px-[10px] pt-0 pb-[10px] h-full'>{`${nomor}.`}</div>
      )}

      <div className='flex flex-col'>
        <div className='line-clamp-1'>
          <div className='text-sm text-Gray-800'>{title}</div>
        </div>
        <div className='flex'>
          <div className={`text-xs ${variant || "text-Gray-500"}`}>
            {deskripsi}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramItem;
