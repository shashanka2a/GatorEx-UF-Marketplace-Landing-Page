import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, ExternalLink, Users, Shield, Zap } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Why GatorEx is the Marketplace for UF Students",
    excerpt: "Discover how GatorEx revolutionizes student commerce with AI-powered selling, verified users, and campus-focused safety features.",
    readTime: "5 min read",
    category: "Student Life",
    featured: true
  },
  {
    id: 2,
    title: "The Future of Student Marketplaces: AI Integration",
    excerpt: "Learn how GatorBot's AI technology makes selling items as easy as having a conversation, reducing listing time from hours to minutes.",
    readTime: "4 min read",
    category: "Technology"
  },
  {
    id: 3,
    title: "Building Trust in Student Commerce",
    excerpt: "How UF email verification and campus meetup locations create the safest marketplace experience for students.",
    readTime: "3 min read",
    category: "Safety"
  }
];

const relatedProjects = [
  {
    name: "Vybr",
    description: "Discover your dream housing",
    url: "https://vybr.club",
    icon: "🏠"
  },
  {
    name: "Tribzy",
    description: "Never miss campus events",
    url: "https://tribzy.com",
    icon: "🎉"
  },
  {
    name: "Rydify",
    description: "Split ride costs effortlessly",
    url: "https://rydify.co",
    icon: "🚗"
  }
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0021A5] to-[#FF6900] text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Users className="w-5 h-5" />
            <span className="font-bold text-lg">STUDENT INSIGHTS & UPDATES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest from the 
            <span className="bg-gradient-to-r from-[#FF6900] to-[#0021A5] bg-clip-text text-transparent"> GatorEx Blog</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with student marketplace trends, safety tips, and success stories from the UF community
          </p>
        </div>

        {/* Featured Blog Post */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-[#0021A5]/5 to-[#FF6900]/5 border-0 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="bg-[#FF6900] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-gray-600 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                  <Button 
                    className="bg-gradient-to-r from-[#FF6900] to-[#0021A5] hover:from-orange-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open('https://medium.com/@jagannathamshashank/why-the-student-commerce-problem-remains-unsolved-eba65c0bab78', '_blank')}
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                    <span className="text-sm text-gray-500">Published Dec 19, 2024</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#0021A5]/10 to-[#FF6900]/10 p-12 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-[#0021A5] to-[#FF6900] rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-gray-900">250+</div>
                    <div className="text-gray-600">Verified Students</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Blog Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <Card 
              key={post.id} 
              className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:border-2 hover:border-[#FF6900]/20 transform hover:-translate-y-1 animate-fade-in-up cursor-pointer" 
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => window.open('https://medium.com/@jagannathamshashank/why-the-student-commerce-problem-remains-unsolved-eba65c0bab78', '_blank')}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 leading-tight">
                  {post.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="outline" 
                  className="border-[#0021A5] text-[#0021A5] hover:bg-[#0021A5] hover:text-white transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open('https://medium.com/@jagannathamshashank/why-the-student-commerce-problem-remains-unsolved-eba65c0bab78', '_blank');
                  }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Related Projects */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border-0">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              More Projects from Our Team
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore other innovative solutions we&apos;ve built for students and developers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProjects.map((project, index) => (
              <Card 
                key={project.name} 
                className="p-6 bg-gradient-to-br from-gray-50 to-white hover:from-[#FF6900]/5 hover:to-[#0021A5]/5 transition-all duration-300 border-0 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
                onClick={() => window.open(project.url, '_blank')}
              >
                <div className="text-center space-y-4">
                  <div className="text-4xl">{project.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-[#0021A5] text-[#0021A5] hover:bg-[#0021A5] hover:text-white transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.url, '_blank');
                    }}
                  >
                    Visit Project
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
