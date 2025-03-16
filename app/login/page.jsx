'use client';

import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome Back!</h1>
        </div>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Email Address..."
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember Me
            </label>
            <Link href="/forgot-password" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">Don't have an account?{' '}
            <Link href="/register" className="text-blue-500 hover:underline">
              Create an Account!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;