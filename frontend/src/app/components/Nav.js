import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href="/" className="nav-link">Hjem</Link>
                </li>
                <li className="nav-item">
                <Link href="/" className="nav-link">Om Oss</Link>
                </li>
                <li className="nav-item">
                <Link href="/" className="nav-link">Kontakt</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;