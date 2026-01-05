import React, { useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const defaultFormData = {name: "", email: "", message: "", form_name: "Talk With A Coach"};
  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  // Handle click outside modal to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Configure form submission backend
      // Replace with your backend endpoint or form service (e.g., Formspree, EmailJS, etc.)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData(defaultFormData);
        // Close the modal after successful submission after a delay
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-3 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto relative overflow-hidden">
        <div className="bg-gradient-to-r from-mountain-green to-cambridge-blue pt-3 pb-2 px-4 relative">
          <button 
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-1 transition-colors absolute top-2 right-2"
          >
            <X size={20} />
          </button>
          
          <div className="flex flex-col items-center">
            <img src="/main_no_bg_nw_b5d07dc7.png" alt="Climb.Coach" className="h-10 w-auto mb-1" />
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white text-center">Talk With A Coach</h2>
            <p className="text-white/90 text-sm mt-0.5 text-center">Fill out this form and a coach will get back to you shortly.</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="pt-4 px-4 pb-3 sm:p-5 space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-0.5">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-1.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-mell focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-0.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-1.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-mell focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-0.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full px-3 py-1.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-mell focus:border-transparent"
            />
          </div>

          <input name="form_name" type="hidden" value={formData.form_name} />
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white font-medium text-sm sm:text-base py-1.5 h-auto sm:py-2"
            style={{ backgroundColor: '#3B6064' }}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

          {submitStatus === "success" && (
            <div className="p-2 sm:p-3 bg-green-100 border border-green-400 text-green-700 text-sm rounded">
              Form submitted successfully! We'll be in touch soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-2 sm:p-3 bg-red-100 border border-red-400 text-red-700 text-sm rounded">
              There was an error submitting the form. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
