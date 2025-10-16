import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Lightbulb, 
  Network, 
  RefreshCw, 
  Users, 
  Settings, 
  CalendarCheck
} from 'lucide-react';

const Method = () => {
  const methodPillars = [
    {
      id: "insights",
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Integrated Insights",
      content: "Today's insights become tomorrow's advantage. We help you capture and apply learnings systematically, creating a compounding effect over time.",
    },
    {
      id: "systems",
      icon: <Network className="h-6 w-6" />,
      title: "System Thinking",
      content: "Coaching works best when paired with practical tools and frameworks. We integrate powerful systems into your daily workflow.",
    },
    {
      id: "identity",
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Identity-Based Design",
      content: "When you know who you are, you know what to do. We help you align your actions with your core values and aspirations.",
    },
    {
      id: "collaboration",
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      content: "No one climbs alone. We create a partnership that supports your journey while building your independence and self-accountability.",
    },
    {
      id: "customization",
      icon: <Settings className="h-6 w-6" />,
      title: "Customization",
      content: "The best productivity system is your productivity system. We tailor approaches to your unique strengths and challenges.",
    },
    {
      id: "summits",
      icon: <CalendarCheck className="h-6 w-6" />,
      title: "Summit Sessions",
      content: "We follow a structured approach: reflect on the last climb and chart the next one, with a consistent weekly cadence.",
    }
  ];

  return (
    <section id="method" className="relative py-20 bg-gradient-to-b from-cambridge-blue/30 to-mountain-green/40">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('/topography-pattern.svg')] bg-repeat"></div>
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('/mountain-silhouette.svg')] bg-no-repeat bg-bottom"></div>
      <div className="absolute inset-0 z-0 opacity-35 bg-[url('/compass-bg.svg')] bg-no-repeat bg-right-top bg-contain"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-cambridge-blue/40 to-mountain-green/50"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block p-3 bg-mountain-green/40 rounded-full mb-4 shadow-md">
            <img src="/climbcoachfavicon_no_bg_nw_b15ea69e.png" alt="Climb.coach Logo" className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
            The Climb Method
          </h2>
          <p className="text-lg text-dark-slate/80">
            Our methodology brings structure to your ambition, connecting your insights, 
            actions, and results in a framework designed for sustainable growth.
          </p>
        </div>

        <Tabs defaultValue="insights" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-cambridge-blue/50 p-1 rounded-lg shadow-md flex flex-wrap gap-1">
              {methodPillars.map((pillar) => (
                <TabsTrigger 
                  key={pillar.id}
                  value={pillar.id}
                  className="data-[state=active]:bg-white data-[state=active]:text-charcoal data-[state=active]:shadow-md font-medium py-3 px-4 text-base" 
                  style={{ 
                    color: pillar.id === methodPillars[0].id ? '#223843' : '#223843', 
                    backgroundColor: pillar.id === methodPillars[0].id ? 'white' : 'rgba(87, 130, 139, 0.3)' 
                  }}
                >
                  <span className="hidden md:inline-flex items-center gap-2">
                    {React.cloneElement(pillar.icon, { className: 'h-5 w-5' })}
                    <span>{pillar.title}</span>
                  </span>
                  <span className="md:hidden">{React.cloneElement(pillar.icon, { className: 'h-5 w-5' })}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-mountain-green/30 rounded-xl transform -rotate-1"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-mountain-green/50 shadow-lg">
              {methodPillars.map((pillar) => (
                <TabsContent key={pillar.id} value={pillar.id} className="focus:outline-none mt-0">
                  <div className="grid md:grid-cols-5 gap-8 items-center">
                    <div className="md:col-span-2 flex justify-center">
                      <div className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-mountain-green/20 to-blue-mell/20 rounded-full p-6">
                        {React.cloneElement(pillar.icon, { className: 'h-16 w-16 text-dark-slate' })}
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">{pillar.title}</h3>
                      <p className="text-lg text-dark-slate/90">{pillar.content}</p>
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-mountain-green/10 rounded-lg p-4">
                          <h4 className="font-heading font-medium text-charcoal mb-2">How it helps you</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-blue-mell rounded-full mt-2 mr-2"></div>
                              <span className="text-sm text-dark-slate/80">Transform insights into actionable steps</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-blue-mell rounded-full mt-2 mr-2"></div>
                              <span className="text-sm text-dark-slate/80">Build momentum through consistent progress</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-blue-mell/10 rounded-lg p-4">
                          <h4 className="font-heading font-medium text-charcoal mb-2">What makes it different</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-cambridge-blue rounded-full mt-2 mr-2"></div>
                              <span className="text-sm text-dark-slate/80">Practical systems, not just theory</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-cambridge-blue rounded-full mt-2 mr-2"></div>
                              <span className="text-sm text-dark-slate/80">Self-accountability, not dependency</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Method;