import Sidebar from "../pages/dashboard/components/Sidebar";
import Navbar from "../pages/dashboard/components/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div className="flex h-screen bg-slate-100">

            <Sidebar />

            <div className="flex flex-1 flex-col overflow-hidden">

                <Navbar />

                <main className="flex-1 overflow-y-auto p-6">

                    <Outlet />

                </main>

            </div>

        </div>
    );
}