"use client";

import React from "react";

function page() {
  return (
    <>
      <main className="flex h-[calc(100vh-10rem)] items-start justify-center">
        <form className="w-full max-w-lg rounded-lg bg-blue-100 p-8 shadow-lg">
          <h4 className="mb-6 text-center text-2xl font-bold">
            Welcome to <br />
            <span className="text-blue-500">Challenge Forum</span>
          </h4>

          {/* Social Login */}
          <div className="mb-4 flex cursor-pointer items-center justify-center gap-4 rounded-lg border p-3 shadow-md hover:bg-gray-100">
            <img
              src="assets/images/google-logo.png"
              alt="Google logo"
              className="h-6 w-6"
            />
            <span className="text-sm font-medium">Login with Google</span>
          </div>
          <div className="mb-4 flex cursor-pointer items-center justify-center gap-4 rounded-lg border p-3 shadow-md hover:bg-gray-100">
            <img
              src="assets/images/facebook-logo.png"
              alt="Facebook logo"
              className="h-6 w-6"
            />
            <span className="text-sm font-medium">Login with Facebook</span>
          </div>

          {/* Divider */}
          <div className="relative my-6 flex items-center">
            <span className="absolute inset-x-0 top-1/2 h-[1px] bg-gray-300"></span>
            <span className="relative bg-white px-4 text-sm uppercase text-gray-500">
              Or
            </span>
          </div>

          {/* Email Input */}
          <div className="mb-4 flex items-center rounded-lg bg-gray-200 p-2">
            <i className="fa-solid fa-envelope text-gray-500"></i>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="flex-1 bg-transparent p-2 text-sm outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 flex items-center rounded-lg bg-gray-200 p-2">
            <i className="fa-solid fa-key text-gray-500"></i>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="flex-1 bg-transparent p-2 text-sm outline-none"
            />
            <i className="fa-solid fa-eye cursor-pointer text-gray-500"></i>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="mb-4 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-blue-500"
              />
              <label htmlFor="remember" className="text-gray-600">
                Remember me
              </label>
            </div>
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 py-2 text-white transition hover:bg-blue-600"
          >
            Login
          </button>

          {/* Register Link */}
          <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </div>
        </form>
      </main>
    </>
  );
}

export default page;
