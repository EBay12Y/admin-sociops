import { SidebarNavItem } from "@/components/atoms";
import {
  FaHome,
  FaChalkboardTeacher,
  FaCoins,
  FaHandHoldingHeart,
  FaArchive,
} from "react-icons/fa";

const SidebarNavigation = ({ currentPath }) => {
  const navItems = [
    { path: "/dashboard", icon: <FaHome size={24} />, label: "Dashboard" },
    {
      path: "/customer",
      alternatePaths: [
        "/customer/daftar-akun-pengguna",
        "/customer/detail-permintaan-komunitas",
        "/customer/pengguna-fundraising",
        "/customer/pengguna-volunteer",
        "/customer/permintaan-komunitas",
      ],
      icon: <FaChalkboardTeacher size={24} />,
      label: "Customer",
    },
    {
      path: "/fundraising",
      alternatePaths: [
        "/fundraising/pengajuan-program",
        "/fundraising/list-program",
        "/fundraising/riwayat-program",
        "/fundraising/transaksi",
        "/fundraising/[id]",
      ],
      icon: <FaCoins size={24} />,
      label: "Fundraising",
    },
    {
      path: "/volunteer",
      alternatePaths: [
        "/volunteer/pengajuan-program",
        "/volunteer/list-program",
        "/volunteer/riwayat-program",
        "/volunteer/[id]",
      ],
      icon: <FaHandHoldingHeart size={24} />,
      label: "Volunteer",
    },
    {
      path: "/news",
      alternatePaths: ["/news/create-news", "/news/list-news", "/news/[id]"],
      icon: <FaArchive size={24} />,
      label: "News",
    },
  ];

  return (
    <nav className='mt-8'>
      <ul>
        {navItems.map((item) => (
          <SidebarNavItem
            key={item.path}
            path={item.path}
            isActive={
              currentPath === item.path ||
              (item.alternatePaths && item.alternatePaths.includes(currentPath))
            }
            icon={item.icon}
            label={item.label}
          />
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
