import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0021A5] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="GatorEx Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-blue-200 text-sm">
              The trusted marketplace for UF students.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Browse</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><a href="https://gatorex.app?category=textbooks" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Textbooks</a></li>
              <li><a href="https://gatorex.app?category=furniture" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Furniture</a></li>
              <li><a href="https://gatorex.app?category=electronics" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Electronics</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Support</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/safety" className="hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><span>help@gatorex.com</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-200 text-sm">
            <p>&copy; 2025 GatorEx. Made with 🧡 by UF students for UF students.</p>
            <a 
              href="https://gatorex.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#FF6900] to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm mt-4 md:mt-0"
            >
              Browse Listings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}