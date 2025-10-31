import Link from "next/link";
const NavItem = ({ icon, link, active }) => {
  return (
    <Link
      href={link}
      className={`py-1 px-2 rounded-2xl ${
        link === active ? "bg-zinc-700" : null
      }`}
    >
      <div className="w-full h-full flex justify-center items-center">
        {icon}
      </div>
    </Link>
  );
};

export default NavItem;
