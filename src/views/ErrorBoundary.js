import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="font-semibold text-gray-900 text-xl">500</p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                An unknown error has occurred
              </h1>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Please try again later
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/"
                  className="rounded-md bg-amber-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Go back home
                </Link>
                <Link
                  href="/contact-us"
                  className="text-sm font-semibold text-amber-900"
                >
                  Contact support <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </main>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
