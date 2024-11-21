"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Navbar from '../components/Navbar';

export default function AboutSection() {
  return (
    <div className="h-screen bg-[#f0f4f8] text-black flex flex-col">
      <Navbar />
      <div className="flex-1 py-40 overflow-auto">
        <div className="container mx-auto px-8">
          <div className="flex flex-col items-center">
            <p className="max-w-2xl text-center text-base md:text-lg mb-4">
              I'm a <span className="font-bold"> Student becoming somthing greater</span> building easy-to-use and high-performing applications. Check out some of my work in the Projects section!
            </p>
            <p className="max-w-2xl text-center text-base md:text-lg mb-4">
              I'm highly adaptive and love to learn, especially when it comes to problem-solving, coding, and creating tangible projects through design. Sharing knowledge with my peers is something I truly enjoy as well.
            </p>
            <p className="max-w-2xl text-center text-base md:text-lg mb-4">
              I'm always enthusiastic about learning and adapting to new experiences, and I thrive on embracing new challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <h2 className="text-center text-2xl font-bold mb-4">Technical Skills</h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {['C++', 'C#', 'JavaScript', 'Python', 'React.js', 'TailWindCSS', 'Node.js', 'TensorFlow', 'MySQL', 'Unity', 'Git', 'GitHub', 'React', 'HTML', 'CSS'].map(skill => (
                  <div 
                    key={skill} 
                    className="bg-white border border-gray-300 text-black px-2 py-1 rounded 
                             transition-transform duration-200 ease-in-out transform hover:scale-110 
                             hover:shadow-lg text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-center text-2xl font-bold mb-4">Soft Skills</h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Ambitious', 'Collaboration', 'Efficient', 'Communication', 'Adaptable', 'Analytical Thinking', 'Creativity', 'Critical Thinking', 'Empathy', 'Teamwork', 'Resilience', 'Time Management', 'Problem-Solving', 'Open-Mindedness', 'Decision-Making', 'Active Listening', 'Patience', 'Resourcefulness', 'Self-Motivation'].map(skill => (
                  <div 
                    key={skill} 
                    className="bg-white border border-gray-300 text-black px-2 py-1 rounded 
                             transition-transform duration-200 ease-in-out transform hover:scale-110 
                             hover:shadow-lg text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
