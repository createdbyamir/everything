import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <div>
            <div className="inner">
                <div className="logo">
                    <Link href="/home">
                        <h1>Everything</h1>
                        <p>Not more. Not less.</p>
                    </Link>
                </div>
                <div className="menu">
                    <nav>
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
                <div className="social">
                    <ul>
                        <li><a href="https://github.com/createdbyamir" target="_blank"><Github /></a></li>
                        <li><a href="https://www.linkedin.com/in/createdbyamir/" target="_blank"><Linkedin /></a></li>
                    </ul>
                </div>
            </div>
            <div className="disclaimer">
                <p>Concept project inspired by Nothing OS design. Not affiliated with Nothing.</p>
            </div>
        </div>
    )
}