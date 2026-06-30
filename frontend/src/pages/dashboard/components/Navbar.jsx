import {
    Bell,
    Search,
    UserCircle,
} from "lucide-react";

import useAuthStore from "../../../auth/store/auth.store";

export default function Navbar() {

    const user = useAuthStore((state) => state.user);

    return (

        <header className="flex h-20 items-center justify-between border-b bg-white px-8">

            <div className="flex items-center gap-4 rounded-xl border px-4 py-2">

                <Search size={20} />

                <input
                    placeholder="Search..."
                    className="outline-none"
                />

            </div>

            <div className="flex items-center gap-6">

                <Bell
                    className="cursor-pointer"
                    size={22}
                />

                <div className="flex items-center gap-3">

                    <UserCircle size={40} />

                    <div>

                        <p className="font-semibold">

                            {user?.fullName}

                        </p>

                        <p className="text-sm text-slate-500">

                            {user?.email}

                        </p>

                    </div>

                </div>

            </div>

        </header>

    );

}