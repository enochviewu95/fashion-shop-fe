import React, { Suspense } from "react";
import LoadingComponent from "../components/widgets/LoadingComponent";
import ErrorBoundary from "../views/ErrorBoundary";

export const SuspenseSection = ({ children }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingComponent />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
