"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import { Menu, X, ExternalLink } from "lucide-react";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar relative">
            {/* =========================
                BRAND
            ========================== */}
            
<div className="flex items-center gap-3">
    <Link
        href="/"
        onClick={closeMenu}
        className="flex items-center gap-3"
    >
        <div className="flex items-center gap-2.5 cursor-pointer">
            <Image
                src="/logo.jpg"
                alt="BroFessor"
                width={46}
                height={44}
                priority
                className="rounded-lg object-cover"
            />

            <div className="flex flex-col justify-center">
                <span className="text-xl font-bold tracking-tight text-gray-900 leading-none">
                    BroFessor
                </span>
            </div>
        </div>
    </Link>

    <div className="hidden lg:flex items-center">
        <span className="text-xs text-gray-400 whitespace-nowrap">
            Desenvolvido pela{" "}
            <a
                href="https://synctechx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-600 hover:text-[#fe5933] transition-colors"
            >
                SyncTechX
            </a>
        </span>
    </div>
</div>


            {/* =========================
                DESKTOP NAVIGATION
            ========================== */}
            <div className="hidden md:flex items-center gap-8">
                <NavItems />

                {/* Developer Credit */}
                

                {/* Authentication */}
                <SignedOut>
                    <SignInButton>
                        <button className="btn-signin">
                            Iniciar sessão
                        </button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>

            {/* =========================
                MOBILE MENU BUTTON
            ========================== */}
            <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden flex items-center justify-center size-10 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
                aria-label={
                    isMenuOpen ? "Fechar menu" : "Abrir menu"
                }
                aria-expanded={isMenuOpen}
            >
                {isMenuOpen ? (
                    <X
                        size={25}
                        strokeWidth={2}
                    />
                ) : (
                    <Menu
                        size={25}
                        strokeWidth={2}
                    />
                )}
            </button>

            {/* =========================
                MOBILE MENU
            ========================== */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 z-50 md:hidden bg-white border-t border-gray-100 shadow-xl">
                    <div className="flex flex-col px-5 py-6 gap-6">

                        {/* Navigation */}
                        <div
                            className="flex flex-col gap-4"
                            onClick={closeMenu}
                        >
                            <NavItems />
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-gray-100" />

                        {/* Authentication */}
                        <div className="flex items-center">
                            <SignedOut>
                                <SignInButton>
                                    <button
                                        className="btn-signin w-full"
                                        onClick={closeMenu}
                                    >
                                        Iniciar sessão
                                    </button>
                                </SignInButton>
                            </SignedOut>

                            <SignedIn>
                                <div className="flex items-center gap-3">
                                    <UserButton />

                                    <span className="text-sm font-semibold text-gray-700">
                                        Minha conta
                                    </span>
                                </div>
                            </SignedIn>
                        </div>

                        {/* Mobile Developer Credit */}
                        <div className="flex items-center justify-center pt-1">
                            <p className="text-xs text-gray-400 text-center">
                                Desenvolvido pela{" "}
                                <a
                                    href="https://synctechx.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeMenu}
                                    className="inline-flex items-center gap-1 font-semibold text-gray-500 hover:text-[#fe5933] transition-colors"
                                >
                                    SyncTechX
                                    <ExternalLink
                                        size={11}
                                        strokeWidth={2}
                                    />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;