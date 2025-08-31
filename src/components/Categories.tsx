import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { 
  BookOpen, 
  Laptop, 
  Sofa, 
  Bike, 
  Home, 
  Shirt
} from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    name: "Textbooks",
    count: "Coming Soon",
    color: "bg-blue-50 text-blue-600",
    gradient: "from-blue-500 to-blue-600",
    description: "Course books, study guides, novels",
    category: "textbooks"
  },
  {
    icon: Sofa,
    name: "Furniture",
    count: "Coming Soon", 
    color: "bg-orange-50 text-orange-600",
    gradient: "from-orange-500 to-orange-600",
    description: "Desks, chairs, beds, storage",
    category: "furniture"
  },
  {
    icon: Laptop,
    name: "Electronics",
    count: "Coming Soon",
    color: "bg-purple-50 text-purple-600",
    gradient: "from-purple-500 to-purple-600", 
    description: "Laptops, phones, tablets, tech",
    category: "electronics"
  },
  {
    icon: Bike,
    name: "Bikes & Transport",
    count: "Coming Soon",
    color: "bg-green-50 text-green-600",
    gradient: "from-green-500 to-green-600",
    description: "Bicycles, scooters, skateboards",
    category: "bikes"
  },
  {
    icon: Home,
    name: "Sublets",
    count: "Coming Soon",
    color: "bg-red-50 text-red-600",
    gradient: "from-red-500 to-red-600",
    description: "Apartments, rooms, housing",
    category: "sublets"
  },
  {
    icon: Shirt,
    name: "Clothing & Gear",
    count: "Coming Soon",
    color: "bg-pink-50 text-pink-600",
    gradient: "from-pink-500 to-pink-600",
    description: "UF apparel, casual wear, formal",
    category: "clothing"
  }
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you need from fellow Gators across campus
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name} 
                className="group p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => window.open(`https://app.gatorex.shop?category=${category.category}`, '_blank')}
              >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center space-y-6 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="relative">
                    <div className={`inline-flex p-6 rounded-3xl ${category.color} group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6900] to-[#0021A5] rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-bold text-2xl text-gray-900 group-hover:text-[#0021A5] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-[#FF6900] font-bold text-lg">
                      {category.count}
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16 animate-fade-in-up">
          <Button 
            className="bg-gradient-to-r from-[#0021A5] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => window.open('https://app.gatorex.shop', '_blank')}
          >
            Explore All Categories
          </Button>
        </div>
      </div>
    </section>
  );
}