import React from 'react';
import { Mountain, Star, TrendingUp } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-mountain-green/20">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/topography-pattern.svg')] bg-repeat"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-mell/10 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white rounded-lg p-6 border border-mountain-green/30 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-mountain-green/20 rounded-full p-2 mt-1">
                    <Star className="h-6 w-6 text-dark-slate" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-charcoal">Today's insights become tomorrow's advantage</h3>
                    <p className="mt-2 text-dark-slate/80">We turn reflection into direction and build change into your week.</p>
                  </div>
                </div>
                
                <Separator className="my-6 bg-mountain-green/30" />
                
                <div className="flex items-start space-x-4">
                  <div className="bg-mountain-green/20 rounded-full p-2 mt-1">
                    <Mountain className="h-6 w-6 text-dark-slate" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-charcoal">Build a better life one week at a time</h3>
                    <p className="mt-2 text-dark-slate/80">Each week ends with clarity and begins with momentum.</p>
                  </div>
                </div>
                
                <Separator className="my-6 bg-mountain-green/30" />
                
                <div className="flex items-start space-x-4">
                  <div className="bg-mountain-green/20 rounded-full p-2 mt-1">
                    <TrendingUp className="h-6 w-6 text-dark-slate" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-charcoal">Coaching that turns insights into actions</h3>
                    <p className="mt-2 text-dark-slate/80">We bridge the gap between great conversations and meaningful progress.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                The Entrepreneur's Performance Coach
              </h2>
              <p className="text-lg text-dark-slate/90 mb-6">
                After starting multiple businesses and being self-employed for 15 years, 
                I'm convinced the most important decision any entrepreneur can make each day 
                is where to invest their time, attention, and energy.
              </p>
              <p className="text-lg text-dark-slate/90 mb-6">
                The average entrepreneur is bleeding up to 26 hours of productivity every week 
                before meaningful decisions even begin. That's why I created climb.coach, a method 
                for the madness of entrepreneurial life.
              </p>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg border border-mountain-green/30 p-6 my-8">
                <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
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
              <p className="italic text-dark-slate/80">
                "We help busy founders think clearly and live boldly, so every hour you work pushes you toward 
                the life and business you want."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;