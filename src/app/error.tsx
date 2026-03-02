"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <html>
      <body className="bg-rich-black">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-tang to-crayola flex items-center justify-center text-white mx-auto mb-6">
              <span className="text-2xl font-bold">⚠️</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Something Went Wrong</h1>
            <p className="text-gray-400 mb-8">
              We're sorry, but something unexpected happened. Please try again.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => reset()}
                className="block w-full px-6 py-3 bg-tang hover:bg-cobalt text-white font-semibold rounded-xl transition-all duration-300 btn-glow"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="block px-6 py-3 border-2 border-french-sky text-french-sky hover:bg-french-sky hover:text-rich-black font-semibold rounded-xl transition-all duration-300"
              >
                Return Home
              </Link>
            </div>
            {process.env.NODE_ENV === "development" && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-gray-500 hover:text-white">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-sm text-gray-400 bg-space-cadet p-4 rounded-lg overflow-auto max-h-40">
                  {error.message}
                </pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}