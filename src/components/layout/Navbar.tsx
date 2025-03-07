import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Repeat,
  Gem,
  Rocket,
  BarChart3,
  Menu,
  X,
  Wallet,
} from "lucide-react";

const mainNavLinks = [
  { name: "Home", path: "/" },
  { name: "Swap", path: "/swap" },
  { name: "NFT Marketplace", path: "/nft-marketplace" },
  { name: "Create", path: "/token-creation" },
  { name: "Launchpad", path: "/token-launchpad" },
  { name: "Trading", path: "/trading-bot" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        {
          "bg-background/80 backdrop-blur-lg shadow-sm": scrolled,
          "bg-transparent": !scrolled,
        }
      )}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl tracking-tight transition-colors hover:text-primary"
        >
          <span className="text-primary">Ξ</span>
          <span>SageSwap</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {mainNavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-medium transition-colors hover:text-primary text-sm",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-5 border-primary/20 text-foreground/80 hover:bg-primary/5 hover:text-primary transition-all"
          >
            <Wallet className="mr-2 h-4 w-4" /> Connect
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 p-4 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-4 pt-4">
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg font-medium transition-all",
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted"
                )}
              >
                {link.path === "/" && <LayoutDashboard className="h-5 w-5" />}
                {link.path === "/swap" && <Repeat className="h-5 w-5" />}
                {link.path === "/nft-marketplace" && (
                  <Gem className="h-5 w-5" />
                )}
                {link.path === "/token-creation" && (
                  <Rocket className="h-5 w-5" />
                )}
                {link.path === "/token-launchpad" && (
                  <Rocket className="h-5 w-5" />
                )}
                {link.path === "/trading-bot" && (
                  <BarChart3 className="h-5 w-5" />
                )}
                {link.name}
              </Link>
            ))}
            <Button
              variant="outline"
              size="default"
              className="mt-4 w-full justify-center rounded-lg border-primary/20"
            >
              <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
