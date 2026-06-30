import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function LandingNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-blue-600"
                >
                    SmartERP
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 md:flex">

                    <a
                        href="#features"
                        className="text-gray-700 transition hover:text-blue-600"
                    >
                        Features
                    </a>

                    <a
                        href="#about"
                        className="text-gray-700 transition hover:text-blue-600"
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        className="text-gray-700 transition hover:text-blue-600"
                    >
                        Contact
                    </a>

                </div>

                {/* Buttons */}
                <div className="hidden items-center gap-3 md:flex">

                    <Link
                        to="/login"
                        className="rounded-lg border px-5 py-2 transition hover:bg-gray-100"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                    >
                        Get Started
                    </Link>

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden"
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="space-y-3 border-t bg-white p-5 md:hidden">

                    <a href="#features" className="block">
                        Features
                    </a>

                    <a href="#about" className="block">
                        About
                    </a>

                    <a href="#contact" className="block">
                        Contact
                    </a>

                    <Link
                        to="/login"
                        className="block rounded-lg border p-2 text-center"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="block rounded-lg bg-blue-600 p-2 text-center text-white"
                    >
                        Get Started
                    </Link>

                </div>
            )}
        </nav>
    );
}