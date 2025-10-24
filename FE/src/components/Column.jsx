import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Task from "./Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

function Column({ title, tasks = [], columnId }) {
    const { setNodeRef } = useDroppable({
        id: columnId,
    });

    return (
        <div
            ref={setNodeRef}
            className="w-60 min-h-2 flex flex-col bg-gray-200 rounded shadow-sm"
        >
            {/* title */}
            <div className="p-3 font-semibold select-none">
                <h2>{title}</h2>
            </div>
            {/* task */}
            <SortableContext
                items={tasks}
                strategy={verticalListSortingStrategy}
            >
                <div className="px-2 flex flex-col gap-2">
                    {tasks.map((taskId) => (
                        <Task key={taskId} id={taskId} columnId={columnId} />
                    ))}
                </div>
            </SortableContext>
            {/* button */}
            <div className="flex gap-2 items-center p-2 mt-2 text-gray-500 text-sm cursor-pointer select-none">
                <FontAwesomeIcon icon={faPlus} />
                <span>Thêm thẻ ghi nhớ</span>
            </div>
        </div>
    );
}

export default Column;
