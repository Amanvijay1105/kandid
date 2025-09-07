"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";

export default function RegisterWithEmail() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message || "Signup failed");
      return;
    }

    router.push("/dashboard"); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[400px] rounded-xl bg-white shadow-lg p-6">
        <button
          className="flex items-center gap-1 text-gray-600 text-sm hover:underline mb-4"
          onClick={() => router.back()}
        >
          ← Back
        </button>
        <h2 className="text-xl font-semibold">Login  with email</h2>
        <p className="text-sm text-gray-500 mb-6">
           login using your email address.
        </p>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="text-sm text-gray-700 block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-700 block mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                required
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
          {errorMsg && (
            <p className="text-red-600 text-sm text-center">{errorMsg}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white rounded-full py-2 hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Logging in" : "login "}
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          new account {" "}
          <a href="/signup" className="text-blue-600 font-medium hover:underline">
            
          </a>
        </p>
      </div>
    </div>
  );
}
