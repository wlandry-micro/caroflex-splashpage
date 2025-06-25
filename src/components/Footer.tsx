
import { Shirt } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="p-2 bg-blue-600 rounded-lg mr-3">
              <Shirt className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              Caro<span className="text-blue-400">Flex</span>
            </span>
          </div>
          
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Your trusted partner for premium custom apparel printing and embroidery services. 
            Quality craftsmanship, competitive pricing, and exceptional customer service.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8 text-sm">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            <a href="#quote" className="hover:text-blue-400 transition-colors">Get Quote</a>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500">
              © 2024 CaroFlex Printing. All rights reserved. | Bringing your designs to life, one print at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
