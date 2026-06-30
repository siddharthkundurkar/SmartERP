import { Link } from "react-router-dom";
import {
    ArrowRight,
    CheckCircle,
    BarChart3,
    Package,
    ReceiptIndianRupee,
    ShoppingCart,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-white to-slate-100">

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2">

                {/* Left Side */}
                <div>

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                        🚀 Smart Business ERP
                    </span>

                    <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
                        Manage Your Entire Business
                        <span className="text-blue-600">
                            {" "}From One Place
                        </span>
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        SmartERP helps businesses manage Accounting,
                        Inventory, Sales, Purchases, GST, Banking,
                        Reports, and much more from a single platform.
                    </p>

                    {/* Features */}
                    <div className="mt-8 grid grid-cols-2 gap-4">

                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-600" size={20} />
                            Accounting
                        </div>

                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-600" size={20} />
                            Inventory
                        </div>

                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-600" size={20} />
                            Sales
                        </div>

                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-600" size={20} />
                            Purchases
                        </div>

                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-600" size={20} />
                            GST Ready
                        </div>

                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-600" size={20} />
                            Reports
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex gap-4">

                        <Link
                            to="/register"
                            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Get Started
                            <ArrowRight size={18} />
                        </Link>

                        <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100">
                            Live Demo
                        </button>

                    </div>

                </div>

                {/* Right Side */}
                <div>

                    <div className="rounded-3xl bg-white p-8 shadow-2xl">

                        <h3 className="mb-8 text-2xl font-bold">
                            SmartERP Dashboard
                        </h3>

                        <div className="grid grid-cols-2 gap-5">

                            <div className="rounded-2xl bg-blue-100 p-6 text-center">
                                <BarChart3
                                    className="mx-auto mb-3 text-blue-600"
                                    size={40}
                                />
                                <p className="font-semibold">Analytics</p>
                            </div>

                            <div className="rounded-2xl bg-green-100 p-6 text-center">
                                <Package
                                    className="mx-auto mb-3 text-green-600"
                                    size={40}
                                />
                                <p className="font-semibold">Inventory</p>
                            </div>

                            <div className="rounded-2xl bg-orange-100 p-6 text-center">
                                <ShoppingCart
                                    className="mx-auto mb-3 text-orange-600"
                                    size={40}
                                />
                                <p className="font-semibold">Sales</p>
                            </div>

                            <div className="rounded-2xl bg-purple-100 p-6 text-center">
                                <ReceiptIndianRupee
                                    className="mx-auto mb-3 text-purple-600"
                                    size={40}
                                />
                                <p className="font-semibold">Accounting</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}