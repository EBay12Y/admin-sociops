import { MdHelp } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { SidebarNavItem } from "@/components/atoms";

const SidebarBottomNavigation = ({ currentPath }) => {
  const bottomNavItems = [
    { path: "/help", icon: <MdHelp size={24} />, label: "Help" },
    { path: "/settings", icon: <AiFillSetting size={24} />, label: "Settings" },
  ];

  return (
    <div className='absolute bottom-0 left-0 w-[280px] mb-7'>
      <nav>
        <ul>
          {bottomNavItems.map((item) => (
            <SidebarNavItem
              key={item.path}
              path={item.path}
              isActive={currentPath === item.path}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarBottomNavigation;
