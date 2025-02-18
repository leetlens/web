"use client";

import ThemeSwitch from "@/components/landing/landing-themeswitch";
import {
  Menu,
  LogOut,
  User,
  ChevronDown,
  Code as CodeIcon,
  Sword as SwordIcon,
  BookOpen as BookOpenIcon,
  BrainCircuit as BrainCircuitIcon,
  GraduationCap as GraduationCapIcon,
  Calendar as CalendarIcon,
} from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

const platformsDropdown: DropdownItem[] = [
  {
    name: "LeetCode",
    href: "/platform/leetcode",
    description: "The most popular coding platform",
  },
  {
    name: "Coding Ninjas",
    href: "/platform/codingninjas",
    description: "Learn DSA with structured paths",
  },
  {
    name: "GeeksforGeeks",
    href: "/platform/geeksforgeeks",
    description: "Comprehensive DSA practice",
  },
];

const dsaSheetsDropdown: DropdownItem[] = [
  {
    name: "NeetCode",
    href: "/sheets/neetcode",
    description: "Curated list of top coding problems",
  },
  {
    name: "Striver",
    href: "/sheets/striver",
    description: "SDE Sheet - Coding Interview Preparation",
  },
];

const resourcesDropdown: DropdownItem[] = [
  {
    name: "Contest Calendar",
    href: "/resources/contest-calendar",
    description: "Stay updated with upcoming coding contests",
  },
];

export default function LandingHeader() {
  //   const { data: session } = useSession();
  const session = {
    user: {
      image: "",
      name: "John Doe",
    },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm dark:bg-background dark:border-b-white/10">
      <div className="mx-auto flex items-center justify-between px-4 md:px-16 lg:px-52 py-5">
        <Link
          href="/"
          className="text-3xl font-bold text-center p-2 hover:opacity-80 transition-opacity"
        >
          LeetLens
        </Link>
        <nav className="hidden md:flex items-center justify-center md:gap-10 text-black/60 dark:text-white/60">
          <div className="relative group">
            <button className="flex items-center gap-1.5 whitespace-nowrap hover:text-black dark:hover:text-white transition-colors">
              Platforms
              <ChevronDown className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-72 backdrop-blur-sm rounded-xl bg-white dark:bg-black shadow-lg shadow-black/10 dark:shadow-white/10 ring-1 ring-black/5 dark:ring-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left group-hover:translate-y-0 translate-y-1">
              <div className="p-3 space-y-0.5">
                {platformsDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-start gap-3 p-3 hover:bg-black/1 dark:hover:bg-white/5 rounded-lg transition-colors group/item"
                  >
                    <div className="mt-1 p-2 rounded-lg bg-black/10 dark:bg-white/10 group-hover/item:bg-primary/10 dark:group-hover/item:bg-primary/20 transition-colors">
                      <div className="w-4 h-4 text-primary/70">
                        {item.name === "LeetCode" && (
                          <CodeIcon className="w-4 h-4" />
                        )}
                        {item.name === "Coding Ninjas" && (
                          <SwordIcon className="w-4 h-4" />
                        )}
                        {item.name === "GeeksforGeeks" && (
                          <BookOpenIcon className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-black dark:text-white group-hover/item:text-primary transition-colors">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 group-hover/item:text-gray-600 dark:group-hover/item:text-gray-300 transition-colors">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/blogs"
            className="whitespace-nowrap hover:text-black dark:hover:text-white transition-colors"
          >
            Blogs
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1.5 whitespace-nowrap hover:text-black dark:hover:text-white transition-colors">
              Trending DSA Sheets
              <ChevronDown className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-72 rounded-xl bg-white dark:bg-black shadow-lg shadow-black/10 dark:shadow-white/10 ring-1 ring-black/5 dark:ring-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left group-hover:translate-y-0 translate-y-1">
              <div className="p-3 space-y-0.5">
                {dsaSheetsDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-start gap-3 p-3 hover:bg-black/1 dark:hover:bg-white/5 rounded-lg transition-colors group/item"
                  >
                    <div className="mt-1 p-2 rounded-lg bg-black/10 dark:bg-white/10 group-hover/item:bg-primary/10 dark:group-hover/item:bg-primary/20 transition-colors">
                      <div className="w-4 h-4 text-primary/70">
                        {item.name === "NeetCode" && (
                          <BrainCircuitIcon className="w-4 h-4" />
                        )}
                        {item.name === "Striver" && (
                          <GraduationCapIcon className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-black dark:text-white group-hover/item:text-primary transition-colors">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 group-hover/item:text-gray-600 dark:group-hover/item:text-gray-300 transition-colors">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1.5 whitespace-nowrap hover:text-black dark:hover:text-white transition-colors">
              Resources
              <ChevronDown className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-72 rounded-xl bg-white dark:bg-black shadow-lg shadow-black/10 dark:shadow-white/10 ring-1 ring-black/5 dark:ring-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left group-hover:translate-y-0 translate-y-1">
              <div className="p-3 space-y-0.5">
                {resourcesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-start gap-3 p-3 hover:bg-black/1 dark:hover:bg-white/5 rounded-lg transition-colors group/item"
                  >
                    <div className="mt-1 p-2 rounded-lg bg-black/10 dark:bg-white/10 group-hover/item:bg-primary/10 dark:group-hover/item:bg-primary/20 transition-colors">
                      <div className="w-4 h-4 text-primary/70">
                        <CalendarIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-black dark:text-white group-hover/item:text-primary transition-colors">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 group-hover/item:text-gray-600 dark:group-hover/item:text-gray-300 transition-colors">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
