import React from 'react';
import { Quote } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const FounderNote = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-cambridge-blue/30 to-mountain-green/40">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('/topography-pattern.svg')] bg-repeat"></div>
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/mountain-silhouette.svg')] bg-no-repeat bg-bottom bg-contain"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-cambridge-blue/40 to-mountain-green/50"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-mountain-green/40 rounded-full shadow-md">
              <Quote className="h-6 w-6 text-blue-mell" />
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-heading font-bold text-charcoal">
              A Note from the Founder
            </h2>
          </div>

          <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border-2 border-mountain-green/60 transform hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-mountain-green/40 to-cambridge-blue/40 rounded-bl-xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-mell/40 to-dark-slate/40 rounded-tr-xl -z-10 animate-pulse"></div>
            <div className="absolute inset-0 -z-5 bg-gradient-to-r from-blue-mell/5 to-mountain-green/5 rounded-xl"></div>
            
            <div className="prose prose-lg max-w-none text-dark-slate/90">
              <div className="bg-gradient-to-r from-charcoal/20 to-blue-mell/20 rounded-lg p-5 text-center mb-8 border border-charcoal/10 shadow-md transform hover:scale-[1.01] transition-all duration-300 cursor-pointer">
                <p className="text-xl font-heading font-bold text-charcoal">
                  The average entrepreneur loses 26 hours of productivity every week
                </p>
                <p className="text-dark-slate/80 mt-2">
                  ...before meaningful decisions even begin.
                </p>
                <div className="w-full bg-charcoal/10 h-1.5 rounded-full mt-4">
                  <div className="bg-blue-mell h-1.5 rounded-full w-[26%]"></div>
                </div>
                <p className="text-xs text-dark-slate/70 mt-2 text-right">26 hours lost / 100 hour work week</p>
              </div>
              
              <p className="mb-4">
                Between 16 hours lost weekly to admin and nearly 10 hours to interruptions and tool switching, the 
                average entrepreneur is bleeding up to 26 hours of productivity every week.
              </p>
              
              <p className="mb-4">
                After starting multiple businesses and being self-employed for 15 years, I'm convinced 
                the most important decision any entrepreneur can make each day is where to invest 
                their time, attention, and energy.
              </p>
              
              <p className="mb-4">
                What scares me about the stat above is that even if you claw back those 26 lost hours, 
                if you make the wrong calls on where to spend them—on things misaligned with your values 
                or strategic goals—then all of your time, attention, and energy for the week may still be wasted.
              </p>
              
              <p className="mb-4">
                That's why I created climb.coach, a method for the madness of entrepreneurial life. 
                We help busy founders think clearly and live boldly, so every hour you work pushes 
                you toward the life and business you want.
              </p>
              
              <p>
                We're on a mission to help one million people accomplish their goals, and we 
                can't wait to help you reach yours.
              </p>
            </div>

            <Separator className="my-6 bg-mountain-green/30" />
            
            <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-mell/10 to-mountain-green/10 p-4 rounded-lg border border-blue-mell/20 transform hover:translate-x-1 hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-md ring-4 ring-cambridge-blue/30 overflow-hidden">
                <img src="/tyson_headshot_nw_54942062.png" alt="Tyson Reuer" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-charcoal">Tyson Reuer</div>
                <div className="text-dark-slate/80">Creator of the Climb Method & Founder of climb.coach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;