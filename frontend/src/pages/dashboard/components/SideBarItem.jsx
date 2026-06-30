import { NavLink } from "react-router-dom";

export default function SidebarItem({
    icon: Icon,
    title,
    path,
}) {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition
                ${
                    isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:bg-slate-100"
                }`
            }
        >
            <Icon size={20} />

            <span>{title}</span>
        </NavLink>
    );
}