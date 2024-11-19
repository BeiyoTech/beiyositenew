import React from 'react'
import { Wifi, Droplet, CloudDrizzle, Shirt } from 'lucide-react';

const FeatureData = [
  {
    title: "WIFI",
    icon: Wifi,
    description: "Unlimited high-speed connectivity that keeps you seamlessly connected.",
    image: "/images/wifi.svg",
    background: "bg-blue-50"
  },
  {
    title: "Cleaning Service",
    icon: CloudDrizzle,
    description: "Professional cleaning that transforms your space into a pristine sanctuary.",
    image: "/images/cleaning.svg",
    background: "bg-green-50"
  },
  {
    title: "Purified Water",
    icon: Droplet,
    description: "Premium R.O. water ensuring your health and hydration are never compromised.",
    image: "/images/water.svg",
    background: "bg-cyan-50"
  },
  {
    title: "Washing Machine",
    icon: Shirt,
    description: "Hassle-free laundry service keeping your clothes fresh and stylish.",
    image: "/images/washing machine.svg",
    background: "bg-purple-50"
  }
];

const Feature = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-black mb-4 tracking-wider uppercase">
            Our Features
          </h1>
          <p className="text-xl text-gray-600 font-light">Elevating Your Living Experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FeatureData.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.background} border border-gray-100 rounded-3xl p-6 
                         transform transition-all duration-300 
                         hover:shadow-2xl hover:scale-105 hover:border-yellow-400
                         flex flex-col items-center text-center group`}
            >
              <div className="mb-6 w-24 h-24 flex items-center justify-center 
                              bg-white rounded-full shadow-md group-hover:shadow-xl">
                <feature.icon 
                  className="text-gray-700 group-hover:text-yellow-500 transition-colors" 
                  size={48} 
                />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h2>
              
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-32 h-32 mb-4 object-contain group-hover:scale-110 transition-transform"
              />
              
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feature