"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthCard() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleGoogleAuth = () => {
    if (isLogin) {
      router.push("/login/google"); // 🔹 login via Google
    } else {
      router.push("/signup/google"); // 🔹 signup via Google
    }
  };

  const handleEmailAuth = () => {
    if (isLogin) {
      router.push("/login/email"); // 🔹 login via Email
    } else {
      router.push("/signup/email"); // 🔹 signup via Email
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[350px] rounded-xl bg-white shadow-lg p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-center">
          {isLogin ? "Continue with an account" : "Create a new account"}
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          {isLogin
            ? "You must log in or register to continue."
            : "Sign up to get started."}
        </p>

        {/* Buttons */}
        <div className="mt-6 space-y-3">
          {/* Google */}
          <button
            onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center gap-2 bg-gray-100 border border-gray-300 rounded-full py-2 text-gray-700 hover:bg-gray-200 transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            {isLogin ? "Continue with Google" : "Sign up with Google"}
          </button>

          {/* Email */}
          <button
            onClick={handleEmailAuth}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-full py-2 hover:bg-blue-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 
                1.1.9 2 2 2h16c1.1 0 2-.9 
                2-2V6c0-1.1-.9-2-2-2zm0 
                4-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
            {isLogin ? "Login with Email" : "Sign up with Email"}
          </button>
        </div>

        {/* Toggle Link */}
        <div className="mt-5 text-center text-sm">
          {isLogin ? (
            <>
              <span className="text-gray-600">New User?</span>
              <button
                onClick={() => setIsLogin(false)}
                className="text-black font-medium hover:underline ml-1"
              >
                Create New Account
              </button>
            </>
          ) : (
            <>
              <span className="text-gray-600">Already have an account?</span>
              <button
                onClick={() => setIsLogin(true)}
                className="text-black font-medium hover:underline ml-1"
              >
                Login
              </button>
            </>
          )}
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, you agree to our{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            T&Cs
          </a>
          .
        </p>
      </div>
    </div>
  );
}
