import React from 'react';
import Image from 'next/image';
import Navbar from '/Components/Navbar.jsx'; 

export default function Home() {
  return (
    <>
      <Navbar /> {Navbar}
      <div>
        <div className="relative w-full h-[500px]">
          <Image 
            src="/images/Image4.jpg" 
            alt="home image" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-70" 
          />
          <div className="absolute inset-0 flex items-center justify-right mt-[-90px]">
            <h1 className="text-black text-5xl font-semi-bold font-family-Raleway-sans-serif">
              Procare Patient Management System
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h1 className="justify-center text-black text-3xl font-bold"> ABOUT US </h1>
          <h2 className="justify-center text-black text-2xl font-semi-bold"> We Prioritize your health </h2>
        </div>

        <div className="flex justify-center mt-8 w-full px-10">
          <div className="w-1/2 mt-[50px]">
            <Image 
              src="/images/Image6.jpg" 
              alt="About Us Image" 
              width={500} 
              height={100} 
              className="rounded-lg"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center pl-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Procare Patient Management System is your trusted partner in modern healthcare, 
              streamlining patient records, appointments, and medical processes. Our mission is to 
              enhance efficiency, reduce administrative burdens, and improve patient care through a 
              secure, digital-first approach. Whether for small clinics or large hospitals, Procare PMS 
              simplifies healthcare management, allowing providers to focus on delivering quality care.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h1 className="justify-center text-black text-3xl font-bold"> OUR MISSION </h1>
        </div>

        <div className="flex justify-center mt-8 w-full px-10">
          <div className="w-1/2 flex flex-col justify-center pl-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to empower healthcare providers by streamlining patient management, 
              optimizing medical workflows, and enhancing the overall healthcare experience. 
              We strive to create a seamless, efficient, and patient-centric system that improves accessibility, 
              reduces administrative burdens, and ensures quality care for all.
            </p>
          </div>
          <div className="w-1/2 mt-[50px]">
            <Image 
              src="/images/Image9.jpg" 
              alt="About Us Image" 
              width={500} 
              height={200} 
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};