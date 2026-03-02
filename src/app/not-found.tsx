import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-rich-black flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cobalt to-tang flex items-center justify-center text-white mx-auto mb-6">
          <span className="text-2xl font-bold">404</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="block px-6 py-3 bg-cobalt hover:bg-tang text-white font-semibold rounded-xl transition-all duration-300 btn-glow"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="block px-6 py-3 border-2 border-french-sky text-french-sky hover:bg-french-sky hover:text-rich-black font-semibold rounded-xl transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}