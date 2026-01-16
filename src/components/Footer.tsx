import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4 text-white" style={{ fontFamily: 'serif' }}>
              ARMANI HALLSON
            </h3>
            <p className="text-sm text-white/60 mb-4">KLCC</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Redefining luxury living in the heart of Kuala Lumpur's most prestigious address.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-white/70">
              <a 
                href="tel:+60123456789" 
                className="flex items-center gap-3 hover:text-amber-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+60 12-345 6789</span>
              </a>
              <a 
                href="mailto:sales@armanihallson.com" 
                className="flex items-center gap-3 hover:text-amber-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>sales@armanihallson.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Jalan Ampang, KLCC<br />50450 Kuala Lumpur</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg mb-4 text-white">Get In Touch</h4>
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 transition-colors mb-4"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
            <p className="text-xs text-white/60">
              Sales Gallery Open Daily<br />
              10:00 AM - 7:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2026 Armani Hallson KLCC. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Terms & Conditions</a>
            </div>
          </div>
          <p className="text-xs text-white/50 text-center md:text-left mt-4">
            Disclaimer: All images are for illustration purposes only. Actual unit layouts, finishes, and facilities may vary. 
            Prices are subject to change without prior notice. This advertisement does not constitute an offer or contract.
          </p>
        </div>
      </div>
    </footer>
  );
}