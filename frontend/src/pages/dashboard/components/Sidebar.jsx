import {
    LayoutDashboard,
    Building2,
    BookOpen,
    Package,
    ShoppingCart,
    Truck,
    BarChart3,
    Users,
    Settings,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {

    return (

        <aside className="hidden w-72 border-r bg-white lg:flex lg:flex-col">

            <div className="border-b p-6">

                <h1 className="text-3xl font-bold text-blue-600">

                    SmartERP

                </h1>

            </div>

            <nav className="flex-1 space-y-2 p-4">

                <SidebarItem
                    title="Dashboard"
                    path="/dashboard"
                    icon={LayoutDashboard}
                />

                <SidebarItem
                    title="Company"
                    path="/company"
                    icon={Building2}
                />

                <SidebarItem
                    title="Ledger"
                    path="/ledger"
                    icon={BookOpen}
                />

                <SidebarItem
                    title="Inventory"
                    path="/inventory"
                    icon={Package}
                />

                <SidebarItem
                    title="Purchase"
                    path="/purchase"
                    icon={Truck}
                />

                <SidebarItem
                    title="Sales"
                    path="/sales"
                    icon={ShoppingCart}
                />

                <SidebarItem
                    title="Reports"
                    path="/reports"
                    icon={BarChart3}
                />

                <SidebarItem
                    title="Users"
                    path="/users"
                    icon={Users}
                />

                <SidebarItem
                    title="Settings"
                    path="/settings"
                    icon={Settings}
                />

            </nav>

        </aside>

    );

}