import { faBriefcase, faKaaba } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.jpg";
import vfa from "../assets/vfa.jpg";

function SidebarKanban({ onSectionChange, activeSection }) {
    return (
        <div className="w-full h-full flex flex-col gap-2 px-3">
            {/* logo */}
            <div className="p-3 flex gap-2 border-b border-b-gray-300">
                <img className="w-[25px] rounded" src={logo} alt="" />
                <span className="text-[16px] font-semibold">Vzware</span>
            </div>

            {/* future */}
            <div className="flex flex-col gap-1 border-b border-b-gray-300">
                <div
                    onClick={() => onSectionChange("info")}
                    className={`flex gap-2 transition-colors items-center hover:bg-blue-500 p-1 hover:text-white rounded cursor-pointer ${
                        activeSection === "info" ? "bg-blue-500 text-white" : ""
                    }`}
                >
                    <span>
                        <FontAwesomeIcon icon={faBriefcase} />
                    </span>
                    <span>Thông tin dự án</span>
                </div>

                <div
                    onClick={() => onSectionChange("board")}
                    className={`flex gap-2 items-center transition-colors hover:bg-blue-500 p-1 my-2 hover:text-white rounded cursor-pointer ${
                        activeSection === "board"
                            ? "bg-blue-500 text-white"
                            : ""
                    }`}
                >
                    <span>
                        <FontAwesomeIcon icon={faKaaba} />
                    </span>
                    <span>Bảng</span>
                </div>
            </div>

            {/* project */}
            <div className="flex flex-col gap-2">
                <div className="flex gap-3 p-1 rounded cursor-pointer hover:text-white hover:bg-blue-400 transition-colors">
                    <img className="w-[25px] rounded" src={vfa} alt="" />
                    <span>CFA</span>
                </div>

                <div className="flex gap-3 p-1 rounded cursor-pointer hover:text-white hover:bg-blue-400 transition-colors">
                    <img className="w-[25px] rounded" src={logo} alt="" />
                    <span>Vzware</span>
                </div>
            </div>
        </div>
    );
}

export default SidebarKanban;
