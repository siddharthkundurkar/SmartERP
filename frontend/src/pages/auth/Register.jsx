import RegisterForm from "./RegisterForm";

export default function Register() {
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
                            Create your company and start managing
                            Accounting, Inventory, Sales and Purchases
                            in one place.
                        </p>

                    </div>

                </div>

                {/* Right Side */}

                <div className="flex items-center justify-center p-8">

                    <RegisterForm />

                </div>

            </div>

        </div>
    );
}