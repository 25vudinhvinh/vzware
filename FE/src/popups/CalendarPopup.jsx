import { useState } from "react";

function CalendarPopup({ setShowPopup }) {
    const [activeTab, setActiveTab] = useState("leave");

    const renderForm = () => {
        switch (activeTab) {
            case "leave":
                return (
                    <div className="">
                        <form className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nhân viên
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập tên nhân viên"
                                    name="employee_name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Lý do
                                </label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập lý do"
                                    name="reason"
                                    rows="2"
                                ></textarea>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Hình thức
                                    </label>
                                    <select
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        name="leave_time"
                                    >
                                        <option
                                            className="hover:bg-gray-200 cursor-pointer"
                                            value="Cả ngày"
                                        >
                                            Cả ngày
                                        </option>
                                        <option value="Nửa ngày">
                                            Nửa ngày
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Ngày
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        name="leave_date"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                class="cursor-pointer text-gray-900 w-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            >
                                Thêm lịch
                            </button>
                        </form>
                    </div>
                );
            case "meeting":
                return (
                    <div className="">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Tiêu đề
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập tiêu đề cuộc họp"
                                    name="title"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Ngày họp
                                </label>
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    name="start_date"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Giờ bắt đầu
                                    </label>
                                    <input
                                        type="time"
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        name="start_time"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Giờ kết thúc
                                    </label>
                                    <input
                                        type="time"
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        name="end_time"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Địa điểm
                                    </label>
                                    <select
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        name="location"
                                    >
                                        <option value="Công ty">Công ty</option>
                                        <option value="Khác">Khác</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Hình thức
                                    </label>
                                    <select
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        name="format"
                                    >
                                        <option value="Offline">Offline</option>
                                        <option value="Online">Online</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Người tham gia
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập tên nhân viên"
                                    name="participants"
                                />
                            </div>
                            <button
                                type="submit"
                                class="cursor-pointer text-gray-900 w-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            >
                                Thêm lịch
                            </button>
                        </form>
                    </div>
                );
            case "wfh":
                return (
                    <div className="">
                        <form className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nhân viên
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập tên nhân viên"
                                    name="employee_name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Lý do
                                </label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập lý do"
                                    name="reason"
                                    rows="2"
                                ></textarea>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Hình thức
                                    </label>
                                    <select
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        name="wfh_time"
                                    >
                                        <option value="Cả ngày">Cả ngày</option>
                                        <option value="Nửa ngày">
                                            Nửa ngày
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Ngày
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        name="wfh_date"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                class="cursor-pointer text-gray-900 w-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            >
                                Thêm lịch
                            </button>
                        </form>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="h-full w-full bg-white p-6 rounded-lg shadow-lg relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Thêm lịch</h2>

            <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold cursor-pointer"
            >
                ✕
            </button>
            {/* Tabs */}
            <div className="flex space-x-6 mb-6 relative">
                <div
                    className={`relative cursor-pointer text-sm font-medium transition-colors ${
                        activeTab === "leave"
                            ? "text-blue-800"
                            : "text-gray-800 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("leave")}
                >
                    Lịch nghỉ
                    {activeTab === "leave" && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800 transition-all duration-300"></div>
                    )}
                </div>
                <div
                    className={`relative cursor-pointer text-sm font-medium transition-colors ${
                        activeTab === "meeting"
                            ? "text-blue-800"
                            : "text-gray-800 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("meeting")}
                >
                    Lịch họp
                    {activeTab === "meeting" && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800 transition-all duration-300"></div>
                    )}
                </div>
                <div
                    className={`relative cursor-pointer text-sm font-medium transition-colors ${
                        activeTab === "wfh"
                            ? "text-blue-800"
                            : "text-gray-800 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("wfh")}
                >
                    WFH
                    {activeTab === "wfh" && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800 transition-all duration-300"></div>
                    )}
                </div>
            </div>
            {/* Form content */}
            {renderForm()}
        </div>
    );
}

export default CalendarPopup;
