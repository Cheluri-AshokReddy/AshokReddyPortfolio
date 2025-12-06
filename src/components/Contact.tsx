import React, { useState } from 'react';
import { Github, Mail, Phone, Download, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/xjkrllro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('sent');
        alert('✅ Message sent successfully!');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else throw new Error('Error sending form');
    } catch (err) {
      console.error(err);
      setStatus('error');
      alert('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto" />
          <p className="text-gray-400 mt-4">
            Let's discuss opportunities and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                  focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                  focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                  focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg 
                  focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg 
                font-medium hover:from-purple-700 hover:to-blue-700 transition duration-200 
                transform hover:scale-105"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                Contact Information
              </h3>

              <div className="space-y-4">

                {/* Phone */}
                <a
                  href="tel:+919515822637"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg 
                  border border-gray-700 hover:scale-105 transition-transform duration-300"
                >
                  <Phone className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white hover:underline">+91 9515822637</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:ashokreddy20020427@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg 
                  border border-gray-700 hover:scale-105 transition-transform duration-300"
                >
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white hover:underline">ashokreddy20020427@gmail.com</p>
                  </div>
                </a>

                {/* Address */}
                <div
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 
                  hover:scale-105 transition-transform duration-300"
                >
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">Gorantla, Sri Sathya Sai (Dist), Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">
                Connect with me
              </h4>

              <div className="flex gap-4">

                {/* GitHub */}
                <a
                  href="https://github.com/Cheluri-AshokReddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-600 
                  hover:border-purple-500 transition transform hover:scale-90"
                >
                  <Github className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ashokreddycheluri-740603235/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-600 
                  hover:border-purple-500 transition transform hover:scale-90"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ashokreddy_cheluri/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-600 
                  hover:border-purple-500 transition transform hover:scale-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37a4 4 0 11-8 0 4 4 0 018 0z" />
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                  </svg>
                </a>

                {/* Medium */}
                <a
                  href="https://medium.com/@ashokreddy20020427"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-600 
                  hover:border-purple-500 transition transform hover:scale-90"
                >
                  <svg viewBox="0 0 1043.63 592.71" className="w-5 h-5 fill-white">
                    <path d="M588.67 296.35c0 163.78-131.78 296.36-294.34 296.36S0 460.12 0 296.35 131.78 0 294.34 0s294.33 132.58 294.33 296.35zm328.7 0c0 154-65.89 279-147.18 279s-147.17-125-147.17-279 65.88-279 147.17-279 147.18 125 147.18 279zm126.26 0c0 141.86-14.75 256.9-32.96 256.9S977.7 438.21 977.7 296.35 992.45 39.45 1010.67 39.45s32.96 115 32.96 256.9z"/>
                  </svg>
                </a>

              </div>
            </div>

            {/* Resume Download */}
            <div>
              <a
                href="/AshokJavaDeveloper.pdf"
                download
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r 
                from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 
                hover:to-blue-700 transition transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
