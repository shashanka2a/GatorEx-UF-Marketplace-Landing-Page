import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, MapPin, Heart, Flame } from "lucide-react";
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
        <div className="flex justify-between items-end mb-16 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Flame className="w-8 h-8 text-[#FF6900]" />
              <h2 className="text-5xl font-bold text-gray-900">
                Hot Listings
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl">
              Fresh finds from your fellow Gators - updated in real-time
            </p>
          </div>
          <Button 
            className="bg-gradient-to-r from-[#0021A5] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => window.open('https://app.gatorex.shop', '_blank')}
          >
            View All Listings
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <Card 
              key={listing.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white shadow-sm hover:scale-105 animate-fade-in-up relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Featured Badge */}
                {listing.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-[#FF6900] to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white shadow-lg">
                      <Flame className="w-3 h-3 mr-1" />
                      HOT
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white shadow-lg">
                    {listing.category}
                  </Badge>
                </div>
                
                <div className="absolute top-4 right-16">
                  <Button size="icon" className="w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border-0 group-hover:scale-110 transition-all duration-300">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                  </Button>
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-green-500 hover:bg-green-500 text-white shadow-lg">
                    {listing.condition}
                  </Badge>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-xl text-gray-900 line-clamp-2 group-hover:text-[#0021A5] transition-colors duration-300">
                    {listing.title}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#FF6900] to-orange-500 bg-clip-text text-transparent">
                      ${listing.price}
                    </span>
                    {listing.category === "Sublets" && (
                      <span className="text-sm font-medium text-gray-500">/month</span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-[#FF6900]" />
                    <span className="font-medium">{listing.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-[#0021A5]" />
                      <span>{listing.timeAgo}</span>
                    </div>
                    <span className="text-gray-600 font-medium">
                      by {listing.seller}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 max-w-4xl mx-auto shadow-lg">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Can&apos;t Find What You Need?
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Post a &ldquo;wanted&rdquo; listing and let sellers come to you! Our community of Gators 
                will help you find exactly what you&apos;re looking for.
              </p>
              <Button 
                className="bg-gradient-to-r from-[#FF6900] to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => window.open('https://app.gatorex.shop/sell', '_blank')}
              >
                Post Your Wants
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}