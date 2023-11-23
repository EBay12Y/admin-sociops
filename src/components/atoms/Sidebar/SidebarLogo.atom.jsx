import Image from "next/image";
import sociops from "../../../../public/sociops.svg";

const SidebarLogo = () => {
  return (
    <div className='flex my-4 w-auto h-auto'>
      <Image alt='icon' src={sociops} priority={true} />
    </div>
  );
};

export default SidebarLogo;
