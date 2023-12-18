import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="flex items-center justify-center w-full h-24 border-t">
            <p className="text-sm text-center text-gray-500">
                &copy; 2021 by <Link href="#" className="text-blue-600 hover:underline">Sergey Lysenko</Link>
            </p>
        </footer>
    );
}

export default Footer;