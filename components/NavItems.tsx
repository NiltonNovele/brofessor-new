'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navItems = [
    { label:'Início', href: '/' },
    { label: 'Companheiros', href: '/companions' },
    { label: 'A Minha Jornada', href: 'my-journey' },
]

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(pathname === href && 'text-primary font-semibold')}
                >
                    {label}
                </Link>
            ))}
        </nav>
    )
}

export default NavItems