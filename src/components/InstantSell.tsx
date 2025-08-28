"use client"

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MessageCircle, QrCode, Zap, Camera, Send } from "lucide-react";

export default function InstantSell() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#25D366]/5 via-white to-[#FF6900]/5">
      <div className="container mx-auto px-4">
        {/* Main USP Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Zap className="w-5 h-5" />
            <span className="font-bold text-lg">INSTANT SELLING</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sell in <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">30 Seconds</span>
            <br />via WhatsApp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Skip the hassle of creating listings. Just snap, send, and sell! 
            Our WhatsApp bot handles everything automatically.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Process Steps */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">1. Snap a Photo</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Take a quick photo of your item with your phone camera. No need for perfect lighting or staging.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#FF6900] to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">2. Send via WhatsApp</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Send the photo with a quick description and price to our WhatsApp bot. Takes under 30 seconds.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#0021A5] to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">3. We Handle the Rest</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our AI creates your listing, optimizes it for search, and notifies interested buyers instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900">Average Sell Time</h4>
                  <p className="text-green-600 font-bold text-lg">Under 2 hours</p>
                </div>
              </div>
              <p className="text-gray-600">
                Most items posted via WhatsApp get their first inquiry within 2 hours. 
                Our instant notification system connects you with buyers immediately.
              </p>
            </div>
          </div>

          {/* Right Side - WhatsApp QR */}
          <div className="flex justify-center animate-fade-in-up">
            <Card className="bg-white p-12 shadow-2xl border-0 text-center animate-float">
              <div className="space-y-8">
                <div className="w-80 h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-inner">
                  <QrCode className="w-48 h-48 text-gray-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-700 mb-2">WhatsApp QR</div>
                      <div className="text-gray-500">Scan to start selling</div>
                      <div className="mt-4 inline-flex items-center space-x-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm">
                        <MessageCircle className="w-4 h-4" />
                        <span>+1 (352) XXX-XXXX</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
                    Start Selling Now
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Scan with your camera app or click the button below
                  </p>
                  <Button className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Open WhatsApp
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}