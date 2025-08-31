import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0021A5] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="GatorEx Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-blue-200">
              The trusted marketplace connecting UF students for buying, selling, and subletting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Categories</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="https://app.gatorex.shop?category=textbooks" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Textbooks</a></li>
              <li><a href="https://app.gatorex.shop?category=furniture" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Furniture</a></li>
              <li><a href="https://app.gatorex.shop?category=electronics" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Electronics</a></li>
              <li><a href="https://app.gatorex.shop?category=bikes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Bikes & Transport</a></li>
              <li><a href="https://app.gatorex.shop?category=sublets" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sublets</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Support</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/safety" className="hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="/report" className="hover:text-white transition-colors">Report an Issue</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact</h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>help@gatorex.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(352) 555-GATOR</span>
              </div>
              <div>
                <p>University of Florida</p>
                <p>Gainesville, FL 32611</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-200 mb-4">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">52K+ UF Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">$10M Market Value</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">4.8★ Trust Rating</span>
              </div>
            </div>
            <a 
              href="https://app.gatorex.shop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#FF6900] to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Launch App
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-200">
            <p>&copy; 2024 GatorEx. Made with 🧡 by UF students for UF students.</p>
            <p className="mt-2 md:mt-0">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}