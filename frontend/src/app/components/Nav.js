import React from 'react';
import Link from 'next/link';

export default function Nav() {
    return (
        <div className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href="/">
                        <a>Hjem</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                        <a>Om Oss</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                        <a>Kontakt</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}