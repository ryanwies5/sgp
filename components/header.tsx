"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Info, Mail, Menu, X } from "lucide-react";
import { SimpleThemeToggle } from "@/components/simple-theme-toggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <div className="mr-6">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-5 w-5" />
            <span className="hidden font-bold sm:inline-block">Blog</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary"
            >
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <SimpleThemeToggle />
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col py-4 space-y-3 px-4">
            <Link
              href="/about"
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
