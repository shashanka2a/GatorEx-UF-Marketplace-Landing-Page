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
            Sell in <span className="bg-gradient-to-r from-[#FF6900] to-[#0021A5] bg-clip-text text-transparent">Under 1 Minute</span> via AI Chat
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Skip the hassle. Just chat with our AI and get listed instantly! Our intelligent chatbot creates your listing in under 1 minute.
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
                <div className="w-64 h-64 bg-gradient-to-br from-[#FF6900]/10 to-[#0021A5]/10 rounded-2xl flex items-center justify-center relative overflow-hidden border-2 border-[#FF6900]/20">
                  <MessageCircle className="w-32 h-32 text-[#FF6900]/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-700 mb-1">AI Chatbot</div>
                      <div className="text-sm text-gray-500">List in under 1 min</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="bg-gradient-to-r from-[#FF6900] to-[#0021A5] hover:from-orange-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start AI Chat
                  </Button>
                  <div className="text-center">
                    <span className="text-gray-500 text-sm">or </span>
                    <a 
                      href="https://app.gatorex.shop" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0021A5] hover:text-[#FF6900] font-medium text-sm transition-colors"
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