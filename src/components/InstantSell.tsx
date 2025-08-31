"use client"

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MessageCircle, QrCode, Zap } from "lucide-react";

export default function InstantSell() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#25D366]/5 via-white to-[#FF6900]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Zap className="w-5 h-5" />
            <span className="font-bold text-lg">INSTANT SELLING</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Sell in <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">30 Seconds</span> via WhatsApp
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Skip the hassle. Just snap, send, and sell! Our WhatsApp bot handles everything.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Simple Steps */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <span className="text-lg font-medium">Snap a photo of your item</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#FF6900] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <span className="text-lg font-medium">Send via WhatsApp with price</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#0021A5] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <span className="text-lg font-medium">We create your listing automatically</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-center space-x-3 mb-2">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <span className="font-bold text-lg text-gray-900">Lightning Fast Selling</span>
              </div>
              <p className="text-gray-600">
                Our WhatsApp bot will automatically create and optimize your listings for maximum visibility.
              </p>
            </div>
          </div>

          {/* Right Side - WhatsApp QR */}
          <div className="flex justify-center animate-fade-in-up">
            <Card className="bg-white p-8 shadow-xl border-0 text-center">
              <div className="space-y-6">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <QrCode className="w-32 h-32 text-gray-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-700 mb-1">WhatsApp QR</div>
                      <div className="text-sm text-gray-500">Scan to start selling</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Open WhatsApp
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