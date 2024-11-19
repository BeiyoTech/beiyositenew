import React from 'react'

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 py-12">
      <div className="max-w-2xl">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Offering You <br className="block" /> 
          <span className="text-yellow-500">Perfect</span> <br/> 
          Accommodation <br/> 
          Services 
        </h1>

        <p 
          className="text-lg md:text-xl text-gray-700 mb-8"
          data-aos="fade-right" 
          data-aos-duration="2000"
        >
          Affordable Comfortable Living for Professionals and Students
        </p>

        <a href="/hostel">
          <button 
            className="bg-yellow-500 hover:bg-yellow-600 text-black  py-3 px-6 rounded-lg transition duration-300"
            data-aos="zoom-in" 
            data-aos-duration="2000"
          >
            Explore
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero