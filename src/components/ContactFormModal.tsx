import React, { useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const defaultFormData = {name: "", email: "", message: "", form_name: "Coach Contact Form"};
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
      const formDataObj = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });
      
      const response = await fetch("https://api.new.website/api/submit-form/", {
        method: "POST",
        body: formDataObj,
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
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md relative overflow-hidden">
        <div className="bg-gradient-to-r from-mountain-green to-cambridge-blue p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-heading font-bold text-white">Talk With A Coach</h2>
            <button 
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <p className="text-white/90 mt-2">Fill out this form and a coach will get back to you shortly.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-mell focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-mell focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-mell focus:border-transparent"
            />
          </div>

          <input name="form_name" type="hidden" value={formData.form_name} />
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            style={{ backgroundColor: '#3B6064' }}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

          {submitStatus === "success" && (
            <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              Form submitted successfully! We'll be in touch soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              There was an error submitting the form. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}