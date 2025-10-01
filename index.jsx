
import React, { useState, useEffect } from "react";
import { GenerateImage } from "@/integrations/Core";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Shield,
  Brain,
  Zap,
  Lock,
  ArrowRight,
  Mail,
  Globe,
  MessageCircle,
  Camera,
  Database,
  ChevronDown } from
"lucide-react";

export default function Home() {
  const [heroImage, setHeroImage] = useState(null);
  const [analysisImage, setAnalysisImage] = useState(null);
  const [aiImage, setAiImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    generateImages();
  }, []);

  const generateImages = async () => {
    try {
      const [heroRes, analysisRes, aiRes] = await Promise.all([
      GenerateImage({
        prompt: "Dark futuristic digital surveillance room with multiple screens showing data analysis, neural networks, and security monitoring. Cinematic lighting, high tech atmosphere, blue and purple ambient lighting, 4K quality"
      }),
      GenerateImage({
        prompt: "Abstract digital brain neural network with flowing data streams, dark background with neon blue and purple accents, representing AI analysis and intelligence processing, futuristic and mysterious"
      }),
      GenerateImage({
        prompt: "Futuristic command center with holographic displays showing social interaction analysis, conversation flows, and behavioral patterns. Dark room with cyan and purple lighting, very high tech and secretive"
      })]
      );

      setHeroImage(heroRes.url);
      setAnalysisImage(analysisRes.url);
      setAiImage(aiRes.url);
    } catch (error) {
      console.error("Error generating images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_688e61efc26bb04ded705d65/a94ee26e5_icon_sa.png"
                alt="SA Intelligence"
                className="w-8 h-8" />

              <span className="text-xl font-light tracking-wide text-white/90">SA Intelligence</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-white/70 hover:text-white transition-colors">Products</a>
              <a href="#capabilities" className="text-white/70 hover:text-white transition-colors">Capabilities</a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {heroImage &&
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }} />

        }
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-12 shadow-2xl shadow-black/50">
            {/* Removed img tag for logo */}
            
            <h1 className="text-5xl md:text-7xl font-thin mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200">
              Intelligence
              <br />
              <span className="text-4xl md:text-6xl text-white/60">Redefined</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Advanced algorithmic solutions for pattern recognition, 
              behavioral analysis, and intelligence processing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-none shadow-lg shadow-blue-500/25 backdrop-blur-sm">

                <Lock className="w-5 h-5 mr-2" />
                Classified Access
              </Button>
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm">

                <ArrowRight className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-white/10 text-white/80 border-white/20 mb-6">
              Classified Technologies
            </Badge>
            <h2 className="text-4xl md:text-6xl font-thin mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Our Solutions
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Cutting-edge algorithms designed for those who require the highest level of intelligence processing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* SITWARE */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 shadow-2xl shadow-black/20">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center border border-red-500/20">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-white mb-4">SITWARE</h3>
                  <p className="text-white/60 text-lg leading-relaxed mb-6">
                    Advanced threat detection and pattern recognition system. 
                    Processes multiple intelligence streams for early warning and risk assessment.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="border-red-500/30 text-red-400">
                      <Camera className="w-3 h-3 mr-1" />
                      Visual Intelligence
                    </Badge>
                    <Badge variant="outline" className="border-orange-500/30 text-orange-400">
                      <Database className="w-3 h-3 mr-1" />
                      OSINT Processing
                    </Badge>
                    <Badge variant="outline" className="border-yellow-500/30 text-yellow-400">
                      <Eye className="w-3 h-3 mr-1" />
                      Threat Detection
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Awareness */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 shadow-2xl shadow-black/20">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/20">
                  <MessageCircle className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-white mb-4">Social Intelligence</h3>
                  <p className="text-white/60 text-lg leading-relaxed mb-6">
                    Real-time behavioral analysis and response generation. 
                    Interprets social cues, expressions, and conversational patterns.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                      <Brain className="w-3 h-3 mr-1" />
                      Behavioral Analysis
                    </Badge>
                    <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                      <Zap className="w-3 h-3 mr-1" />
                      Real-time Processing
                    </Badge>
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Response Generation
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-32 relative">
        {analysisImage &&
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${analysisImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />

        }
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-blue-500/30 mb-6">
                Analysis Capabilities
              </Badge>
              <h2 className="text-4xl md:text-5xl font-thin mb-8 text-white leading-tight">
                Intelligence That
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Stays Hidden
                </span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                Our algorithms operate in the shadows, processing vast amounts of data 
                to provide insights that others miss. Every pattern recognized, 
                every behavior analyzed, every threat identified.
              </p>
              <div className="space-y-4">
                {[
                "Multi-source intelligence fusion",
                "Real-time behavioral profiling",
                "Predictive threat modeling",
                "Encrypted processing pipeline"].
                map((capability, index) =>
                <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                    <span className="text-white/80">{capability}</span>
                  </div>
                )}
              </div>
            </div>
            
            {aiImage &&
            <div className="relative">
                <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl shadow-black/30">
                  <img
                  src={aiImage}
                  alt="AI Processing"
                  className="w-full rounded-2xl opacity-80" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-12 shadow-2xl shadow-black/50">
            <Badge className="bg-white/10 text-white/80 border-white/20 mb-8">
              Classified Communications
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-thin mb-8 text-white">
              Access Request
            </h2>
            
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              For authorized personnel only. All communications are monitored and encrypted.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="text-white/40 text-sm">Secure Contact</p>
                  <p className="text-white font-mono">classified@saintelligence.eu</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <p className="text-white/40 text-sm">Domain</p>
                  <p className="text-white font-mono">saintelligence.eu</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl">
              <p className="text-yellow-400/80 text-sm">
                <Lock className="w-4 h-4 inline mr-2" />
                Security clearance required for detailed discussions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_688e61efc26bb04ded705d65/a94ee26e5_icon_sa.png"
                alt="SA Intelligence"
                className="w-6 h-6 opacity-60" />

              <span className="text-white/40 text-sm">SA Intelligence</span>
            </div>
            <p className="text-white/30 text-xs">
              © 2024 SA Intelligence. All operations classified.
            </p>
          </div>
        </div>
      </footer>
    </div>);

}
