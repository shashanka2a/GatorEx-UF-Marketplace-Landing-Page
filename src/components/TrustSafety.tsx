import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, Users, Clock, Award, MessageCircle, QrCode, Mail } from "lucide-react";

const trustFeatures = [
  {
    icon: Mail,
    title: "UF Email Verification", 
    description: "All users verified with official @ufl.edu email addresses for maximum security",
    color: "bg-[#FF6900]/10 text-[#FF6900]",
    featured: true
  },
  {
    icon: Shield,
    title: "Campus Safety First", 
    description: "Meet at designated safe zones across UF campus with security coverage",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Users,
    title: "Student Moderated",
    description: "Community-driven moderation by trusted UF student ambassadors",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Award,
    title: "Verified Sellers",
    description: "Earn trust badges through successful transactions and positive reviews",
    color: "bg-purple-50 text-purple-600"
  }
];

export default function TrustSafety() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Trust Features */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Built for <span className="text-[#FF6900]">Gator</span> Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your safety is our priority. Every feature is designed with UF students in mind, 
            ensuring secure and trusted transactions within our Gator community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className={`group p-8 text-center bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border-0 hover:border-2 ${
                  feature.featured 
                    ? 'hover:border-[#FF6900] ring-2 ring-[#FF6900]/20' 
                    : 'hover:border-gray-200'
                } transform hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-6">
                  <div className="relative">
                    <div className={`inline-flex p-4 rounded-2xl ${feature.color} group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    {feature.featured && (
                      <div className="absolute -top-2 -right-2">
                        <Badge className="bg-[#FF6900] hover:bg-[#FF6900] text-white text-xs px-2 py-1">
                          VERIFIED
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-[#0021A5] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 mb-24 shadow-xl border animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6900] to-orange-500 bg-clip-text text-transparent">12K+</div>
              <div className="text-gray-600 font-medium">Verified Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#0021A5] to-blue-600 bg-clip-text text-transparent">25K+</div>
              <div className="text-gray-600 font-medium">Safe Transactions</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6900] to-orange-500 bg-clip-text text-transparent">4.8★</div>
              <div className="text-gray-600 font-medium">Trust Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#0021A5] to-blue-600 bg-clip-text text-transparent">$2.1M</div>
              <div className="text-gray-600 font-medium">Student Savings</div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}