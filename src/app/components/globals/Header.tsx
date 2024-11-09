"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeSwitch from "@components/globals/ThemeSwitch";
import Link from "next/link";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]" />

      <div className="top-0 z-10 h-16 pt-6" style={{ position: "sticky" }}>
        <div className="sm:px-8 w-full">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex md:flex-1">
                    <div
                      className={`${pathname === "/" ? "hidden" : "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"}`}
                    >
                      <Link
                        className={`cursor-pointer pointer-events-auto`}
                        href="/"
                      >
                        <Image
                          src="/profile-pic.jpeg"
                          height={800}
                          width={800}
                          alt="Avatar"
                          className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-1 lg:justify-end md:justify-center justify-evenly">
                    <div
                      hidden
                      style={{
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: 0,
                        display: "none",
                      }}
                    />
                    <nav className="pointer-events-auto block">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-semibold text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        <li>
                          <Link
                            className={`relative block px-3 py-2 transition ${
                              pathname === "/about"
                                ? "text-sky-700"
                                : "hover:text-sky-700 dark:hover:text-sky-600"
                            }`}
                            href="/about"
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`relative block px-3 py-2 transition ${
                              pathname === "/work"
                                ? "text-sky-700"
                                : "hover:text-sky-700 dark:hover:text-sky-600"
                            }`}
                            href="/work"
                          >
                            Work
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`relative block px-3 py-2 transition ${
                              pathname === "/blog"
                                ? "text-sky-700"
                                : "hover:text-sky-700 dark:hover:text-sky-600"
                            }`}
                            href="/blog"
                          >
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <ThemeSwitch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
