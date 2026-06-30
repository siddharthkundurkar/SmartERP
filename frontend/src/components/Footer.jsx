import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            id="contact"
            className="bg-slate-900 text-white"
        >
            <div className="mx-auto max-w-7xl px-6 py-16">

                <div className="grid gap-10 md:grid-cols-4">

                    {/* Logo */}

                    <div>

                        <h2 className="text-3xl font-bold text-blue-400">
                            SmartERP
                        </h2>

                        <p className="mt-5 text-slate-400 leading-7">
                            A complete ERP solution for Accounting,
                            Inventory, Sales, Purchase,
                            Banking and Business Management.
                        </p>

                    </div>

                    {/* Product */}

                    <div>

                        <h3 className="mb-5 text-xl font-semibold">
                            Product
                        </h3>

                        <ul className="space-y-3 text-slate-400">

                            <li>
                                <a href="#features">
                                    Features
                                </a>
                            </li>

                            <li>
                                Pricing
                            </li>

                            <li>
                                Documentation
                            </li>

                            <li>
                                Updates
                            </li>

                        </ul>

                    </div>

                    {/* Company */}

                    <div>

                        <h3 className="mb-5 text-xl font-semibold">
                            Company
                        </h3>

                        <ul className="space-y-3 text-slate-400">

                            <li>About</li>

                            <li>Careers</li>

                            <li>Privacy Policy</li>

                            <li>Terms of Service</li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="mb-5 text-xl font-semibold">
                            Contact
                        </h3>

                        <div className="space-y-4 text-slate-400">

                            <div className="flex items-center gap-3">
                                <Mail size={18} />
                                support@smarterp.com
                            </div>

                         <div className="mt-6 flex gap-4">

    <FaFacebook className="cursor-pointer text-2xl hover:text-blue-500" />

    <FaInstagram className="cursor-pointer text-2xl hover:text-pink-500" />

    <FaLinkedin className="cursor-pointer text-2xl hover:text-blue-400" />

    <FaGithub className="cursor-pointer text-2xl hover:text-white" />

</div>

                        </div>

                    </div>

                </div>

                <hr className="my-10 border-slate-700" />

                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

                    <p className="text-slate-400">
                        © {new Date().getFullYear()} SmartERP. All Rights Reserved.
                    </p>

                    <div className="flex gap-6">

                        <Link
                            to="/login"
                            className="hover:text-blue-400"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="hover:text-blue-400"
                        >
                            Register
                        </Link>

                    </div>

                </div>

            </div>
        </footer>
    );
}