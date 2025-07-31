"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  NavbarLogo,
  NavbarButton,
  Icon,
} from "@/components"; // Ajuste o caminho conforme sua estrutura
import { Button } from "./ui/button";

interface NavigationItem {
  name: string;
  link: string;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: "primary" | "secondary" | "dark" | "gradient";
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

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileItemClick = () => {
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const ThemeToggle = ({ isMobile = false }: { isMobile?: boolean }) => (
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

  return (
    <Navbar className={className}>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={items} />
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
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={handleMobileItemClick}
              className="w-full rounded-md px-4 py-3 text-left text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
            >
              {item.name}
            </a>
          ))}
          
          <div className="mt-4 w-full border-t border-neutral-200 pt-4 dark:border-neutral-700">
            <div className="flex w-full items-center space-x-3">
              <ThemeToggle isMobile />
              {showCTA && (
                <NavbarButton
                  href={ctaHref}
                  variant={ctaVariant}
                  className="flex-1 text-center"
                  onClick={handleMobileItemClick}
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

// Exemplo de uso:
export default Navigation;