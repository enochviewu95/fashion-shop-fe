import { useState } from "react";
import Navbar from "../components/widgets/Navbar";
import LoadingComponent from "../components/widgets/LoadingComponent";
import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  const [loading, setLoading] = useState(false);

  const auth = useAuth();

  return auth !== null ? (
    <>
      <Navbar setLoading={setLoading} />
      <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-gray-900 text-xl">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
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
  ) : (
    <LoadingComponent isLoading={loading} />
  );
}
