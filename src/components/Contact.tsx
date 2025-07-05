import React, { useState } from 'react';
import { Github, Mail, Phone, Download, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto" />
          <p className="text-gray-400 mt-4">Let's discuss opportunities and collaborations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ----- contact form ----- */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              {/* phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              {/* email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              {/* message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              {/* submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition duration-200 transform hover:scale-105"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* ----- contact info ----- */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Contact Information</h3>

              <div className="space-y-4">
                {/* phone */}
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white">+91&nbsp;9515822637</p>
                  </div>
                </div>
                {/* email */}
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white">ashokreddy20020427@gmail.com</p>
                  </div>
                </div>
                {/* address */}
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">Gorantla, Sri Sathya Sai (Dist), Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* socials */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Cheluri-AshokReddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-600 hover:border-purple-500 transition duration-200 ease-in-out transform hover:scale-90"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashokreddycheluri-740603235/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-600 hover:border-purple-500 transition-colors duration-200 hover:scale-90 transform"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/ashokreddy_cheluri/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg border border-gray-600 hover:border-purple-500 transition-colors duration-200 hover:scale-90 transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37a4 4 0 11-8 0 4 4 0 018 0z" />
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            {/* resume */}
            <div>
              <a
                href="/AshokJavaDeveloper.pdf"
                download
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition duration-200 transform hover:scale-105"
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
