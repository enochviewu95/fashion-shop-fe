import React, { Suspense } from "react";
import LoadingComponent from "../components/widgets/LoadingComponent";
import ErrorBoundary from "../views/ErrorBoundary";
import ErrorSection from "../components/sections/ErrorSection";

export const SuspenseSection = ({ children }) => {
  return (
    <ErrorBoundary fallback={<ErrorSection />}>
      <Suspense fallback={<LoadingComponent />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
