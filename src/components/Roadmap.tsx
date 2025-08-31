import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, Circle, Clock, Rocket, Users, TrendingUp, Zap } from "lucide-react";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "UF Campus Launch",
    date: "Q1 2025",
    status: "upcoming",
    icon: Rocket,
    color: "bg-[#FF6900]",
    features: [
      "WhatsApp Bot Integration",
      "UF Email Verification",
      "Campus Partnerships",
      "Student Organization Outreach"
    ]
  },
  {
    phase: "Phase 2", 
    title: "Florida Expansion",
    date: "Q2 2025",
    status: "planned",
    icon: TrendingUp,
    color: "bg-[#0021A5]",
    features: [
      "FSU & UCF Launch",
      "Advanced Search Features",
      "User Profiles & Ratings",
      "Campus Events Integration"
    ]
  },
  {
    phase: "Phase 3",
    title: "SEC & National Scale",
    date: "Q3-Q4 2025",
    status: "planned", 
    icon: Users,
    color: "bg-green-600",
    features: [
      "SEC Universities Rollout",
      "National Expansion",
      "Revenue Model Launch",
      "Premium Features"
    ]
  }
];

const milestones = [
  {
    metric: "1.2K",
    label: "Beta Users",
    status: "current",
    description: "Pre-Launch"
  },
  {
    metric: "5K+",
    label: "UF Students",
    status: "projected",
    description: "By Q2 2025"
  },
  {
    metric: "50K+",
    label: "Multi-Campus",
    status: "projected", 
    description: "By Q4 2025"
  },
  {
    metric: "$1M+",
    label: "Annual GMV",
    status: "projected",
    description: "By End 2025"
  }
];

export default function Roadmap() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0021A5] to-blue-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Clock className="w-5 h-5" />
            <span className="font-bold text-lg">LAUNCH TIMELINE Q1-Q4 2025</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building the Future of 
            <span className="bg-gradient-to-r from-[#FF6900] to-orange-500 bg-clip-text text-transparent"> Student Commerce</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From MVP to market leader - here&apos;s how we&apos;re revolutionizing the UF marketplace experience
          </p>
        </div>

        {/* Current Status */}
        <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-8 mb-16 text-white animate-fade-in-up">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-green-100">Active Listings</div>
              <Badge className="bg-white/20 text-white hover:bg-white/20">Live Beta</Badge>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">1.2K</div>
              <div className="text-green-100">Verified Students</div>
              <Badge className="bg-white/20 text-white hover:bg-white/20">Growing</Badge>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">4.8★</div>
              <div className="text-green-100">User Rating</div>
              <Badge className="bg-white/20 text-white hover:bg-white/20">Excellent</Badge>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">25%</div>
              <div className="text-green-100">User Growth</div>
              <Badge className="bg-white/20 text-white hover:bg-white/20">Monthly</Badge>
            </div>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-8 mb-16">
          {roadmapItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={item.phase} className="p-8 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="flex items-center space-x-6">
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">{item.phase}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge className={`${item.status === 'upcoming' ? 'bg-[#FF6900] hover:bg-[#FF6900]' : 'bg-gray-500 hover:bg-gray-500'} text-white`}>
                          {item.date}
                        </Badge>
                        {item.status === 'upcoming' && (
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            <Zap className="w-3 h-3 mr-1" />
                            Next Up
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="grid md:grid-cols-2 gap-4">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          {item.status === 'upcoming' ? (
                            <Circle className="w-5 h-5 text-[#FF6900]" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Market Opportunity & Projections */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Opportunity</h3>
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#FF6900] to-orange-500 text-white px-8 py-4 rounded-2xl shadow-lg">
              <span className="text-3xl font-bold">$10M</span>
              <div className="text-left">
                <div className="font-bold">UF P2P Market</div>
                <div className="text-orange-100 text-sm">Annual Market Size</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#0021A5] to-blue-600 bg-clip-text text-transparent">
                  {milestone.metric}
                </div>
                <div className="font-semibold text-gray-900">{milestone.label}</div>
                <div className="text-sm text-gray-600">{milestone.description}</div>
                <Badge className={`${milestone.status === 'current' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'} hover:bg-current`}>
                  {milestone.status === 'current' ? 'Current' : 'Projected'}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}