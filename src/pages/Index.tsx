
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/button';
import { 
  BarChart4, ArrowRight, Layers, Gem, Wallet, Repeat, 
  AreaChart, ShieldCheck
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section className="py-24 bg-secondary/50">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">All-in-One Web3 Platform</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to trade, create and launch tokens and NFTs across multiple chains with optimal profits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedCard delay={1}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Repeat className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Token Aggregator</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Swap cryptocurrencies with the best rates from multiple DEXes in a single transaction.
                  </p>
                  <Button variant="ghost" className="justify-start p-0 hover:bg-transparent hover:text-primary">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </AnimatedCard>
              
              <AnimatedCard delay={2}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Gem className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">NFT Marketplace</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Buy, sell and trade NFTs across Ethereum, Solana, BSC and other major blockchains.
                  </p>
                  <Button variant="ghost" className="justify-start p-0 hover:bg-transparent hover:text-primary">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </AnimatedCard>
              
              <AnimatedCard delay={3}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Token & NFT Creation</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Create and deploy your own tokens and NFT collections on various blockchains with just a few clicks.
                  </p>
                  <Button variant="ghost" className="justify-start p-0 hover:bg-transparent hover:text-primary">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </AnimatedCard>
              
              <AnimatedCard delay={2}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Launchpad Platform</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Launch your token or NFT collection with our comprehensive launchpad services including marketing and liquidity.
                  </p>
                  <Button variant="ghost" className="justify-start p-0 hover:bg-transparent hover:text-primary">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </AnimatedCard>
              
              <AnimatedCard delay={3}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <AreaChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Arbitrage Swaps</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Execute profitable arbitrage trades automatically across DEXes and CEXes to maximize your returns.
                  </p>
                  <Button variant="ghost" className="justify-start p-0 hover:bg-transparent hover:text-primary">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </AnimatedCard>
              
              <AnimatedCard delay={1}>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart4 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Trading Bot</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Automate your trading with sophisticated strategies on new listings from PumpFun, Moonshot, Raydium and more.
                  </p>
                  <Button variant="ghost" className="justify-start p-0 hover:bg-transparent hover:text-primary">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/5 filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/5 filter blur-3xl"></div>
          
          <div className="container px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to elevate your crypto experience?</h2>
              <p className="text-muted-foreground mb-10 text-lg">
                Join thousands of traders and creators who are already using our platform to maximize their opportunities in Web3.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-6">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6">
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Trusted and Secure</h2>
              <p className="text-muted-foreground">
                Building on the foundations of blockchain with enhanced security measures
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Secure Infrastructure</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security protecting your assets and transactions
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Multi-Chain Support</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless operations across Ethereum, BSC, Solana, Arbitrum and more
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Non-Custodial</h3>
                <p className="text-sm text-muted-foreground">
                  You maintain full control of your assets at all times
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
