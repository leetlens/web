"use client";

import ThemeSwitch from "@/components/landing/landing-themeswitch";
import { Menu, LogOut, User } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function LandingHeader() {
  //   const { data: session } = useSession();
  const session = {
    user: {
      image: "",
      name: "John Doe",
    },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm dark:border-b-white/10">
      <div className="mx-auto flex items-center justify-between px-4 md:px-16 lg:px-32 py-5">
        <Link
          href="/"
          className="text-3xl font-bold text-center p-2 hover:opacity-80 transition-opacity"
        >
          LeetLens
        </Link>
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
          {/* {session ? ( */}
          {true ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full hover:opacity-80 transition-opacity"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary flex bg-white/50 items-center justify-center text-primary-foreground">
                    {session.user?.name?.[0] || "U"}
                  </div>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-40 bg-black border border-white/20"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/profile"
                    className="cursor-pointer flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => signOut()}
                  className="cursor-pointer text-red-600 flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
