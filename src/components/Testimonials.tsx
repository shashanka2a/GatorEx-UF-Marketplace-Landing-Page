import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlie Phelps",
    role: "Environmental Science Major",
    content: "As someone who's not on social media, this is exactly what I wanted. GatorEx made it so easy to sell my textbooks and find furniture for my apartment. No Facebook groups, no Instagram stories - just a clean, simple marketplace for UF students.",
    rating: 5,
    highlight: "Perfect for non-social media users"
  },
  {
    id: 2,
    name: "Phalguna Peravali",
    role: "Graduate Student 2025",
    content: "The user experience is incredible! I listed my bike in under 2 minutes using GatorBot, and it sold the same day. The interface is so intuitive - everything just makes sense. It's like they actually understand how students think and shop.",
    rating: 5,
    highlight: "Amazing user experience"
  },
  {
    id: 3,
    name: "Vandana Cendrollu",
    role: "CS Major",
    content: "I love how safe and secure GatorEx feels. The UF email verification gives me confidence I'm dealing with real students, and the built-in messaging system keeps everything organized. Plus, meeting on campus feels so much safer than random Craigslist encounters.",
    rating: 5,
    highlight: "Safety & security focused"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0021A5] to-[#FF6900] text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Quote className="w-5 h-5" />
            <span className="font-bold text-lg">STUDENT TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Gators Are 
            <span className="bg-gradient-to-r from-[#FF6900] to-[#0021A5] bg-clip-text text-transparent"> Saying</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from UF students who've experienced the GatorEx difference
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:border-2 hover:border-[#FF6900]/20 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF6900]/10 to-[#0021A5]/10 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-[#FF6900]" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FF6900] fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-gray-700 leading-relaxed text-lg">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0021A5] to-[#FF6900] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  {/* Highlight Badge */}
                  <div className="mt-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#FF6900]/10 text-[#FF6900]">
                      {testimonial.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#0021A5]/5 to-[#FF6900]/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join the GatorEx Community?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the trusted marketplace that UF students are raving about
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-[#FF6900] to-[#0021A5] hover:from-orange-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => window.open('https://gatorex.app', '_blank')}
              >
                Start Shopping
              </button>
              <button 
                className="border-2 border-[#0021A5] text-[#0021A5] hover:bg-[#0021A5] hover:text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => window.open('https://gatorex.app/sell', '_blank')}
              >
                Start Selling
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
