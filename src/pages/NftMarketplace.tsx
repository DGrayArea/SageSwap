
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Search,
  Grid3X3,
  LayoutList,
  SlidersHorizontal,
  ChevronDown,
  Gem,
  Heart,
  EyeIcon,
  ArrowUpRight,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';

// Mock NFT data
const nftCollections = [
  {
    id: 'bored-ape',
    name: 'Bored Ape Yacht Club',
    items: 10000,
    floorPrice: 18.5,
    volume: 254.3,
    chain: 'eth',
    verified: true,
    banner: '/placeholder.svg',
  },
  {
    id: 'azuki',
    name: 'Azuki',
    items: 10000,
    floorPrice: 10.2,
    volume: 130.5,
    chain: 'eth',
    verified: true,
    banner: '/placeholder.svg',
  },
  {
    id: 'degen-toonz',
    name: 'Degen Toonz',
    items: 8888,
    floorPrice: 1.8,
    volume: 42.3,
    chain: 'eth',
    verified: true,
    banner: '/placeholder.svg',
  },
  {
    id: 'okay-bears',
    name: 'Okay Bears',
    items: 10000,
    floorPrice: 59.5,
    volume: 1205.8,
    chain: 'sol',
    verified: true,
    banner: '/placeholder.svg',
  },
];

const nfts = [
  {
    id: 'nft-1',
    name: 'Bored Ape #1234',
    collection: 'Bored Ape Yacht Club',
    price: 24.5,
    currency: 'ETH',
    image: '/placeholder.svg',
    likes: 45,
    views: 230,
    chain: 'eth',
  },
  {
    id: 'nft-2',
    name: 'Azuki #8743',
    collection: 'Azuki',
    price: 12.8,
    currency: 'ETH',
    image: '/placeholder.svg',
    likes: 32,
    views: 189,
    chain: 'eth',
  },
  {
    id: 'nft-3',
    name: 'Degen Toonz #4212',
    collection: 'Degen Toonz',
    price: 2.4,
    currency: 'ETH',
    image: '/placeholder.svg',
    likes: 18,
    views: 112,
    chain: 'eth',
  },
  {
    id: 'nft-4',
    name: 'Okay Bear #7653',
    collection: 'Okay Bears',
    price: 75.2,
    currency: 'SOL',
    image: '/placeholder.svg',
    likes: 65,
    views: 310,
    chain: 'sol',
  },
  {
    id: 'nft-5',
    name: 'CryptoPunk #3456',
    collection: 'CryptoPunks',
    price: 68.9,
    currency: 'ETH',
    image: '/placeholder.svg',
    likes: 87,
    views: 425,
    chain: 'eth',
  },
  {
    id: 'nft-6',
    name: 'Moonbird #9012',
    collection: 'Moonbirds',
    price: 15.3,
    currency: 'ETH',
    image: '/placeholder.svg',
    likes: 29,
    views: 178,
    chain: 'eth',
  },
  {
    id: 'nft-7',
    name: 'DeGods #3421',
    collection: 'DeGods',
    price: 350.5,
    currency: 'SOL',
    image: '/placeholder.svg',
    likes: 53,
    views: 267,
    chain: 'sol',
  },
  {
    id: 'nft-8',
    name: 'Clone X #8732',
    collection: 'Clone X',
    price: 8.7,
    currency: 'ETH',
    image: '/placeholder.svg',
    likes: 41,
    views: 195,
    chain: 'eth',
  },
];

const NftMarketplace = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState('trending');
  const [selectedBlockchain, setSelectedBlockchain] = useState('all');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container px-4">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">NFT Marketplace</h1>
            <p className="text-muted-foreground">
              Discover, collect, and sell extraordinary NFTs across multiple blockchains
            </p>
          </div>
          
          {/* Top Collections */}
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Top Collections</h2>
              <Button variant="ghost" className="text-sm gap-1">
                View All <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nftCollections.map((collection) => (
                <Link to={`/nft-collections/${collection.id}`} key={collection.id}>
                  <AnimatedCard 
                    className="p-0 overflow-hidden group" 
                    delay={1}
                    hoverEffect={false}
                  >
                    <div className="h-32 bg-muted relative overflow-hidden">
                      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                        <img 
                          src={collection.banner} 
                          alt={collection.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
                          {collection.name}
                        </h3>
                        {collection.verified && (
                          <div className="bg-primary/10 text-primary p-1 rounded-full">
                            <Gem className="h-3 w-3" />
                          </div>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground mb-1">Floor Price</div>
                          <div className="font-medium">{collection.floorPrice} ETH</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground mb-1">24h Volume</div>
                          <div className="font-medium">{collection.volume} ETH</div>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                </Link>
              ))}
            </div>
          </section>
          
          {/* Marketplace */}
          <section>
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mb-10">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="top">Top</TabsTrigger>
                  <TabsTrigger value="new">New</TabsTrigger>
                  <TabsTrigger value="art">Art</TabsTrigger>
                  <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
                </TabsList>
                
                <div className="flex items-center gap-2">
                  <Button 
                    variant={viewMode === 'grid' ? 'secondary' : 'outline'} 
                    size="icon" 
                    className="h-9 w-9"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant={viewMode === 'list' ? 'secondary' : 'outline'} 
                    size="icon" 
                    className="h-9 w-9"
                    onClick={() => setViewMode('list')}
                  >
                    <LayoutList className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex-grow">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by collection, NFT, or artist..." 
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Select 
                    value={selectedBlockchain} 
                    onValueChange={setSelectedBlockchain}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Blockchain" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Chains</SelectItem>
                      <SelectItem value="eth">Ethereum</SelectItem>
                      <SelectItem value="sol">Solana</SelectItem>
                      <SelectItem value="bsc">BSC</SelectItem>
                      <SelectItem value="arb">Arbitrum</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline" className="gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
              
              <TabsContent value="trending" className="mt-0">
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
                  {nfts.map((nft, index) => (
                    viewMode === 'grid' ? (
                      <Link to={`/nft-detail/${nft.id}`} key={nft.id}>
                        <AnimatedCard 
                          className="p-0 overflow-hidden group"
                          delay={index % 5 + 1}
                          hoverEffect={false}
                        >
                          <div className="relative aspect-square bg-muted overflow-hidden">
                            <img 
                              src={nft.image} 
                              alt={nft.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-3 right-3 flex space-x-2">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                              >
                                <Heart className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
                                  {nft.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">{nft.collection}</p>
                              </div>
                            </div>
                            <div className="flex justify-between items-end mt-4">
                              <div>
                                <p className="text-xs text-muted-foreground">Current price</p>
                                <p className="font-medium">{nft.price} {nft.currency}</p>
                              </div>
                              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                                <div className="flex items-center gap-1">
                                  <Heart className="h-3 w-3" /> {nft.likes}
                                </div>
                                <div className="flex items-center gap-1">
                                  <EyeIcon className="h-3 w-3" /> {nft.views}
                                </div>
                              </div>
                            </div>
                          </div>
                        </AnimatedCard>
                      </Link>
                    ) : (
                      <Link to={`/nft-detail/${nft.id}`} key={nft.id}>
                        <AnimatedCard className="flex overflow-hidden group" delay={1} hoverEffect={false}>
                          <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0">
                            <img 
                              src={nft.image} 
                              alt={nft.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="p-4 flex-grow">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium group-hover:text-primary transition-colors">
                                  {nft.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">{nft.collection}</p>
                              </div>
                              <p className="font-medium">{nft.price} {nft.currency}</p>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground text-sm mt-2">
                              <div className="flex items-center gap-1">
                                <Heart className="h-3 w-3" /> {nft.likes}
                              </div>
                              <div className="flex items-center gap-1">
                                <EyeIcon className="h-3 w-3" /> {nft.views}
                              </div>
                            </div>
                          </div>
                        </AnimatedCard>
                      </Link>
                    )
                  ))}
                </div>
                
                <div className="mt-10 flex justify-center">
                  <Button variant="outline" size="lg">
                    Load More
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="top" className="mt-0">
                <div className="flex items-center justify-center py-12">
                  <p className="text-muted-foreground">Top NFTs will be displayed here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="new" className="mt-0">
                <div className="flex items-center justify-center py-12">
                  <p className="text-muted-foreground">New NFTs will be displayed here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="art" className="mt-0">
                <div className="flex items-center justify-center py-12">
                  <p className="text-muted-foreground">Art NFTs will be displayed here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="collectibles" className="mt-0">
                <div className="flex items-center justify-center py-12">
                  <p className="text-muted-foreground">Collectible NFTs will be displayed here</p>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NftMarketplace;
