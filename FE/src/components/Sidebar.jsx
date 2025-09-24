import { Link, useLocation } from "react-router-dom";
import {
    faBarsProgress,
    faBorderAll,
    faCalendar,
    faGroupArrowsRotate,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import avatar from "../assets/avatar.png";

function Sidebar() {
    const location = useLocation();

    const menuItems = [
        { icon: faCircleUser, label: "Quản lý tài khoản", path: "/account" },
        { icon: faUserGroup, label: "Quản lý nhân sự", path: "/hr" },
        { icon: faGroupArrowsRotate, label: "Chấm công", path: "/attendance" },
        { icon: faBorderAll, label: "Phòng ban", path: "/department" },
        { icon: faCalendar, label: "Lịch", path: "/calendar" },
        { icon: faBarsProgress, label: "Quản lý dự án", path: "/kanban" },
    ];

    // CSS class chung cho tất cả các link
    const linkClass =
        "w-full flex items-center gap-3 text-white text-sm cursor-pointer p-2 rounded-md transition-colors";

    return (
        <div className="w-64 h-screen flex flex-col items-center py-6 px-4 gap-6 bg-gray-800">
            {/* S.1 - User Info */}
            <div className="w-full flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                        <img
                            src={avatar}
                            alt="User Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col text-white text-sm select-none">
                        <span className="font-semibold text-nowrap">
                            Vu Dinh Vinh
                        </span>
                        <span className="text-gray-400 text-xs">
                            IT Department
                        </span>
                    </div>
                </div>
                <div className="text-lg cursor-pointer text-white hover:text-gray-300 transition-colors">
                    <FontAwesomeIcon icon={faBell} />
                </div>
            </div>
            <span className="h-px w-full bg-gray-600"></span>

            {/* S.2 - Navigation Items */}
            <div className="w-full flex flex-col gap-3">
                {menuItems.slice(0, 4).map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`${linkClass} ${
                            location.pathname === item.path
                                ? "bg-gray-700"
                                : "hover:bg-gray-700"
                        }`}
                    >
                        <FontAwesomeIcon icon={item.icon} className="text-lg" />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </div>
            <span className="h-px w-full bg-gray-600"></span>

            {/* S.3 - Additional Items */}
            <div className="w-full flex flex-col gap-3">
                {menuItems.slice(4).map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`${linkClass} ${
                            location.pathname === item.path
                                ? "bg-gray-700"
                                : "hover:bg-gray-700"
                        }`}
                    >
                        <FontAwesomeIcon icon={item.icon} className="text-lg" />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
