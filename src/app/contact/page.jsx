import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <section className="mt-28 px-6 py-12 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl text-gray-800 font-bold text-center mb-8">Contact Me</h2>
        <p className="text-center text-gray-600 mb-8">
          Feel free to reach out via the form below. I’ll get back to you as soon as possible!
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:border-teal-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:border-teal-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-2 rounded-md hover:bg-teal-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Buttons - Separate from the form */}
        <div className="flex justify-center pt-10 space-x-4">
          {/* LinkedIn Button */}
          <Link
            href="https://linkedin.com"
            className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.225 0H1.771C.792 0 0 .771 0 1.719v20.533C0 23.229.792 24 1.771 24h20.451C23.207 24 24 23.229 24 22.252V1.719C24 .771 23.207 0 22.225 0zM7.125 20.452H3.769V9h3.356v11.452zM5.447 7.629C4.315 7.629 3.4 6.71 3.4 5.583c0-1.128.915-2.046 2.048-2.046 1.13 0 2.045.918 2.045 2.046 0 1.127-.915 2.046-2.045 2.046zM20.452 20.452h-3.356v-5.987c0-1.426-.512-2.398-1.793-2.398-1.007 0-1.606.684-1.87 1.344-.096.234-.12.561-.12.89v6.15h-3.355V9h3.355v1.561c.445-.688 1.239-1.67 3.012-1.67 2.202 0 3.85 1.444 3.85 4.548v6.013z"/>
            </svg>
            <span>LinkedIn</span>
          </Link>

          {/* GitHub Button */}
          <Link
            href="https://github.com"
            className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.304 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.833 2.809 1.304 3.495.997.108-.776.42-1.304.764-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.467-2.382 1.235-3.22-.123-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.006-.404 1.022.005 2.049.138 3.006.404 2.292-1.552 3.299-1.23 3.299-1.23.653 1.649.242 2.872.119 3.176.77.838 1.234 1.91 1.234 3.22 0 4.607-2.807 5.624-5.479 5.921.431.372.815 1.102.815 2.222 0 1.606-.015 2.902-.015 3.296 0 .32.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            <span>GitHub</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
