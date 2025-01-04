"use client";

import ThemeSwitch from "@/components/landing/landing-themeswitch";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function LandingHeader() {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm pb-4 dark:border-b-white/10">
      <div className="mx-auto flex items-center justify-between px-4 md:px-16 lg:px-32 mt-6">
        <div className="text-3xl font-bold text-center p-2">LeetLens</div>

        <nav className="hidden md:flex items-center justify-center md:gap-10 text-black/60 dark:text-white/60">
          <Link
            href="/"
            className="whitespace-nowrap hover:text-black dark:hover:text-white transition-colors"
          >
            Platforms
          </Link>
          <Link
            href="/"
            className="whitespace-nowrap hover:text-black dark:hover:text-white transition-colors"
          >
            Blogs
          </Link>
          <Link
            href="/"
            className="whitespace-nowrap hover:text-black dark:hover:text-white transition-colors"
          >
            Trending DSA Sheets
          </Link>
          <Link
            href="/"
            className="whitespace-nowrap hover:text-black dark:hover:text-white transition-colors"
          >
            Resources
          </Link>
        </nav>

        <div className="flex items-center justify-end gap-4">
          <ThemeSwitch />
          {session ? (
            <Link href="/dashboard">
              <button className="bg-black whitespace-nowrap text-white/90 dark:bg-white dark:text-black px-5 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </Link>
          ) : (
            <Link href="/signup">
              <button className="bg-black whitespace-nowrap text-white/90 dark:bg-white dark:text-black px-5 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:opacity-90 transition-opacity">
                Signup for free
              </button>
            </Link>
          )}
          <button className="md:hidden p-2.5 hover:bg-accent rounded-md transition-colors">
            <Menu className="md:hidden h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
