import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, MapPin, Heart, Flame, Search } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

const listings = [
  {
    id: 1,
    title: "IKEA Study Desk - Perfect Condition",
    price: 45,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    category: "Furniture",
    location: "Norman Hall",
    timeAgo: "2h ago",
    seller: "Sarah M.",
    condition: "Like New",
    featured: true
  },
  {
    id: 2,
    title: "Calculus Early Transcendentals 8th Ed",
    price: 120,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
    category: "Textbooks", 
    location: "Library West",
    timeAgo: "4h ago",
    seller: "Mike R.",
    condition: "Good"
  },
  {
    id: 3,
    title: "MacBook Pro 13\" 2021 - M1 Chip",
    price: 800,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    category: "Electronics",
    location: "Reitz Union",
    timeAgo: "6h ago", 
    seller: "Alex P.",
    condition: "Excellent",
    featured: true
  },
  {
    id: 4,
    title: "Trek Mountain Bike - Great for Campus",
    price: 180,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
    category: "Bikes",
    location: "Gator Corner",
    timeAgo: "8h ago",
    seller: "Emma K.",
    condition: "Good"
  },
  {
    id: 5,
    title: "2BR/2BA Sublet - Summer Available",
    price: 650,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    category: "Sublets",
    location: "Midtown",
    timeAgo: "12h ago",
    seller: "James L.",
    condition: "Monthly"
  },
  {
    id: 6,
    title: "iPhone 14 Pro - Unlocked",
    price: 600,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    category: "Electronics",
    location: "Student Gov",
    timeAgo: "1d ago",
    seller: "Maria S.",
    condition: "Like New"
  }
];

export default function LiveListings() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h2 className="text-5xl font-bold text-gray-900">
                Live Marketplace
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get ready for the most trusted marketplace experience at UF
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-16 text-center">
          <div className="space-y-8">
            <div className="w-24 h-24 bg-gradient-to-r from-[#0021A5] to-[#FF6900] rounded-full flex items-center justify-center mx-auto">
              <Search className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-gray-900">
                Active Listings
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Browse real listings from verified UF students. Find what you need or sell what you don&apos;t.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-[#FF6900] to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => window.open('https://app.gatorex.shop', '_blank')}
              >
                Browse Listings
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-[#0021A5] text-[#0021A5] hover:bg-[#0021A5] hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => window.open('https://app.gatorex.shop/sell', '_blank')}
              >
                Start Selling
              </Button>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
}