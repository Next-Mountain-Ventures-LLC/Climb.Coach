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
    <section id="climbos" className="relative py-20 bg-gradient-to-b from-cambridge-blue/5 to-dark-slate/10">
      <div className="absolute inset-0 z-0 opacity-15 bg-[url('/mountain-silhouette.svg')] bg-no-repeat bg-bottom bg-cover transform scale-y-[-1]"></div>
      <div className="absolute inset-0 z-0 bg-[url('/compass-bg.svg')] bg-no-repeat bg-left bg-contain opacity-5"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="max-w-lg">
              <div className="inline-flex items-center bg-mountain-green/20 rounded-full py-1 px-3 mb-6">
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
                    <div className="flex-shrink-0 mt-1 bg-mountain-green/20 rounded-full p-2">
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

              <div className="bg-gradient-to-r from-blue-mell/10 to-cambridge-blue/10 rounded-lg p-6">
                <h3 className="font-heading font-bold text-lg text-charcoal mb-3">
                  Why ClimbOS Makes the Difference
                </h3>
                <p className="text-dark-slate/90 mb-4">
                  Most coaching sessions end with insights that quickly fade. ClimbOS ensures your 
                  insights become lasting change by embedding them into your daily workflow.
                </p>
                <Button className="mt-2 bg-charcoal hover:bg-dark-slate text-white group">
                  See ClimbOS in Action
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-mountain-green/30 to-blue-mell/30 rounded-xl blur-md opacity-50"></div>
              <div className="relative bg-white rounded-lg border border-mountain-green/30 shadow-lg overflow-hidden">
                <div className="bg-dark-slate p-4 flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-white/90 font-medium">ClimbOS Dashboard</div>
                </div>
                
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-mountain-green/20 rounded p-3 text-center">
                      <div className="text-sm font-medium text-charcoal">Weekly Tasks</div>
                      <div className="text-xl font-bold text-dark-slate mt-1">12/15</div>
                    </div>
                    <div className="bg-cambridge-blue/20 rounded p-3 text-center">
                      <div className="text-sm font-medium text-charcoal">Habits</div>
                      <div className="text-xl font-bold text-dark-slate mt-1">8/10</div>
                    </div>
                    <div className="bg-blue-mell/20 rounded p-3 text-center">
                      <div className="text-sm font-medium text-charcoal">Focus Score</div>
                      <div className="text-xl font-bold text-dark-slate mt-1">87%</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="bg-gray-100 rounded p-3">
                      <div className="text-xs text-charcoal/70 uppercase font-medium mb-1">Current Goal</div>
                      <div className="text-sm font-medium text-charcoal">Launch new product feature by Nov 15</div>
                      <div className="w-full bg-gray-200 h-2 rounded mt-2">
                        <div className="bg-dark-slate h-2 rounded" style={{ width: '65%' }}></div>
                      </div>
                      <div className="text-xs text-right mt-1 text-charcoal/70">65% complete</div>
                    </div>
                    
                    <div className="bg-gray-100 rounded p-3">
                      <div className="text-xs text-charcoal/70 uppercase font-medium mb-1">Weekly Focus</div>
                      <div className="text-sm font-medium text-charcoal">Complete user testing and gather feedback</div>
                    </div>
                  </div>
                  
                  <div className="bg-mountain-green/10 rounded p-3">
                    <div className="text-xs text-charcoal/70 uppercase font-medium mb-2">Next Summit Meeting</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-charcoal">Thursday, 10:00 AM</div>
                      <Button variant="outline" size="sm" className="text-xs border-dark-slate text-dark-slate h-7">
                        Prepare
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimbOS;