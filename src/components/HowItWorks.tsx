import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Search, MessageCircle, Handshake, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover & Search",
    description: "Browse verified listings from UF students. Use smart filters to find exactly what you need on campus.",
    color: "bg-blue-50 text-blue-600",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: MessageCircle,
    title: "Connect Safely", 
    description: "Message sellers through our secure platform. Ask questions, negotiate, and arrange meetups safely.",
    color: "bg-orange-50 text-orange-600",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: Handshake,
    title: "Meet & Exchange",
    description: "Meet at designated safe campus locations. Inspect items thoroughly before completing transactions.",
    color: "bg-green-50 text-green-600",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: Star,
    title: "Rate & Build Trust",
    description: "Leave honest reviews to help build our trusted Gator community and earn credibility badges.",
    color: "bg-purple-50 text-purple-600",
    gradient: "from-purple-500 to-purple-600"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            How GatorEx Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Buying and selling with fellow Gators has never been easier, safer, or more trusted
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                <Card className="group p-10 text-center h-full bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border-0 hover:border-2 hover:border-gray-100 transform hover:scale-105 animate-fade-in-up relative overflow-hidden"
                      style={{ animationDelay: `${index * 200}ms` }}>
                  
                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 space-y-8">
                    <div className="relative">
                      <div className={`inline-flex p-5 rounded-3xl ${step.color} mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                        <Icon className="w-10 h-10" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-[#FF6900] to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-bold text-2xl text-gray-900 group-hover:text-[#0021A5] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-1 bg-gradient-to-r from-[#FF6900] to-orange-400 rounded-full shadow-sm"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-[#0021A5] to-[#FF6900] text-white rounded-3xl p-12 max-w-5xl mx-auto shadow-2xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">Join the Gator Marketplace</h3>
                <p className="text-xl opacity-95 max-w-2xl mx-auto leading-relaxed">
                  Thousands of UF students are already saving money and finding great deals. 
                  Your next perfect find is just a search away.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  className="bg-white text-[#0021A5] hover:bg-gray-100 px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => window.open('https://gatorex.app', '_blank')}
                >
                  Start Shopping
                </Button>
                <Button 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0021A5] px-10 py-4 text-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => window.open('https://gatorex.app/sell', '_blank')}
                >
                  List Your Items
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}