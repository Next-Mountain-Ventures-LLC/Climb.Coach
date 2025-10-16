import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('form_name', 'Newsletter Signup');
      
      const response = await fetch('https://api.new.website/api/submit-form/', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="relative py-16 bg-gradient-to-b from-cambridge-blue/30 to-mountain-green/20">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('/topography-pattern.svg')] bg-repeat"></div>
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('/mountain-bg.svg')] bg-no-repeat bg-cover bg-center"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-cambridge-blue/40 to-mountain-green/40"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-mountain-green/50 shadow-lg transform hover:scale-[1.01] transition-all duration-300">
          <div className="p-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4 text-center">
                Climb Higher with Weekly Insights
              </h2>
              <p className="text-dark-slate/90 mb-6 text-center">
                Get exclusive productivity tips, entrepreneurial wisdom, and actionable advice delivered straight to your inbox.
              </p>
              <form 
                className="space-y-4"
                onSubmit={handleSubmit}
                method="post"
                action="https://api.new.website/api/submit-form/"
                encType="multipart/form-data"
              >
                <input 
                  type="hidden" 
                  name="form_name" 
                  value="Newsletter Signup" 
                />
                <div className="flex gap-3">
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
                  <Button 
                    type="submit" 
                    className="bg-dark-slate hover:bg-blue-mell text-white font-medium"
                    disabled={isSubmitting}
                  >
                  {isSubmitting ? (
                    'Subscribing...'
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Subscribe
                    </>
                  )}
                </Button>
              </div>
                
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