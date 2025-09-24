import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Calendar from "./pages/Calendar";
import Kanban from "./pages/Kanban";
import AccountManagement from "./pages/AccountManagement";
import HRManagement from "./pages/HRManagement";
import Attendance from "./pages/Attendance";
import Department from "./pages/Department";

function App() {
    return (
        <BrowserRouter>
            <div className="flex h-screen bg-gray-50">
                {/* Sidebar cố định */}
                <div className="flex-shrink-0">
                    <Sidebar />
                </div>

                {/* Main content với scroll */}
                <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex-1 overflow-auto">
                        <Routes>
                            <Route
                                path="/account"
                                element={<AccountManagement />}
                            />
                            <Route path="/hr" element={<HRManagement />} />
                            <Route
                                path="/attendance"
                                element={<Attendance />}
                            />
                            <Route
                                path="/department"
                                element={<Department />}
                            />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/kanban" element={<Kanban />} />
                            <Route path="/" element={<Calendar />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
