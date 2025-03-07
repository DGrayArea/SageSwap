
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, Database, BarChart4, Coins, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassPanel from '../ui/GlassPanel';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      <div className="absolute top-24 -left-24 w-64 h-64 rounded-full bg-primary/5 filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 filter blur-3xl animate-pulse-subtle"></div>
      
      <div className="relative container px-4 z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background mb-6 text-xs font-medium animate-fade-in">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Launching Soon — Join the Waitlist
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            The Ultimate <span className="text-primary">Web3</span> Aggregator Platform
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-in animate-delay-100">
            Swap tokens with perfect arbitrage, trade NFTs, launch your own tokens and collections across multiple blockchains — all in one powerful platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in animate-delay-200">
            <Button size="lg" className="rounded-full px-6 h-12">
              Launch App <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-6 h-12">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full mt-4">
            <Link to="/swap" className="group">
              <GlassPanel className="p-6 transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Token Swaps</h3>
                  <p className="text-sm text-muted-foreground">Aggregated swaps with best rates</p>
                  <ArrowUpRight className="h-4 w-4 mt-2 opacity-0 group-hover:opacity-70 transition-opacity" />
                </div>
              </GlassPanel>
            </Link>
            
            <Link to="/nft-marketplace" className="group">
              <GlassPanel className="p-6 transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">NFT Marketplace</h3>
                  <p className="text-sm text-muted-foreground">Buy, sell, and trade NFTs</p>
                  <ArrowUpRight className="h-4 w-4 mt-2 opacity-0 group-hover:opacity-70 transition-opacity" />
                </div>
              </GlassPanel>
            </Link>
            
            <Link to="/token-launchpad" className="group">
              <GlassPanel className="p-6 transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Token & NFT Creation</h3>
                  <p className="text-sm text-muted-foreground">Launch your own tokens & NFTs</p>
                  <ArrowUpRight className="h-4 w-4 mt-2 opacity-0 group-hover:opacity-70 transition-opacity" />
                </div>
              </GlassPanel>
            </Link>
            
            <Link to="/trading-bot" className="group">
              <GlassPanel className="p-6 transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                    <BarChart4 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Trading Bot</h3>
                  <p className="text-sm text-muted-foreground">Automated trading strategies</p>
                  <ArrowUpRight className="h-4 w-4 mt-2 opacity-0 group-hover:opacity-70 transition-opacity" />
                </div>
              </GlassPanel>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
