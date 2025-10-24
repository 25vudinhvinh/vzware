import SidebarKanban from "../components/SidebarKanban";
import Board from "../components/Board";
import ProjectInfo from "../components/ProjectInfo";
import { useState } from "react";

function Kanban() {
    const [active, setActive] = useState("board");

    const onSectionChange = (section) => {
        setActive(section);
    };

    return (
        <div className="flex w-full h-full">
            {/* Sidebar */}
            <div className="w-[230px] h-full bg-gray-100 border-r border-r-gray-300">
                <SidebarKanban
                    onSectionChange={onSectionChange}
                    activeSection={active}
                />
            </div>

            <div className="flex-1 h-full w-full">
                {active === "info" && <ProjectInfo />}
                {active === "board" && <Board />}
            </div>
        </div>
    );
}

export default Kanban;
