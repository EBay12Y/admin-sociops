import { HeaderGreetingText, HeaderSearchInput } from "@/components/atoms";
import {
  HeaderNotificationDropdown,
  HeaderToggleButton,
} from "@/components/molecules";

const Header = ({ toggleSidebar, isOpen }) => {
  return (
    <div className='navbar fixed top-0 z-40 bg-white text-black flex h-[104px] shadow'>
      {/* Toggle Button */}
      <HeaderToggleButton onClick={toggleSidebar} isOpen={isOpen} />

      {/* Item Header */}
      <HeaderSearchInput />

      <div className='ml-[156px] md:mx-auto lg:ml-[586px]'>
        <HeaderNotificationDropdown />
        <HeaderGreetingText />
      </div>
    </div>
  );
};

export default Header;
