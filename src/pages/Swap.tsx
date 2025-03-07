
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import {
  ArrowDownUp,
  Settings,
  Info,
  ChevronDown,
  BarChart3,
  ExternalLink,
} from 'lucide-react';
import GlassPanel from '@/components/ui/GlassPanel';
import AnimatedCard from '@/components/ui/AnimatedCard';

const cryptoOptions = [
  { 
    value: 'eth', 
    label: 'Ethereum', 
    symbol: 'ETH', 
    icon: '/placeholder.svg', 
    balance: '1.45',
    price: 3210.75
  },
  { 
    value: 'usdt', 
    label: 'Tether', 
    symbol: 'USDT', 
    icon: '/placeholder.svg', 
    balance: '2500.00',
    price: 1.00
  },
  { 
    value: 'sol', 
    label: 'Solana', 
    symbol: 'SOL', 
    icon: '/placeholder.svg', 
    balance: '22.5',
    price: 128.32
  },
  { 
    value: 'bnb', 
    label: 'Binance Coin', 
    symbol: 'BNB', 
    icon: '/placeholder.svg', 
    balance: '5.2',
    price: 562.18
  },
  { 
    value: 'arb', 
    label: 'Arbitrum', 
    symbol: 'ARB', 
    icon: '/placeholder.svg', 
    balance: '150.75',
    price: 1.23
  },
];

// Mock exchange data
const exchanges = [
  { name: 'Uniswap', rate: '1 ETH = 3210.75 USDT', price: '3210.75' },
  { name: 'SushiSwap', rate: '1 ETH = 3208.50 USDT', price: '3208.50' },
  { name: 'PancakeSwap', rate: '1 ETH = 3215.25 USDT', price: '3215.25' },
  { name: 'dYdX', rate: '1 ETH = 3209.80 USDT', price: '3209.80' },
];

const Swap = () => {
  const [fromToken, setFromToken] = useState(cryptoOptions[0]);
  const [toToken, setToToken] = useState(cryptoOptions[1]);
  const [fromAmount, setFromAmount] = useState('1');
  const [toAmount, setToAmount] = useState('3210.75');
  const [slippage, setSlippage] = useState('0.5');
  
  const handleSwapTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };
  
  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFromAmount(value);
    // Calculate equivalent amount (simplified for demo)
    if (value && !isNaN(parseFloat(value))) {
      const calculatedAmount = (parseFloat(value) * fromToken.price / toToken.price).toFixed(6);
      setToAmount(calculatedAmount);
    } else {
      setToAmount('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container px-4 max-w-6xl">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Token Swap</h1>
            <p className="text-muted-foreground">
              Swap tokens with the best rates across multiple exchanges
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Swap Card */}
            <div className="col-span-1 lg:col-span-2">
              <AnimatedCard className="p-0 overflow-visible">
                <div className="flex justify-between items-center p-6 border-b">
                  <h2 className="font-medium">Swap Tokens</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <BarChart3 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* From Token */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>From</span>
                      <span>Balance: {fromToken.balance} {fromToken.symbol}</span>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="relative flex-grow">
                        <Input
                          type="text"
                          value={fromAmount}
                          onChange={handleFromAmountChange}
                          className="pr-20 h-14"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Button variant="ghost" size="sm" className="h-8 font-medium text-xs">
                            MAX
                          </Button>
                        </div>
                      </div>
                      
                      <Select
                        value={fromToken.value}
                        onValueChange={(value) => {
                          const token = cryptoOptions.find(t => t.value === value);
                          if (token) setFromToken(token);
                        }}
                      >
                        <SelectTrigger className="w-[180px] h-14">
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-muted"></div>
                              <span>{fromToken.symbol}</span>
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {cryptoOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-muted"></div>
                                <span className="font-medium">{option.symbol}</span>
                                <span className="text-muted-foreground text-xs">{option.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* Swap Button */}
                  <div className="flex justify-center -my-2 z-10 relative">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full bg-background border-border h-10 w-10 shadow-sm"
                      onClick={handleSwapTokens}
                    >
                      <ArrowDownUp className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* To Token */}
                  <div className="mt-4 mb-6">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>To</span>
                      <span>Balance: {toToken.balance} {toToken.symbol}</span>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="relative flex-grow">
                        <Input
                          type="text"
                          value={toAmount}
                          readOnly
                          className="pr-4 h-14"
                        />
                      </div>
                      
                      <Select
                        value={toToken.value}
                        onValueChange={(value) => {
                          const token = cryptoOptions.find(t => t.value === value);
                          if (token) setToToken(token);
                        }}
                      >
                        <SelectTrigger className="w-[180px] h-14">
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-muted"></div>
                              <span>{toToken.symbol}</span>
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {cryptoOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-muted"></div>
                                <span className="font-medium">{option.symbol}</span>
                                <span className="text-muted-foreground text-xs">{option.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* Exchange Rate */}
                  <div className="p-3 bg-muted/50 rounded-lg mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        1 {fromToken.symbol} ≈ {(fromToken.price / toToken.price).toFixed(6)} {toToken.symbol}
                      </span>
                      <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs font-normal text-muted-foreground">
                        Best price <ChevronDown className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Slippage */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Slippage Tolerance</span>
                      <div className="flex gap-2">
                        <Button 
                          variant={slippage === '0.1' ? 'secondary' : 'outline'} 
                          size="sm"
                          className="h-7 px-2 text-xs"
                          onClick={() => setSlippage('0.1')}
                        >
                          0.1%
                        </Button>
                        <Button 
                          variant={slippage === '0.5' ? 'secondary' : 'outline'} 
                          size="sm"
                          className="h-7 px-2 text-xs"
                          onClick={() => setSlippage('0.5')}
                        >
                          0.5%
                        </Button>
                        <Button 
                          variant={slippage === '1.0' ? 'secondary' : 'outline'} 
                          size="sm"
                          className="h-7 px-2 text-xs"
                          onClick={() => setSlippage('1.0')}
                        >
                          1.0%
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full h-12 rounded-xl" size="lg">
                    Swap
                  </Button>
                </div>
              </AnimatedCard>
            </div>
            
            {/* Exchange Rates Panel */}
            <div className="col-span-1">
              <AnimatedCard className="p-0">
                <div className="p-6 border-b">
                  <h2 className="font-medium">Available Exchanges</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {exchanges.map((exchange, index) => (
                      <div 
                        key={index} 
                        className={`p-4 rounded-lg border ${index === 2 ? 'bg-primary/5 border-primary/20' : ''}`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{exchange.name}</span>
                          {index === 2 && (
                            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                              Best Rate
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">{exchange.rate}</div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">
                            You get: {(parseFloat(fromAmount) * parseFloat(exchange.price)).toFixed(2)} USDT
                          </span>
                          <Button variant="ghost" size="sm" className="h-7 gap-1 px-2 text-xs">
                            View <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Transaction Details</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Route</span>
                          <span>ETH → USDT</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Gas Fee</span>
                          <span>~$5.23</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Price Impact</span>
                          <span className="text-green-500">0.05%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-3 rounded-lg text-xs text-muted-foreground">
                      <div className="flex gap-2 items-start">
                        <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>
                          SwapNFT automatically routes your trade across multiple exchanges to get the best price and lowest fees.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Swap;
