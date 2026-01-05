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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log('Moving to details step with email:', email);
    setStep('details');
  };
  
  // Format phone number to ensure it has +1 prefix
  const formatPhoneWithCountryCode = (phoneNumber: string): string => {
    if (!phoneNumber) return '';
    
    // Remove all non-digit characters
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    
    // Check if it already has country code
    if (digitsOnly.startsWith('1')) {
      return `+${digitsOnly}`;
    } else {
      return `+1${digitsOnly}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !lastName) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setShowSuccessMessage(false);

    try {
      // TODO: Configure form submission backend
      // Replace with your backend endpoint or form service (e.g., Formspree, EmailJS, etc.)
      const payload = {
        email,
        first_name: firstName,
        last_name: lastName,
        phone: phone ? formatPhoneWithCountryCode(phone) : '',
        form_name: 'Newsletter Signup',
        form_type: 'newsletter',
      };

      console.log('Submitting form with fields:', payload);

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setShowSuccessMessage(true);
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
                id="newsletter-form"
                className="space-y-4"
                onSubmit={step === 'email' ? handleNext : handleSubmit}
                name="newsletter-signup"
              >
                <input type="hidden" name="form_name" value="Newsletter Signup" />
                <input type="hidden" name="form_type" value="newsletter" />
                
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
                      className="py-3 px-6 bg-white hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center relative z-10 shadow-md border-2 border-charcoal rounded-lg"
                      style={{ color: '#364958' }}
                    >
                      <span style={{ color: '#364958' }} className="font-bold">Next</span>
                      <ArrowRight className="ml-2 h-5 w-5" style={{ color: '#364958' }} />
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
                        placeholder="Phone number (optional, +1 will be added)"
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
                        className="py-3 px-6 bg-white hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center relative z-10 shadow-md border-2 border-charcoal rounded-lg"
                        disabled={isSubmitting}
                        style={{ color: '#364958' }}
                      >
                        {isSubmitting ? (
                          <span style={{ color: '#364958' }} className="font-bold">Subscribing...</span>
                        ) : submitStatus === 'success' ? (
                          <>
                            <CheckCircle className="mr-2 h-5 w-5" style={{ color: '#364958' }} />
                            <span style={{ color: '#364958' }} className="font-bold">Subscribed!</span>
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" style={{ color: '#364958' }} />
                            <span style={{ color: '#364958' }} className="font-bold">Subscribe</span>
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
                
                {showSuccessMessage && (
                  <div className="p-4 bg-cambridge-blue/40 border border-cambridge-blue text-dark-slate text-center rounded-lg mt-4 shadow-sm">
                    <CheckCircle className="inline-block mr-2 h-5 w-5 text-dark-slate" />
                    <span className="font-medium">Thank you for subscribing! You'll receive our first newsletter soon.</span>
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
