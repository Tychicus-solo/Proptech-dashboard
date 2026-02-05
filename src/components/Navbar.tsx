import {
  Dashboard,
  Listings,
  Users,
  Request,
  Applications,
  Task,
} from "../assets";
import type { NavItem } from "../features/dashboard/types";

const navLinks: (NavItem & { icon: string })[] = [
  { label: "Dashboard", href: "#", icon: Dashboard, isActive: true },
  { label: "Listings", href: "#", icon: Listings },
  { label: "Users", href: "#", icon: Users },
  { label: "Request", href: "#", icon: Request },
  { label: "Applications", href: "#", icon: Applications },
  { label: "Tasks", href: "#", icon: Task },
];

export const Navbar = () => {
  return (
    <nav className="bg-white px-[78px] h-[82px] flex items-center sticky top-0 z-50 border-b border-[#F4F4F5]">
      <ul className="flex items-center justify-between w-full">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`flex items-center gap-2 text-[14px] font-semibold transition-all py-[7px] px-[21px] rounded-[8px] ${
                link.isActive
                  ? "text-brand-green bg-[#176D5826]"
                  : "text-[#667085] hover:text-brand-green"
              }`}
            >
              <img src={link.icon} alt="" className="w-5 h-5 object-contain" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
