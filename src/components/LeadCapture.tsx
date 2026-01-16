import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function LeadCapture() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: 'serif' }}>
            Register Your Interest
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-white/80">
            Be the first to receive exclusive pricing, floor plans, and promotional offers
          </p>
        </div>

        {/* Form */}
        <div className="bg-zinc-900 border border-white/10 p-8 md:p-12">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-white/80">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-white/80">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="+60 12-345 6789"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-white/80">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-amber-500 text-black hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 group"
              >
                <span>Get Latest Price & Promotions</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-white/60 text-center mt-4">
                By submitting this form, you agree to be contacted by our sales team regarding Armani Hallson KLCC.
              </p>
            </form>
          ) : (
            <div className="py-12 text-center">
              <CheckCircle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl mb-3 text-white" style={{ fontFamily: 'serif' }}>
                Thank You!
              </h3>
              <p className="text-white/80">
                Your inquiry has been received. Our sales team will contact you shortly.
              </p>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-center text-sm text-white/60">
          <div>
            <p className="text-2xl text-amber-500 mb-1">500+</p>
            <p>Units Sold</p>
          </div>
          <div>
            <p className="text-2xl text-amber-500 mb-1">98%</p>
            <p>Customer Satisfaction</p>
          </div>
          <div>
            <p className="text-2xl text-amber-500 mb-1">2026</p>
            <p>Expected Completion</p>
          </div>
        </div>
      </div>
    </section>
  );
}