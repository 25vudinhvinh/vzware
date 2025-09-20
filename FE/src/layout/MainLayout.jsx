import Sidebar from "../components/Sidebar";

function MainLayout() {
    return (
        <div className="flex">
            <div className="w-[205px] h-screen bg-blue-800 shadow-2xl">
                <Sidebar />
            </div>
            <div>
                <h2>Content</h2>
            </div>
        </div>
    );
}

export default MainLayout;
