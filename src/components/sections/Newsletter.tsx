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
    <section className="relative py-16 bg-gradient-to-b from-dark-slate/25 to-mountain-green/20">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/mountain-pattern.svg')] bg-repeat opacity-25"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-mell to-dark-slate rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                Climb Higher with Weekly Insights
              </h2>
              <p className="text-white/80 mb-6">
                Get exclusive productivity tips, entrepreneurial wisdom, and actionable advice delivered straight to your inbox.
              </p>
              <form 
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your email address"
                    aria-label="Email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-white hover:bg-mountain-green hover:text-charcoal text-dark-slate font-medium"
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
                
                {submitStatus === 'error' && (
                  <div className="p-2 bg-red-700/80 rounded text-white text-sm text-center">
                    Subscription failed. Please try again.
                  </div>
                )}
                <p className="text-xs text-white/60 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mountain-green/40 to-cambridge-blue/40 transform -skew-x-6"></div>
              <div className="absolute inset-0 bg-[url('/mountain-pattern.svg')] bg-no-repeat bg-cover opacity-35"></div>
              <div className="relative h-full flex flex-col items-center justify-center p-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-white text-lg font-heading font-bold mb-2">Join Our Community</div>
                  <p className="text-white/80 text-sm">
                    Connect with like-minded entrepreneurs on the climb toward purposeful success.
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

export default Newsletter;