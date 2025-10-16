import React from 'react';
import { Check, Flag, Compass, Route, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: 'Weekly Summit Meeting',
      description: 'Your secret weapon for building an effective life, one week at a time.',
      price: '$299/mo',
      features: [
        '45-minute focused weekly sessions',
        'ClimbOS productivity system included',
        'Personalized guidance and accountability',
        'Unlimited support between sessions',
      ],
      icon: <Calendar className="h-12 w-12 text-mountain-green" />,
      primary: true,
    },
    {
      title: 'Monthly Summit Meeting',
      description: 'Monthly check-ins to keep you aligned with your goals.',
      price: '$150/mo',
      features: [
        '45-minute monthly sessions',
        'ClimbOS productivity system included',
        'Monthly goal setting and review',
        'Email support between sessions',
      ],
      icon: <Route className="h-12 w-12 text-cambridge-blue" />,
      primary: false,
    },
    {
      title: 'On-Demand Session',
      description: 'One-time coaching for specific challenges.',
      price: '$125/session',
      features: [
        '45-minute focused session',
        'Targeted problem solving',
        'Access to ClimbOS for 1 month',
        'Follow-up email support',
      ],
      icon: <Compass className="h-12 w-12 text-blue-mell" />,
      primary: false,
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-blue-mell/25 to-mountain-green/30">
      <div className="absolute inset-0 z-0 opacity-25 bg-[url('/topography-pattern.svg')] bg-repeat"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
            Find Your Path Forward
          </h2>
          <p className="text-lg text-dark-slate/80">
            Coaching that turns insights into actions. We don't just have great sessions. 
            We create real change, helping you climb your next mountain with clarity and consistency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className={`relative ${service.primary ? 'md:-mt-4 md:mb-4' : ''}`}>
              <Card className={`h-full border-2 ${service.primary ? 'border-blue-mell shadow-xl ring-4 ring-blue-mell/20' : 'border-mountain-green/60 shadow-md'} overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                <div className={`p-6 ${service.primary ? 'bg-gradient-to-br from-blue-mell/40 to-blue-mell/20' : 'bg-gradient-to-br from-mountain-green/25 to-cambridge-blue/10'}`}>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-heading font-bold text-charcoal">{service.title}</CardTitle>
                  <div className="mt-2 mb-4 flex items-baseline">
                    <span className="text-2xl font-heading font-bold text-dark-slate">{service.price}</span>
                  </div>
                  <CardDescription className="text-dark-slate/90">{service.description}</CardDescription>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-cambridge-blue mr-2 flex-shrink-0" />
                        <span className="text-charcoal/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8" style={{ backgroundColor: service.primary ? '#364958' : '#3B6064', color: 'white' }}>
                    {service.primary ? 'Start Climbing' : 'Book Now'}
                  </Button>
                  {service.primary && (
                    <p className="mt-2 text-xs text-center text-dark-slate/70">
                      First two sessions free
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-mountain-green/40 to-cambridge-blue/30 rounded-xl p-6 sm:p-10 shadow-lg border border-mountain-green/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <Flag className="h-10 w-10 text-blue-mell mr-4" />
              <div>
                <h3 className="text-xl font-heading font-bold text-charcoal">First Two Sessions Free</h3>
                <p className="text-dark-slate/80">Let's find your next summit together, no commitment required.</p>
              </div>
            </div>
            <Button size="lg" className="whitespace-nowrap" style={{ backgroundColor: '#364958', color: 'white' }}>
              Book Your Free Sessions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;