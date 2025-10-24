import {
    faEye,
    faPenSquare,
    faPlusCircle,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../assets/avatar.png";
function Department() {
    const employees = [
        {
            id: "AB12345",
            name: "Emma Stone",
            email: "emma.stone@gmail.com",
            department: "IT",
            status: "Đang làm việc",
        },
        {
            id: "CD67890",
            name: "Liam Johnson",
            email: "liam.johnson@hotmail.com",
            department: "UI/UX Design",
            status: "Đang làm việc",
        },
        {
            id: "EF34567",
            name: "Sophia Turner",
            email: "sophia.turner@hotmail.com",
            department: "HR",
            status: "Đang làm việc",
        },
        {
            id: "GH90123",
            name: "Michael Brown",
            email: "michael.brown@gmail.com",
            department: "IT",
            status: "Đang làm việc",
        },
    ];

    return (
        <div className="p-6">
            <div className="border border-gray-200 bg-white rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">
                            Danh sách nhân viên
                        </h1>
                        <div className="mt-4 flex justify-between items-center text-gray-600">
                            <span>Tổng: {employees.length}</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5">
                        {/* search */}
                        <div className="border border-gray-300 flex items-center gap-3 pl-3 rounded-3xl">
                            <span>
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className="outline-0 w-full"
                            />
                        </div>

                        {/* add */}
                        <div className="bg-blue-500 px-5 cursor-pointer py-2 rounded-3xl flex gap-1 items-center">
                            <span className="text-white">
                                <FontAwesomeIcon icon={faPlusCircle} />
                            </span>
                            <button className="text-white font-semibold">
                                Thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-gray-200 bg-white rounded-lg p-4">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-sm">
                            <th className="text-left font-normal p-2">SL</th>
                            <th className="text-left font-normal p-2">ID</th>
                            <th className="text-left font-normal p-2">
                                Tên nhân viên
                            </th>
                            <th className="text-left font-normal p-2">Email</th>
                            <th className="text-left font-normal p-2">Phone</th>
                            <th className="text-left font-normal p-2">
                                Sinh nhật
                            </th>
                            <th className="text-left font-normal p-2">
                                Phòng ban
                            </th>
                            <th className="text-left font-normal p-2">
                                Ngày vào làm
                            </th>
                            <th className="text-left font-normal p-2">
                                Trạng thái
                            </th>
                            <th className="text-left font-normal p-2">
                                Hành động
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="p-2">01</td>
                            <td className="p-2">000027</td>
                            <td className="p-2">Uma Stafford</td>
                            <td className="p-2">nocu@mailinator.com</td>
                            <td className="p-2">098-8765-9876</td>
                            <td className="p-2">1976-05-01</td>
                            <td className="p-2">IT Admin</td>
                            <td className="p-2">2010-06-04</td>
                            <td className="p-2">
                                <span className="px-3 py-2 bg-blue-500 text-center text-sm text-white font-semibold rounded-full">
                                    Active
                                </span>
                            </td>
                            <td className="p-2 flex space-x-2 ">
                                <span className="cursor-pointer bg-gray-100 p-1 text-blue-400 rounded">
                                    <FontAwesomeIcon icon={faEye} />
                                </span>
                                <span className="cursor-pointer bg-gray-100 p-1 text-blue-500 rounded">
                                    <FontAwesomeIcon icon={faPenSquare} />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Department;
