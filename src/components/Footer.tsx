import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0021A5] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#FF6900] to-white rounded-lg flex items-center justify-center">
                <span className="text-[#0021A5] font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold">GatorEx</span>
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
              <li><a href="#" className="hover:text-white transition-colors">Textbooks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Furniture</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bikes & Transport</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sublets</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Support</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Report an Issue</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
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
        
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-blue-200">
          <p>&copy; 2024 GatorEx. Made with 🧡 by UF students for UF students.</p>
          <p className="mt-2 md:mt-0">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}