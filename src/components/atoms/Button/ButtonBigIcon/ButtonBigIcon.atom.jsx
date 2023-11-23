import Link from "next/link";

const ButtonBigIcon = ({ title, icon, link }) => {
  return (
    <Link href={link} legacyBehavior>
      <a className='bg-Gray-50 rounded-[15px] drop-shadow-custom p-4 hover:bg-Gray-200 transition duration-300 ease-out'>
        <div className='text-center font-bold text-sm'>
          {/* size icon 100px */}
          {icon}
          <p>{title}</p>
        </div>
      </a>
    </Link>
  );
};

export default ButtonBigIcon;
