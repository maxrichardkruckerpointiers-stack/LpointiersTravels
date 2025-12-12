import React from 'react';
import { Facebook, Instagram, Twitter, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white py-12 border-t border-primary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
              <Globe size={24} className="text-secondary" />
              EcoExplorer<span className="text-secondary"> Mundo</span>
            </h3>
            <p className="text-gray-300 max-w-sm">
              Creating unforgettable memories in Cartagena. High quality, competitive prices, and a reputation built on trust and unique experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#philosophy" className="hover:text-secondary">Our Philosophy</a></li>
              <li><a href="#experiences" className="hover:text-secondary">Tours</a></li>
              <li><a href="#reviews" className="hover:text-secondary">Reviews</a></li>
              <li><a href="#" className="hover:text-secondary">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} EcoExplorer Mundo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;