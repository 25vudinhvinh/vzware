import {
    faBarsProgress,
    faBorderAll,
    faCalendar,
    faGroupArrowsRotate,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../assets/avatar.png";
import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";

function Sidebar() {
    return (
        <div className="w-full h-full flex flex-col items-center py-6 px-4 gap-6 bg-gray-800">
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
                <div className="w-full flex items-center gap-3 text-white text-sm cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-colors">
                    <FontAwesomeIcon icon={faCircleUser} className="text-lg" />
                    <span>Quản lý tài khoản</span>
                </div>
                <div className="w-full flex items-center gap-3 text-white text-sm cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-colors">
                    <FontAwesomeIcon icon={faUserGroup} className="text-lg" />
                    <span>Quản lý nhân sự</span>
                </div>
                <div className="w-full flex items-center gap-3 text-white text-sm cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-colors">
                    <FontAwesomeIcon
                        icon={faGroupArrowsRotate}
                        className="text-lg"
                    />
                    <span>Chấm công</span>
                </div>
                <div className="w-full flex items-center gap-3 text-white text-sm cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-colors">
                    <FontAwesomeIcon icon={faBorderAll} className="text-lg" />
                    <span>Phòng ban</span>
                </div>
            </div>
            <span className="h-px w-full bg-gray-600"></span>

            {/* S.3 - Additional Items */}
            <div className="w-full flex flex-col gap-3">
                <div className="w-full flex items-center gap-3 text-white text-sm cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-colors">
                    <FontAwesomeIcon icon={faCalendar} className="text-lg" />
                    <span>Lịch</span>
                </div>
                <div className="w-full flex items-center gap-3 text-white text-sm cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-colors">
                    <FontAwesomeIcon
                        icon={faBarsProgress}
                        className="text-lg"
                    />
                    <span>Quản lý dự án</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
