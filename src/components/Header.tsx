import { Button } from "./ui/button";
import { Search, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="GatorEx Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#buy" className="text-gray-600 hover:text-[#FF6900] transition-colors">Buy</a>
            <a href="#sell" className="text-gray-600 hover:text-[#FF6900] transition-colors">Sell</a>
            <a href="#categories" className="text-gray-600 hover:text-[#FF6900] transition-colors">Categories</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-[#FF6900] transition-colors">How it Works</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2 min-w-[300px]">
            <Search className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search furniture, textbooks, bikes..." 
              className="bg-transparent border-none outline-none flex-1 text-sm"
            />
          </div>
          
          <Button variant="outline" className="hidden md:flex">
            Sign In
          </Button>
          
          <Button className="bg-[#FF6900] hover:bg-[#e55a00] text-white">
            Post Listing
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}