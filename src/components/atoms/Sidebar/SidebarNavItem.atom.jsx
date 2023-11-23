import Link from "next/link";

const SidebarNavItem = ({ path, isActive, icon, label }) => {
  return (
    <li>
      <Link href={path}>
        <span
          className={`flex items-center py-4 ${
            isActive
              ? "bg-primary-100 text-primary-600 font-bold rounded-lg"
              : "hover:bg-primary-600 hover:text-white pl-10"
          }`}
        >
          {isActive && (
            <span className='h-6 w-2 bg-primary-600 rounded-r mr-8' />
          )}
          <span className='mr-3'>{icon}</span>
          <span>{label}</span>
        </span>
      </Link>
    </li>
  );
};

export default SidebarNavItem;
