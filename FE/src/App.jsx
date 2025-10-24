import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Calendar from "./pages/Calendar";
import Kanban from "./pages/Kanban";
import AccountManagement from "./pages/AccountManagement";
import HRManagement from "./pages/HRManagement";
import Attendance from "./pages/Attendance";
import Department from "./pages/Department";
import Login from "./pages/Login";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Kiểm tra trạng thái đăng nhập
        const authStatus = localStorage.getItem("isAuthenticated");
        setIsAuthenticated(authStatus);
    }, []);

    return (
        <Routes>
            {/* Route công khai - Login */}
            <Route path="/login" element={<Login />} />

            {/* Route cho trang chính - yêu cầu đăng nhập */}
            <Route
                path="/*"
                element={
                    isAuthenticated ? (
                        <AuthenticatedApp />
                    ) : (
                        <Navigate to="/login" replace />
                    )
                }
            />
        </Routes>
    );
}

// Component khi đã đăng nhập
function AuthenticatedApp() {
    return (
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
                        <Route path="/attendance" element={<Attendance />} />
                        <Route path="/department" element={<Department />} />
                        <Route path="/kanban" element={<Kanban />} />
                        <Route path="/" element={<Calendar />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
