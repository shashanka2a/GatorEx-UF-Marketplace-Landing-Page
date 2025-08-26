import { Button } from "./ui/button";
import { Search, ArrowRight, Shield } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0021A5] via-[#0021A5]/90 to-[#FF6900] py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF6900] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          {/* Main Headline */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm">
              <Shield className="w-4 h-4" />
              <span>UF Students Only • Verified with @ufl.edu</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              Buy. Sell. <br />
              <span className="bg-gradient-to-r from-[#FF6900] to-orange-300 bg-clip-text text-transparent">
                Go Gators.
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              The trusted marketplace connecting UF students for furniture, textbooks, 
              electronics, bikes, and subletting opportunities.
            </p>
          </div>
          
          {/* Central Search Bar */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6900] to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <div className="flex items-center">
                    <div className="flex-1 relative">
                      <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                      <input
                        type="text"
                        placeholder="Search furniture, textbooks, bikes, sublets..."
                        className="w-full pl-16 pr-6 py-5 rounded-xl border-none outline-none text-lg bg-transparent"
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-[#FF6900] to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white px-8 py-5 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                      Search <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Popular Tags */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-white/70 text-sm">Popular searches:</span>
              {["Textbooks", "IKEA Furniture", "MacBook", "Campus Bike", "Summer Sublet"].map((tag) => (
                <button key={tag} className="px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full text-sm text-white transition-all duration-300 hover:scale-105">
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button className="bg-white text-[#0021A5] hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
              Start Browsing
            </Button>
            <Button variant="outline" className="border-2 border-white text-[#0021A5] bg-white hover:bg-white hover:text-[#0021A5] px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:-translate-y-0.5">
              Post a Listing
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 animate-fade-in-up">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-white">12K+</div>
              <div className="text-white/80">Active Gators</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-white">25K+</div>
              <div className="text-white/80">Items Sold</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-white">4.8★</div>
              <div className="text-white/80">Trust Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}