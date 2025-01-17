import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', receiverEmail: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', message: '', receiverEmail: '' }); // Reset form
      } else {
        setStatus('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <section className="mt-28 px-6 py-12 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl text-gray-800 font-bold text-center mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:border-teal-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="receiverEmail" className="block text-gray-700 font-semibold">Recipient Email</label>
            <input
              type="email"
              id="receiverEmail"
              value={formData.receiverEmail}
              onChange={(e) => setFormData({ ...formData, receiverEmail: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:border-teal-500"
              placeholder="Recipient Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:border-teal-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-2 rounded-md hover:bg-teal-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {status && <p className="text-center text-red-500 mt-4">{status}</p>}
      </section>
    </div>
  );
}
