import React from 'react';
import {
  LayoutTemplate,
  CheckCircle,
  BarChart,
  ListChecks,
  Flag,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import climbosScreenshot from '@/assets/climbos-mobile_nw_5a3f1499.jpeg';

const ClimbOS = () => {
  const features = [
    {
      title: "Goal Tracking",
      description: "Set, track, and accomplish meaningful goals with clear metrics",
      icon: <Flag className="h-5 w-5 text-cambridge-blue" />
    },
    {
      title: "Habit Building",
      description: "Monitor daily habits that support your long-term vision",
      icon: <CheckCircle className="h-5 w-5 text-cambridge-blue" />
    },
    {
      title: "Task Management",
      description: "Organize tasks by priority, energy level, and context",
      icon: <ListChecks className="h-5 w-5 text-cambridge-blue" />
    },
    {
      title: "Performance Analytics",
      description: "Measure progress and identify patterns in your productivity",
      icon: <BarChart className="h-5 w-5 text-cambridge-blue" />
    }
  ];

  return (
    <section id="climbos" className="relative py-20 bg-gradient-to-b from-cambridge-blue/30 to-mountain-green/40">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('/topography-pattern.svg')] bg-repeat"></div>
      <div className="absolute inset-0 z-0 opacity-25 bg-[url('/mountain-silhouette.svg')] bg-no-repeat bg-bottom bg-cover transform scale-y-[-1]"></div>
      <div className="absolute inset-0 z-0 bg-[url('/compass-bg.svg')] bg-no-repeat bg-left bg-contain opacity-20"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-cambridge-blue/40 to-mountain-green/50"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="max-w-xl">
              <div className="inline-flex items-center bg-mountain-green/40 rounded-full py-1.5 px-4 mb-6 shadow-md">
                <LayoutTemplate className="h-4 w-4 text-blue-mell mr-2" />
                <span className="text-xs font-medium text-dark-slate">INCLUDED WITH ALL COACHING</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                ClimbOS: Your Complete Productivity System
              </h2>
              
              <p className="text-lg text-dark-slate/90 mb-8">
                A powerful Notion template designed for real coaching and real growth. 
                ClimbOS connects your sessions with your daily actions, bringing structure 
                to your ambition.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1 bg-mountain-green/40 rounded-full p-2.5 shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-charcoal">{feature.title}</h3>
                      <p className="text-dark-slate/80">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-8 bg-mountain-green/30" />

              <div className="bg-gradient-to-r from-blue-mell/30 to-cambridge-blue/20 rounded-lg p-6 shadow-md border border-mountain-green/20">
                <h3 className="font-heading font-bold text-lg text-charcoal mb-3">
                  Why ClimbOS Makes the Difference
                </h3>
                <p className="text-dark-slate/90 mb-4">
                  Most coaching sessions end with insights that quickly fade. ClimbOS ensures your 
                  insights become lasting change by embedding them into your daily workflow.
                </p>
                <Button className="mt-2 group" style={{ backgroundColor: '#364958', color: 'white' }}>
                  See ClimbOS in Action
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex flex-col items-center lg:pt-20 hidden lg:flex">
            {/* ClimbOS mobile screenshot with glow effect */}
            <div className="relative max-w-[280px] w-full">
              <div className="absolute -inset-4 bg-gradient-to-br from-mountain-green/50 to-blue-mell/50 rounded-xl blur-md opacity-70"></div>
              <div className="relative rounded-lg border border-mountain-green/40 shadow-xl overflow-hidden">
                <img
                  src={climbosScreenshot.src}
                  alt="ClimbOS mobile interface"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="text-sm text-center text-dark-slate/80 mt-3 font-medium">ClimbOS task management interface</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimbOS;
