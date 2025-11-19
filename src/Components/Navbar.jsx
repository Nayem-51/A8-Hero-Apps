import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center space-x-2 hover:opacity-80 transition"
                    >
                        <img src="/src/assets/logo.png" alt="HERO.IO" className="w-8 h-8" />
                        <span className="text-xl font-bold text-purple-600">HERO.IO</span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`font-medium transition ${isActive("/") ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/apps"
                            className={`font-medium transition ${isActive("/apps") ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
                                }`}
                        >
                            Apps
                        </Link>
                        <Link
                            to="/installation"
                            className={`font-medium transition ${isActive("/installation")
                                ? "text-purple-600"
                                : "text-gray-700 hover:text-purple-600"
                                }`}
                        >
                            Installation
                        </Link>
                    </nav>
                    <a
                        href="https://github.com/muhammadMilon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center space-x-2 bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 transition"
                    >
                        <i className="fa-brands fa-github text-xl"></i>
                        <span>Contribute</span>
                    </a>
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden text-gray-700 hover:text-purple-600 transition"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
                {mobileMenuOpen && (
                    <nav className="md:hidden flex flex-col space-y-3 mt-4 pb-4 border-t pt-4">
                        <Link
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`font-medium transition text-center py-2 rounded ${isActive("/") ? "text-purple-600 bg-purple-50" : "text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/apps"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`font-medium transition text-center py-2 rounded ${isActive("/apps")
                                ? "text-purple-600 bg-purple-50"
                                : "text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            Apps
                        </Link>
                        <Link
                            to="/installation"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`font-medium transition text-center py-2 rounded ${isActive("/installation")
                                ? "text-purple-600 bg-purple-50"
                                : "text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            Installation
                        </Link>
                        <a
                            href="https://github.com/muhammadMilon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 transition"
                        >
                            <i className="fa-brands fa-github text-lg"></i>
                            <span>Contribute</span>
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
}
export default Navbar;