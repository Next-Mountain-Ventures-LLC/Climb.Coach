import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mountain-green/70 to-cambridge-blue/60 py-20">
      {/* Mountain silhouette background */}
      <div className="absolute inset-0 z-0 opacity-35 bg-[url('/mountain-bg.svg')] bg-no-repeat bg-center bg-cover"></div>
      {/* Compass overlay removed as requested */}
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-charcoal">
              <span className="block">Think Clearly.</span>
              <span className="block">Live Boldly.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-dark-slate/90 max-w-2xl">
              Break your hustle habit and design a life of constant, beautiful progress. 
              Stop trying to get more stuff done and start getting the right things done.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group transition-all duration-300 font-heading" 
                style={{ backgroundColor: '#364958', color: 'white' }}
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Climbing
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="font-heading" style={{ borderColor: '#3B6064', color: '#3B6064', ':hover': { backgroundColor: '#3B6064', color: 'white' } }}>
                Talk with a Coach
              </Button>
            </div>
            <p className="mt-4 text-sm text-charcoal/70 font-medium">
              Your first two sessions are free
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mountain-green to-cambridge-blue rounded-full blur-3xl opacity-40 transform scale-95"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-mountain-green/50 p-8">
                <div className="flex items-center justify-center w-16 h-16 mb-6 bg-mountain-green/20 rounded-full">
                  <Compass className="w-8 h-8 text-blue-mell" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Your Weekly Summit Meeting</h3>
                <p className="text-dark-slate/90">
                  A focused 45-minute weekly meeting to help you invest your time more wisely
                  and navigate your entrepreneurial journey with purpose.
                </p>
                <div className="mt-6 pt-6 border-t border-mountain-green/30">
                  <p className="flex items-center text-sm text-charcoal/70">
                    <span className="w-3 h-3 bg-mountain-green rounded-full inline-block mr-2"></span>
                    Making progress on goals that matter
                  </p>
                  <p className="flex items-center text-sm text-charcoal/70 mt-2">
                    <span className="w-3 h-3 bg-cambridge-blue rounded-full inline-block mr-2"></span>
                    Chart the course to your next challenge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;