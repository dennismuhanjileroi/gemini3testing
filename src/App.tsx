/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Simulate API call
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#E0F7FF] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/50 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-200/50 rounded-full blur-3xl animate-pulse" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center space-y-8 relative z-10"
      >
        {/* Icon */}
        <div className="flex justify-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9] to-[#22D3EE] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200"
          >
            <Mail className="text-white w-8 h-8" />
          </motion.div>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Something Amazing
          </h1>
          <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] bg-clip-text text-transparent tracking-tight leading-tight">
            Is Coming Soon
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg mx-auto leading-relaxed">
          We're crafting an exceptional experience just for you. Join our waitlist to be the first to know when we launch.
        </p>

        {/* Form */}
        <div className="max-w-md mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-2 rounded-3xl shadow-xl shadow-blue-100/50 flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-2xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-200 hover:shadow-xl hover:opacity-90 transition-all whitespace-nowrap"
            >
              {isSubmitted ? 'Success!' : 'Notify Me'}
            </motion.button>
          </form>
          
          {/* Success Message */}
          {isSubmitted && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-emerald-600 font-medium"
            >
              Thanks! We'll keep you posted.
            </motion.p>
          )}
        </div>

        {/* Footer */}
        <p className="text-slate-400 text-sm font-medium">
          No spam, ever. Unsubscribe at any time.
        </p>
      </motion.div>
    </div>
  );
}
