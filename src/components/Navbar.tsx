"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut } from "lucide-react";

import Name from "@/assets/name.svg";
import { ModeToggle } from "./ui/ModeToggle";
import { useRouter } from "next/navigation";
export default function Navbar() {
  return (
    <nav className="sticky z-50 top-0 bg-background border-b">
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link href="/" className="dark:invert">
          <div className="flex group gap-4 items-center justify-center">
            <Image
              alt="Router.so Icon"
              width={24}
              height={24}
              className="group-hover:animate-spin hidden sm:block"
              src={Name}
            />
            <Image
              alt="Router.so Wordmark"
              width={148}
              height={24}
              className="pb-1"
              src={Name}
            />
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="https://app.router.so"
            className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 hidden md:block"
          >
            Sign Up
          </Link>
          <Link
            href="https://app.router.so"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
export function AuthenticatedNavbar() {
  const router = useRouter();

  return (
    <nav className="sticky z-50 top-0 bg-background border-b">
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link href="/" className="dark:invert">
          <div className="flex group gap-4 items-center justify-center">
            <Image
              alt="Router.so Icon"
              width={24}
              height={24}
              className="group-hover:animate-spin hidden sm:block"
              src={Name}
            />
            <Image
              alt="Router.so Wordmark"
              width={148}
              height={24}
              className="pb-1"
              src={Name}
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                Platforms <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem onClick={() => router.push("/lt")}>
                Leetcode
              </DropdownMenuItem>
              <DropdownMenuItem>Codeforces</DropdownMenuItem>
              <DropdownMenuItem>Codechef</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                Blogs <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem>Latest Posts</DropdownMenuItem>
              <DropdownMenuItem>Categories</DropdownMenuItem>
              <DropdownMenuItem>Archives</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                Resources <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Tutorials</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
