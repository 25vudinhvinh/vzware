import logo from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Column from "../components/Column";

import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useState } from "react";
function Board() {
    const [tasks, setTasks] = useState({
        1: ["task-1"], // ID của tasks trong cột 1 (Task)
        2: ["Doing"], // Cột 2 (Doing)
        3: ["Done"], // Cột 3 (Done)
        4: ["Hold"], // Cột 4 (Hold)
    });

    const columns = [
        { id: 1, title: "Task" },
        { id: 2, title: "Doing" },
        { id: 3, title: "Done" },
        { id: 4, title: "Hold" },
    ];

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event) {
        const { active, over } = event;
        const activeContainer = active.data.current?.sortable?.containerId; // Bây giờ sẽ có giá trị nhờ data ở Task
        const overId = over?.id;
        const overSortableContainer = over?.data.current?.sortable?.containerId;
        const overContainer = overSortableContainer || overId; // Ưu tiên container từ sortable item, fallback droppable id

        if (!activeContainer || !overContainer) {
            return; // Guard: Tránh lỗi nếu không có container hợp lệ
        }

        if (activeContainer !== overContainer) {
            // Di chuyển giữa các cột
            setTasks((state) => {
                const activeItems = [...(state[activeContainer] || [])]; // Fallback [] nếu undefined
                const overItems = [...(state[overContainer] || [])];

                const activeIndex = activeItems.indexOf(active.id);
                if (activeIndex === -1) return state; // Guard: Task không tồn tại

                let overIndex;
                if (overSortableContainer) {
                    // Drop trên item: Insert trước item đó
                    overIndex = overItems.indexOf(overId);
                } else {
                    // Drop trực tiếp vào cột: Append cuối
                    overIndex = overItems.length;
                }

                activeItems.splice(activeIndex, 1);
                overItems.splice(overIndex, 0, active.id);

                return {
                    ...state,
                    [activeContainer]: activeItems,
                    [overContainer]: overItems,
                };
            });
        } else {
            // Sắp xếp trong cùng cột
            const activeItems = [...(tasks[activeContainer] || [])];
            const activeIndex = activeItems.indexOf(active.id);
            const overIndex = activeItems.indexOf(overId);

            if (activeIndex !== -1 && activeIndex !== overIndex) {
                setTasks((state) => ({
                    ...state,
                    [activeContainer]: arrayMove(
                        state[activeContainer],
                        activeIndex,
                        overIndex
                    ),
                }));
            }
        }
    }
    return (
        <div className="w-full h-full bg-slate-400 justify-between items-center">
            <div className="flex select-none justify-between items-center px-3  h-[70px] bg-slate-500">
                <div className="flex gap-3 items-center">
                    <img className="w-[40px] rounded" src={logo} alt="" />
                    <h2 className="font-semibold text-lg text-white">Vzware</h2>
                </div>

                <div className="flex gap-3">
                    <div className="flex -space-x-1 items-center">
                        <img
                            src={logo}
                            className="w-[30px] h-[30px] rounded-full ring-2 ring-white shadow-md"
                            alt=""
                        />

                        <img
                            src={logo}
                            className="w-[30px] h-[30px] rounded-full ring-2 ring-white shadow-md"
                            alt=""
                        />

                        <img
                            src={logo}
                            className="w-[30px] h-[30px] rounded-full ring-2 ring-white shadow-md"
                            alt=""
                        />

                        <img
                            src={logo}
                            className="w-[30px] h-[30px] rounded-full ring-2 ring-white shadow-md"
                            alt=""
                        />
                    </div>
                    <div className="py-2 px-2.5 cursor-pointer rounded-xl bg-white">
                        <span className="text-lg">
                            <FontAwesomeIcon icon={faUserPlus} />
                        </span>
                    </div>
                </div>
            </div>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <div className="flex-1 flex gap-4 overflow-hidden p-3">
                    {columns.map((column) => (
                        <Column
                            key={column.id}
                            title={column.title}
                            tasks={tasks[column.id]}
                            columnId={column.id}
                        />
                    ))}
                </div>
            </DndContext>
        </div>
    );
}

export default Board;
