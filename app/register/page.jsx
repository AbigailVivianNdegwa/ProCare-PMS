'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', EnterPassword: '', repeatPassword: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering user:', form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Create an Account!</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="border p-2 rounded w-full" required />
            <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="border p-2 rounded w-full" required />
          </div>
          <input type="text" name="otherNames" placeholder="Other Names" value={form.otherNames} onChange={handleChange} className="border p-2 rounded w-full mt-4" required />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="border p-2 rounded w-full mt-4" required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 rounded w-full mt-4" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className="border p-2 rounded w-full mt-4" required />
          <button type="submit" className="bg-blue-500 text-white font-semibold p-2 rounded w-full mt-4">Register Account</button>
        </form>
       
        <div className="text-center mt-4">
          <Link href="/forgot-password" className="text-blue-600 text-sm">Forgot Password?</Link>
        </div>
        <div className="text-center mt-2">
          <Link href="/login" className="text-blue-600 text-sm">Already have an account? Login!</Link>
        </div>
      </div>
    </div>
  );
}

