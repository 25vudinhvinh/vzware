import { faClock, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../assets/avatar.png";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Task({ id, columnId, title = "task 1", date = "05-10-2025" }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({
            id,
            data: {
                // ← THÊM: Attach metadata cho multi-container
                sortable: {
                    containerId: columnId,
                },
            },
        });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="w-full min-h-2 flex flex-col gap-3 bg-white shadow-2xs p-2 select-none rounded cursor-grab active:cursor-grabbing"
        >
            <span className="text-[17px] font-semibold">{title}</span>
            <div className="flex gap-2 items-center justify-between text-gray-600">
                <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faClock} />
                    <p className="text-sm">{date}</p>
                </div>
                <div className="flex -space-x-2">
                    <img className="w-[25px]" src={avatar} alt="" />
                    <img className="w-[25px]" src={avatar} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Task;
