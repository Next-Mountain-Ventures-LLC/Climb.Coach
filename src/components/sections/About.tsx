import React from 'react';
import { Mountain, Star, TrendingUp, User, Award, Target } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-cambridge-blue/30 to-mountain-green/50">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('/topography-pattern.svg')] bg-repeat"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-mountain-green/50 to-transparent z-0"></div>
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('/mountain-bg.svg')] bg-no-repeat bg-cover bg-center"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-cambridge-blue/70 to-mountain-green/70"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
            The Entrepreneur's Performance Coach
          </h2>
          <p className="text-lg text-dark-slate/90 mb-4">
            Helping you navigate your entrepreneurial journey with clarity, purpose, and focus.
          </p>
          <p className="text-lg text-dark-slate/90">
            After starting multiple businesses and being self-employed for 15 years, 
            we're convinced the most important decision any entrepreneur can make each day 
            is where to invest their time, attention, and energy. That's why we created climb.coach, 
            a method for the madness of entrepreneurial life.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Core Values Cards - Now 3 in a row horizontally */}
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
        
        {/* Founder Bio */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-mountain-green/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-mountain-green/20 to-cambridge-blue/30 rounded-bl-[80px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-mell/20 to-dark-slate/20 rounded-tr-[80px] -z-10"></div>
            
            <div className="flex items-start gap-6 flex-col md:flex-row">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full shadow-lg border-4 border-white overflow-hidden">
                  <img src="/tyson_headshot_nw_54942062.png" alt="Tyson Reuer" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-3">
                  About Tyson Reuer
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