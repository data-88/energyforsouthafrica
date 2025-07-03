"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  Zap, Lightbulb, TrendingUp, Phone, Mail, MapPin, Users, Target, Rocket, Sun, Wind, BatteryCharging, ShieldCheck, Handshake, ChevronRight
} from "lucide-react";

const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "About Us" },
  { id: "services", title: "Services" },
  { id: "contact", title: "Contact Us" },
];

export default function Home() {
  // Smooth scroll handler
  useEffect(() => {
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target && target.dataset && target.dataset.scroll) {
        e.preventDefault();
        const id = target.dataset.scroll;
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  // HubSpot form script loader
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/146482095.js';
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-6 md:px-12 flex justify-between items-center rounded-b-xl">
        <div className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">Energy South Africa</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {sections.map(section => (
            <button
              key={section.id}
              data-scroll={section.id}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              {section.title}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile Menu Button (Hamburger Icon) - For a real app, this would toggle a mobile menu */}
          <button className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white pt-16 md:pt-0">
        <div className="text-center p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-down">
            Powering a Brighter Future for South Africa
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up">
            Your trusted partner in sustainable and efficient energy solutions across the nation.
          </p>
          <button
            data-scroll="services"
            className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
          >
            Explore Our Solutions <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">About Energy South Africa</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                At <span className="font-bold">Energy South Africa</span>, we are driven by a singular mission: to revolutionize the energy landscape of our nation. Established with a deep understanding of South Africa&apos;s unique energy challenges and opportunities, we are committed to delivering innovative, sustainable, and reliable energy solutions that empower communities and fuel economic growth.
              </p>
              <p>
                Our team comprises seasoned experts in renewable energy, energy efficiency, and power infrastructure, all dedicated to fostering a greener, more resilient future. We believe in harnessing the abundant natural resources of South Africa – from the sun to the wind – to create a robust and equitable energy system for all.
              </p>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="w-full h-64 md:h-96 bg-blue-100 rounded-2xl shadow-xl overflow-hidden">
          <Image
                  src="/solar-panels.webp"
                  alt="Solar panels in South Africa"
                  fill
                  className="object-cover rounded-2xl"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-gray-800">Community Focused</span>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-50 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-700">To be the leading catalyst for a sustainable and energy-independent South Africa.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <Rocket className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700">Delivering innovative, reliable, and affordable energy solutions that foster growth and sustainability.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
              <p className="text-gray-700">Integrity, Innovation, Sustainability, Community, and Excellence in every endeavor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">Our Energy Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1: Solar Power */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:translate-y-[-5px] transition-transform duration-300 border border-blue-200">
              <Sun className="h-16 w-16 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Solar Power Solutions</h3>
              <p className="text-gray-700 mb-6">
                Harness the abundant South African sun with our comprehensive solar panel installations for homes, businesses, and industrial sites. From grid-tied to off-grid systems, we provide tailored solutions for maximum efficiency and savings.
              </p>
              <ul className="text-left text-gray-600 space-y-2 w-full">
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Residential Solar</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Commercial & Industrial PV</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Solar Water Heating</li>
              </ul>
            </div>

            {/* Service Card 2: Wind Energy */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:translate-y-[-5px] transition-transform duration-300 border border-blue-200">
              <Wind className="h-16 w-16 text-green-500 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wind Energy Projects</h3>
              <p className="text-gray-700 mb-6">
                Explore the power of wind with our expertise in wind turbine installation and management. We develop utility-scale wind farms and smaller-scale solutions for remote areas, contributing to a diversified energy mix.
              </p>
              <ul className="text-left text-gray-600 space-y-2 w-full">
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Wind Farm Development</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Small Wind Solutions</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Wind Energy Consulting</li>
              </ul>
            </div>

            {/* Service Card 3: Energy Storage */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:translate-y-[-5px] transition-transform duration-300 border border-blue-200">
              <BatteryCharging className="h-16 w-16 text-purple-500 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Advanced Energy Storage</h3>
              <p className="text-gray-700 mb-6">
                Ensure reliable power supply with our cutting-edge battery energy storage systems (BESS). From residential backup to grid-scale solutions, we provide efficient storage to optimize energy usage and mitigate load shedding.
              </p>
              <ul className="text-left text-gray-600 space-y-2 w-full">
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Residential Battery Backup</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Commercial BESS</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Grid Stabilization</li>
              </ul>
            </div>

            {/* Service Card 4: Energy Efficiency */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:translate-y-[-5px] transition-transform duration-300 border border-blue-200">
              <Lightbulb className="h-16 w-16 text-orange-500 mb-6" />
              <h3 className="2xl font-semibold text-gray-900 mb-4">Energy Efficiency Audits</h3>
              <p className="text-gray-700 mb-6">
                Reduce your energy consumption and costs with our comprehensive energy audits. We identify inefficiencies and recommend practical solutions for homes, businesses, and industrial facilities.
              </p>
              <ul className="text-left text-gray-600 space-y-2 w-full">
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Residential Audits</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Commercial Audits</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Industrial Optimization</li>
              </ul>
            </div>

            {/* Service Card 5: Consulting & Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:translate-y-[-5px] transition-transform duration-300 border border-blue-200">
              <Handshake className="h-16 w-16 text-teal-500 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Consulting & Project Development</h3>
              <p className="text-gray-700 mb-6">
                Leverage our expertise for your energy projects. We offer end-to-end consulting, from feasibility studies and design to project management and policy advisory, ensuring successful implementation.
              </p>
              <ul className="text-left text-gray-600 space-y-2 w-full">
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Feasibility Studies</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Project Management</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Policy Advisory</li>
              </ul>
            </div>

            {/* Service Card 6: Grid Modernization */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:translate-y-[-5px] transition-transform duration-300 border border-blue-200">
              <TrendingUp className="h-16 w-16 text-red-500 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Grid Modernization</h3>
              <p className="text-gray-700 mb-6">
                We contribute to the modernization of South Africa&apos;s electrical grid, integrating smart technologies and decentralized energy sources to enhance reliability, efficiency, and resilience.
              </p>
              <ul className="text-left text-gray-600 space-y-2 w-full">
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Smart Grid Solutions</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Distributed Generation</li>
                <li className="flex items-center"><ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> Infrastructure Upgrades</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-blue-700 to-indigo-900 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-gray-800">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <div id="hubspot-form-wrapper">
                <div className="hs-form-frame" data-region="eu1" data-form-id="e8c9ca10-3124-46d6-9d4b-0e43402a4a1c" data-portal-id="146482095"></div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-gray-800 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-lg text-gray-700">+27 729418482</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-lg text-gray-700">info@energysouthafrica.co.za</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-8 w-8 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-lg text-gray-700">
                      1 Brauteseth Road, Marburg, Port Shepstone, 4240
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-6">
                  {/* Placeholder for social media icons */}
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012 10.792v.05c0 4.477 3.197 8.138 7.463 8.988a4.096 4.096 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.277a11.616 11.616 0 006.29 1.974c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012 10.792v.05c0 4.477 3.197 8.138 7.463 8.988a4.096 4.096 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.277a11.616 11.616 0 006.29 1.974z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.163 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.867-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.088 2.91.83.091-.644.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.949 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.65 0 0 .84-.268 2.75 1.025A9.432 9.432 0 0112 6.844c.85.004 1.701.114 2.511.331 1.909-1.293 2.747-1.025 2.747-1.025.546 1.38.202 2.398.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C21.137 20.16 24 16.416 24 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 5.892c-.753.336-1.556.562-2.392.665a4.346 4.346 0 001.9-2.316 8.682 8.682 0 01-2.659 1.018 4.338 4.338 0 00-7.418 3.931 12.288 12.288 0 01-8.913-4.516 4.338 4.338 0 001.344 5.792 4.316 4.316 0 01-1.965-.542v.054a4.336 4.336 0 003.485 4.244 4.35 4.35 0 01-1.954.074 4.348 4.348 0 004.053 3.023 8.71 8.71 0 01-5.393 1.868c-.354 0-.705-.021-1.05-.062a12.27 12.27 0 006.643 1.94c8.006 0 12.378-6.627 12.378-12.378 0-.188 0-.376-.01-.563a8.85 8.85 0 002.16-2.242z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 md:px-12 text-center rounded-t-xl">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Energy South Africa. All rights reserved.</p>
          <p className="text-sm mt-2">Empowering a sustainable future, one solution at a time.</p>
        </div>
      </footer>

      {/* Animations via Tailwind */}
      <style jsx global>{`
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Hide HubSpot "Create your free form" branding if present */
        .hs-form-cta, .hs-form-cta a, .hs-form-cta__link, .hs-form-cta__text, .hs-form-cta__container {
          display: none !important;
        }
        /* Hide HubSpot viral link container */
        .View__StyledView-vflxgi-0,
        .View__StyledView-vflxgi-0 * {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
