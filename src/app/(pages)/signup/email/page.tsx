"use client"
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // optional for icons

export default function RegisterWithEmail() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[400px] rounded-xl bg-white shadow-lg p-6">
        {/* Back */}
        <button className="flex items-center gap-1 text-gray-600 text-sm hover:underline mb-4">
          ← Back
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold">Register with email</h2>
        <p className="text-sm text-gray-500 mb-6">
          Register using your email address.
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* First + Last Name */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-700 block mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-700 block mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full border rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-full py-2 hover:bg-blue-700 transition"
          >
            Create my account
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
