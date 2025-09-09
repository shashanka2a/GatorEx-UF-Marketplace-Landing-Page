"use client"

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MessageCircle, QrCode, Zap } from "lucide-react";

export default function InstantSell() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#FF6900] to-[#0021A5] text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Zap className="w-5 h-5" />
            <span className="font-bold text-lg">AI INSTANT SELLING</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Sell in <span className="bg-gradient-to-r from-[#FF6900] to-[#0021A5] bg-clip-text text-transparent">Under 1 Minute</span> via GatorBot
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Skip the hassle. Just chat with GatorBot and get listed instantly! Our intelligent AI assistant creates your listing in under 1 minute.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Simple Steps */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#FF6900] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <span className="text-lg font-medium">Start AI chat conversation</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#0021A5] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <span className="text-lg font-medium">Answer quick questions about your item</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <span className="text-lg font-medium">Listing posted automatically in under 1 min</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-center space-x-3 mb-2">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <span className="font-bold text-lg text-gray-900">Lightning Fast Selling</span>
              </div>
              <p className="text-gray-600">
                Our intelligent AI chatbot will automatically create and optimize your listings for maximum visibility in under 1 minute.
              </p>
            </div>
          </div>

          {/* Right Side - AI Chat Demo */}
          <div className="flex justify-center animate-fade-in-up">
            <Card className="bg-white p-8 shadow-xl border-0 text-center">
              <div className="space-y-6">
                {/* GatorBot AI Illustration */}
                <div className="w-64 h-64 bg-white rounded-2xl flex items-center justify-center relative">
                  <div className="relative">
                    {/* Speech Bubble Outline */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-20 border-2 border-gray-200 rounded-2xl relative">
                        {/* Speech bubble tail */}
                        <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-200"></div>
                      </div>
                    </div>
                    
                    {/* Main GatorBot */}
                    <div className="relative z-10">
                      {/* Soft Squircle Head */}
                      <div className="w-20 h-20 bg-gray-100 rounded-2xl relative shadow-sm border-2 border-green-200">
                        {/* Friendly Eyes with Pupils */}
                        <div className="absolute top-5 left-3 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#0021A5] rounded-full animate-pulse"></div>
                        </div>
                        <div className="absolute top-5 right-3 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#0021A5] rounded-full animate-pulse"></div>
                        </div>
                        
                        {/* Tiny Smile Line */}
                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-6 h-1 border-b border-[#0021A5] rounded-full"></div>
                        
                        {/* Lightning Badge on Chest */}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#FF6900] rounded-full flex items-center justify-center shadow-sm">
                          <Zap className="w-2.5 h-2.5 text-white" />
                        </div>
                      </div>
                      
                      {/* Chat Bubble Icon - Subtle */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0021A5] rounded-full flex items-center justify-center shadow-sm">
                        <MessageCircle className="w-3 h-3 text-white" />
                      </div>
                      
                      {/* Typing Dots Animation */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        <div className="w-1 h-1 bg-[#FF6900] rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-[#FF6900] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-1 h-1 bg-[#FF6900] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    className="bg-gradient-to-r from-[#FF6900] to-[#0021A5] hover:from-orange-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                    onClick={() => window.open('https://gatorex.app/sell', '_blank')}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat with GatorBot
                  </Button>
                  <div className="text-center">
                    <span className="text-gray-500 text-sm">or </span>
                    <a 
                      href="https://gatorex.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0021A5] hover:text-[#FF6900] font-medium text-sm transition-colors underline"
                    >
                      browse online
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}