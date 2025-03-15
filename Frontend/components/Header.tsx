import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link href="/public">
                    <div className="text-2xl font-bold text-gray-800">
                        Logo
                    </div>
                </Link>

                {/* Download Button */}
                <Link href="/public">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                        Download
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
