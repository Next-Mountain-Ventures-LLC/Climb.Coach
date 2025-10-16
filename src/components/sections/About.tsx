import React from 'react';
import { Mountain, Star, TrendingUp, User, Award, Target } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-cambridge-blue/30 to-mountain-green/50">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('/topography-pattern.svg')] bg-repeat"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-mountain-green/50 to-transparent z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-mell/20 rounded-full mb-4 shadow-lg">
            <User className="h-7 w-7 text-dark-slate" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
            The Entrepreneur's Performance Coach
          </h2>
          <p className="text-lg text-dark-slate/90">
            Helping you navigate your entrepreneurial journey with clarity, purpose, and focus.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Core Philosophy */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-mountain-green/50 shadow-xl">
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">
                Why Climb.Coach Exists
              </h3>
              
              <p className="text-lg text-dark-slate/90 mb-6">
                After starting multiple businesses and being self-employed for 15 years, 
                I'm convinced the most important decision any entrepreneur can make each day 
                is where to invest their time, attention, and energy.
              </p>
              
              <div className="flex items-center justify-center my-8">
                <div className="w-full max-w-md bg-charcoal/10 rounded-lg p-5 text-center">
                  <p className="text-xl font-heading font-bold text-charcoal">
                    The average entrepreneur loses 26 hours of productivity every week
                  </p>
                  <p className="text-dark-slate/80 mt-2">
                    ...before meaningful decisions even begin.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-dark-slate/90 mb-6">
                That's why I created climb.coach, a method for the madness of entrepreneurial life.
                We help busy founders think clearly and live boldly, so every hour you work pushes 
                you toward the life and business you want.
              </p>
              
              <div className="mt-8 flex justify-center">
                <Button className="px-6 py-2.5 text-lg" style={{ backgroundColor: '#364958', color: 'white' }}>
                  Learn About The Climb Method
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Core Values */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              {/* Value Card 1 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-mountain-green/50 transform transition-transform hover:translate-y-[-5px]">
                <div className="h-2 bg-gradient-to-r from-mountain-green to-cambridge-blue"></div>
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-mountain-green/30 rounded-full p-3 mt-1 shadow-md">
                      <Star className="h-6 w-6 text-dark-slate" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
                        Today's Insights, Tomorrow's Advantage
                      </h3>
                      <p className="text-dark-slate/90">
                        We turn reflection into direction and help you build change into your week with consistent, measurable progress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Value Card 2 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-mountain-green/50 transform transition-transform hover:translate-y-[-5px]">
                <div className="h-2 bg-gradient-to-r from-cambridge-blue to-blue-mell"></div>
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cambridge-blue/30 rounded-full p-3 mt-1 shadow-md">
                      <Mountain className="h-6 w-6 text-dark-slate" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
                        Build a Better Life One Week at a Time
                      </h3>
                      <p className="text-dark-slate/90">
                        Each week ends with clarity and begins with momentum. We create structured systems for consistent, sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Value Card 3 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-mountain-green/50 transform transition-transform hover:translate-y-[-5px]">
                <div className="h-2 bg-gradient-to-r from-blue-mell to-dark-slate"></div>
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-mell/30 rounded-full p-3 mt-1 shadow-md">
                      <TrendingUp className="h-6 w-6 text-dark-slate" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
                        Actions, Not Just Conversations
                      </h3>
                      <p className="text-dark-slate/90">
                        We bridge the gap between great conversations and meaningful progress with proven frameworks and accountability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Founder Bio */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-mountain-green/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-mountain-green/20 to-cambridge-blue/30 rounded-bl-[80px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-mell/20 to-dark-slate/20 rounded-tr-[80px] -z-10"></div>
            
            <div className="flex items-start gap-6 flex-col md:flex-row">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-dark-slate to-blue-mell rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-2xl font-heading font-bold text-white">TR</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-3">
                  About Tyson Ruer
                </h3>
                <p className="text-dark-slate/90 mb-4">
                  Tyson is an entrepreneur who has founded multiple companies across tech and service sectors. 
                  As a self-described productivity nerd obsessed with systems, he combines his entrepreneurial 
                  experience with a background in ministry to help founders balance ambition with well-being.
                </p>
                <p className="text-dark-slate/90">
                  Having navigated his own ADHD challenges, Tyson brings a unique perspective on 
                  maintaining focus while building companies. He's on a mission to help one million 
                  people accomplish their goals through the Climb Method.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;