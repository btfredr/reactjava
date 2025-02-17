import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href="/">Hjem</Link>
                </li>
                <li className="nav-item">
                <Link href="/">Om Oss</Link>
                </li>
                <li className="nav-item">
                <Link href="/">Kontakt</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;