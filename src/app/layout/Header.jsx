import Link from 'next/link';
import { Menu, X, Sprout } from 'lucide-react';

export default function Header() {
    return  (
        <div className="bg-slate-500 flex max-w-[700px] m-auto justify-between items-center">
            <div className="menu ">
                <div className="burger">
                        <Menu />
                        <X className="hidden"/>
                    </div>
                <nav className="hidden">
                    <ul>
                        <li>
                            <Link href="/principles">Principles</Link>
                        </li>
                        <li>
                            <Link href="/moments">Moments</Link>
                        </li>
                        <li>
                            <Link href="/set">Set</Link>
                        </li>
                        <li>
                            <Link href="/ecosystem">Ecosystem</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="logo">
                <Link href="/home">
                    <h1>Everything</h1>
                    <p>Just enough.</p>
                </Link>
            </div>
            <div className="icon">
                <Link href="/ecosystem">
                    <Sprout />
                </Link>
            </div>
        </div>
    )
}