import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-xl mb-4"
            >
              <span className="text-primary">Ξ</span>
              <span>SwapNFT</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 max-w-xs">
              All-in-one platform for swapping, creating and trading tokens and
              NFTs with optimal arbitrage opportunities across multiple chains.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Discord</span>
                <Discord className="h-5 w-5" />
              </a> */}
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">Github</span>
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-3">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/swap"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Token Swap
                </Link>
              </li>
              <li>
                <Link
                  to="/arbitrage-swap"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Arbitrage
                </Link>
              </li>
              <li>
                <Link
                  to="/nft-marketplace"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  NFT Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/sales-overview"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Sales Overview
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-3">Create</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/token-creation"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Create Token
                </Link>
              </li>
              <li>
                <Link
                  to="/nft-creation"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Create NFT
                </Link>
              </li>
              <li>
                <Link
                  to="/token-launchpad"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Token Launchpad
                </Link>
              </li>
              <li>
                <Link
                  to="/nft-launchpad"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  NFT Launchpad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-3">Trading</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/trading-bot"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Trading Bot
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Strategies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SwapNFT. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              to="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
