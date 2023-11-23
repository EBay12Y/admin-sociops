import { AiOutlineArrowLeft } from "react-icons/ai";

const SidebarToggle = ({ onClick }) => {
  return (
    <div className='p-4 text-primary-600 md:hidden block'>
      <AiOutlineArrowLeft size={24} onClick={onClick} />
    </div>
  );
};

export default SidebarToggle;
