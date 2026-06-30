import LoginForm from "./LoginForm";

export default function Login() {
    return (
        <div className="min-h-screen bg-slate-100">

            <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

                {/* Left Side */}

                <div className="hidden items-center justify-center bg-blue-600 lg:flex">

                    <div className="max-w-md text-white">

                        <h1 className="text-5xl font-bold">
                            SmartERP
                        </h1>

                        <p className="mt-6 text-lg leading-8">

                            Manage Accounting,
                            Inventory,
                            Sales,
                            Purchases,
                            Banking
                            and Reports
                            from one powerful platform.

                        </p>

                    </div>

                </div>

                {/* Right Side */}

                <div className="flex items-center justify-center p-8">

                    <LoginForm />

                </div>

            </div>

        </div>
    );
}