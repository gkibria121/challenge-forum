"use client";
import React from "react";

function Error(): React.ReactElement {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-50 to-white">
      <div className="rounded-lg border border-blue-200 bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">Oops!</h1>
        <p className="mb-6 text-xl text-gray-700">Something went wrong!</p>
        <button
          className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-blue-700"
          onClick={() => window.location.reload()} // Optional: Add a retry button
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Error;
