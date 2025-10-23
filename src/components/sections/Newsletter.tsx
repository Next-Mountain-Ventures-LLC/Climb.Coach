import React, { useState } from 'react';
import { Send, CheckCircle, ArrowRight, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState<'email' | 'details'>('email');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStep('details');
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !lastName) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Create FormData object from the form element
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Ensure email is included (in case it's a hidden field)
      if (!formData.get('email')) {
        formData.set('email', email);
      }
      
      // Ensure form_name is set
      if (!formData.get('form_name')) {
        formData.set('form_name', 'Newsletter Signup');
      }
      
      // Log the form data keys to help with debugging
      console.log('Submitting form with fields:', [...formData.entries()].map(entry => entry[0]));
      
      const response = await fetch('https://api.new.website/api/submit-form/', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
        setFirstName('');
        setLastName('');
        setPhone('');
        setStep('email');
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed with status:', response.status);
        const errorText = await response.text();
        console.error('Error details:', errorText);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Exception during form submission:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="relative py-16 bg-gradient-to-b from-cambridge-blue/30 to-mountain-green/20">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('/topography-pattern.svg')] bg-repeat"></div>
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('/mountain-silhouette.svg')] bg-no-repeat bg-left bg-contain transform scale-x-[-1]"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-cambridge-blue/40 to-mountain-green/40"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-mountain-green/50 shadow-lg transform hover:scale-[1.01] transition-all duration-300">
          <div className="p-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4 text-center">
                Climb Higher with Monthly Insights
              </h2>
              <p className="text-dark-slate/90 mb-6 text-center">
                Get exclusive productivity tips, entrepreneurial wisdom, and actionable advice delivered straight to your inbox.
              </p>
              <form 
                className="space-y-4"
                onSubmit={step === 'email' ? handleNext : handleSubmit}
                encType="multipart/form-data"
                method="post"
                action="https://api.new.website/api/submit-form/"
                data-netlify="false"
              >
                <input 
                  type="hidden" 
                  name="form_name" 
                  value="Newsletter Signup" 
                />
                
                {/* Always include email field (hidden if on second step) */}
                {step === 'email' ? (
                  <div className="flex gap-3 w-full">
                    <input 
                      type="email" 
                      name="email" 
                      id="email"
                      placeholder="Your email address"
                      aria-label="Email address"
                      className="flex-1 px-4 py-3 rounded-lg bg-white border border-mountain-green/30 text-dark-slate placeholder:text-dark-slate/60 focus:outline-none focus:ring-2 focus:ring-mountain-green/30"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button 
                      type="submit" 
                      name="next_step"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-dark-slate hover:bg-blue-mell text-white px-4 py-2 h-9 shadow-sm relative z-10 flex-shrink-0"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 text-white" />
                      Next
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Hidden email field for when we're on second step */}
                    <input 
                      type="hidden" 
                      name="email" 
                      value={email}
                    />
                
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-slate/40 h-4 w-4" />
                        <input 
                          type="text" 
                          name="first_name" 
                          id="first_name"
                          placeholder="First name"
                          className="w-full pl-9 pr-4 py-3 rounded-lg bg-white border border-mountain-green/30 text-dark-slate placeholder:text-dark-slate/60 focus:outline-none focus:ring-2 focus:ring-mountain-green/30"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-slate/40 h-4 w-4" />
                        <input 
                          type="text" 
                          name="last_name" 
                          id="last_name"
                          placeholder="Last name"
                          className="w-full pl-9 pr-4 py-3 rounded-lg bg-white border border-mountain-green/30 text-dark-slate placeholder:text-dark-slate/60 focus:outline-none focus:ring-2 focus:ring-mountain-green/30"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-slate/40 h-4 w-4" />
                      <input 
                        type="tel" 
                        name="phone" 
                        id="phone"
                        placeholder="Phone number (optional)"
                        className="w-full pl-9 pr-4 py-3 rounded-lg bg-white border border-mountain-green/30 text-dark-slate placeholder:text-dark-slate/60 focus:outline-none focus:ring-2 focus:ring-mountain-green/30"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <p className="text-xs text-dark-slate/60 text-center mt-1">
                      Helps us deliver insights straight to your phone
                    </p>
                    <div className="flex justify-between gap-3 mt-4 w-full">
                      <button 
                        type="button" 
                        name="back"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-dark-slate/30 bg-white text-dark-slate hover:bg-dark-slate/10 px-4 py-2 h-9 shadow-sm relative z-10 flex-shrink-0"
                        onClick={() => setStep('email')}
                      >
                        Back
                      </button>
                      <button 
                        type="submit" 
                        name="submit"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-dark-slate hover:bg-blue-mell text-white px-4 py-2 h-9 shadow-sm relative z-10 flex-shrink-0"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          'Subscribing...'
                        ) : submitStatus === 'success' ? (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4 text-white" />
                            Subscribed!
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4 text-white" />
                            Subscribe
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  </>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-2 bg-red-700/80 rounded text-white text-sm text-center">
                    Subscription failed. Please try again.
                  </div>
                )}
                <p className="text-xs text-dark-slate/60 text-center mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;