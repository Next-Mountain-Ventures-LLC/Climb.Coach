import React, { useState } from 'react';
import { Send, CheckCircle, ArrowRight, User, Phone } from 'lucide-react';

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
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Ensure all required fields are included
      formData.set('email', email);
      formData.set('first_name', firstName);
      formData.set('last_name', lastName);
      formData.set('form_name', 'Newsletter Signup');
      if (phone) formData.set('phone', phone);
      
      console.log('Submitting form with fields:', [...formData.entries()].map(entry => entry[0] + ': ' + entry[1]));
      
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
    <section className="relative py-16 bg-gradient-to-b from-cambridge-blue/40 to-mountain-green/30">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('/topography-pattern.svg')] bg-repeat"></div>
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('/mountain-silhouette.svg')] bg-no-repeat bg-left bg-contain transform scale-x-[-1]"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg border border-mountain-green/50">
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
                method="post"
                encType="multipart/form-data"
                action="https://api.new.website/api/submit-form/"
              >
                <input type="hidden" name="form_name" value="Newsletter Signup" />
                
                {step === 'email' ? (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      name="email" 
                      id="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-3 rounded-lg border border-mountain-green/50 text-dark-slate focus:outline-none focus:ring-2 focus:ring-blue-mell"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button 
                      type="submit" 
                      name="next_button"
                      className="py-3 px-6 bg-charcoal hover:bg-dark-slate transition-colors duration-200 flex items-center justify-center relative z-10 shadow-md border-2 border-charcoal rounded-lg"
                      style={{ color: '#ffffff' }}
                    >
                      <span style={{ color: '#ffffff' }} className="font-bold">Next</span>
                      <ArrowRight className="ml-2 h-5 w-5" style={{ color: '#ffffff' }} />
                    </button>
                  </div>
                ) : (
                  <>
                    <input type="hidden" name="email" value={email} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-slate/40 h-5 w-5" />
                        <input 
                          type="text" 
                          name="first_name" 
                          id="first_name"
                          placeholder="First name"
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-mountain-green/50 text-dark-slate focus:outline-none focus:ring-2 focus:ring-blue-mell"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-slate/40 h-5 w-5" />
                        <input 
                          type="text" 
                          name="last_name" 
                          id="last_name"
                          placeholder="Last name"
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-mountain-green/50 text-dark-slate focus:outline-none focus:ring-2 focus:ring-blue-mell"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-slate/40 h-5 w-5" />
                      <input 
                        type="tel" 
                        name="phone" 
                        id="phone"
                        placeholder="Phone number (optional)"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-mountain-green/50 text-dark-slate focus:outline-none focus:ring-2 focus:ring-blue-mell"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    
                    <p className="text-xs text-dark-slate/60 text-center">
                      Helps us deliver insights straight to your phone
                    </p>
                    
                    <div className="flex justify-between mt-4 gap-4">
                      <button 
                        type="button"
                        name="back_button"
                        className="py-3 px-6 border-2 border-charcoal bg-white hover:bg-gray-100 transition-colors duration-200 relative z-10 shadow-md rounded-lg"
                        onClick={() => setStep('email')}
                        style={{ color: '#364958' }}
                      >
                        <span style={{ color: '#364958' }} className="font-bold">Back</span>
                      </button>
                      <button 
                        type="submit"
                        name="submit_button"
                        className="py-3 px-6 bg-charcoal hover:bg-dark-slate transition-colors duration-200 flex items-center justify-center relative z-10 shadow-md border-2 border-charcoal rounded-lg"
                        disabled={isSubmitting}
                        style={{ color: '#ffffff' }}
                      >
                        {isSubmitting ? (
                          <span style={{ color: '#ffffff' }} className="font-bold">Subscribing...</span>
                        ) : submitStatus === 'success' ? (
                          <>
                            <CheckCircle className="mr-2 h-5 w-5" style={{ color: '#ffffff' }} />
                            <span style={{ color: '#ffffff' }} className="font-bold">Subscribed!</span>
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" style={{ color: '#ffffff' }} />
                            <span style={{ color: '#ffffff' }} className="font-bold">Subscribe</span>
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-600 text-white text-sm text-center rounded-lg">
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