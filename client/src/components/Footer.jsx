import React from 'react';
import { Instagram, Facebook, Twitter, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">IH</div>
              <h3 className="text-xl font-bold">
                <span className="text-white">Influence</span>
                <span className="text-influencer-orange">Hub</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting brands with the perfect influencers to amplify your marketing campaigns and drive engagement.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-influencer-orange hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-influencer-orange hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-influencer-orange hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-influencer-orange hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-5 text-white border-b border-gray-800 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-influencer-orange transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-influencer-orange transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Browse Influencers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-influencer-orange transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-influencer-orange transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> About Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-5 border-b border-gray-800 pb-2">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-influencer-orange transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-influencer-orange transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-influencer-orange transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-influencer-orange transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" /> FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-5 border-b border-gray-800 pb-2">Subscribe</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest features and influencers</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-3 text-black bg-white rounded-l-lg w-full text-sm focus:outline-none" 
              />
              <button className="bg-orange-500 text-white px-4 py-3 rounded-r-lg text-sm">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-3">
              By subscribing you agree to our Privacy Policy
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} InfluenceHub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
