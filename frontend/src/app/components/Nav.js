import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <div className="nav">
            <div class="nav-logo">HHF Eiendom</div>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href="/" className="nav-link">Hjem</Link>
                </li>
                <li className="nav-item">
                <Link href="/omoss" className="nav-link">Om Oss</Link>
                </li>
                <li className="nav-item">
                <Link href="/tjenester" className="nav-link">Tjenester</Link>
                </li>
                <li className="nav-item">
                <Link href="/prosjekter" className="nav-link">Prosjekter</Link>
                </li>
                <li className="nav-item">
                <Link href="/kontakt" className="nav-link">Kontakt</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;