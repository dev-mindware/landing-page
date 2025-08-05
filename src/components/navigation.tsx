"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  NavbarLogo,
  NavbarButton,
  Icon,
} from "@/components";
import { Button } from "./ui/button";

interface NavigationItem {
  name: string;
  link: string; // Ex: "#about"
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: "primary" | "secondary" | "dark";
}

export const Navigation = ({
  items,
  className,
  showCTA = true,
  ctaText = "Get Started",
  ctaHref = "/signup",
  ctaVariant = "primary",
}: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScrollTo = (link: string) => {
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Elemento não encontrado para o link: ${link}`);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileItemClick = (link: string) => {
    handleScrollTo(link);
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const ThemeToggle = ({ isMobile = false }: { isMobile?: boolean }) => {
    if (!isMounted) return null;
    return (
      <Button
        onClick={toggleTheme}
        variant="ghost"
        className="z-10"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Icon name="Sun" className="h-4 w-4" />
        ) : (
          <Icon name="Moon" className="h-4 w-4" />
        )}
        {isMobile && (
          <span className="ml-2">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        )}
      </Button>
    );
  };

  return (
    <Navbar className={className}>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <div className="flex items-center gap-4">
          {items.map((item, idx) => (
            <button
              key={`nav-${idx}`}
              onClick={() => handleScrollTo(item.link)}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              <span className="relative z-20">{item.name}</span>
              {hovered === idx && (
                <span className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-neutral-800 transition-all" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          {showCTA && (
            <NavbarButton href={ctaHref} variant={ctaVariant}>
              {ctaText}
            </NavbarButton>
          )}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <button
            onClick={handleMobileMenuToggle}
            className="relative z-20 flex h-8 w-8 flex-col items-center justify-center space-y-1 text-black dark:text-white"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transform bg-current transition duration-300 ease-in-out ${
                mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 transform bg-current transition duration-300 ease-in-out ${
                mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          {items.map((item, idx) => (
            <button
              key={`mobile-link-${idx}`}
              onClick={() => handleMobileItemClick(item.link)}
              className="w-full text-left rounded-md px-4 py-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
            >
              {item.name}
            </button>
          ))}

          <div className="mt-4 w-full border-t border-neutral-200 pt-4 dark:border-neutral-700">
            <div className="flex w-full items-center space-x-3">
              <ThemeToggle isMobile />
              {showCTA && (
                <NavbarButton
                  href={ctaHref}
                  variant={ctaVariant}
                  className="flex-1 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {ctaText}
                </NavbarButton>
              )}
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Navigation;
