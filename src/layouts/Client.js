import React, { useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NewLetterSection from "../components/sections/NewsLetterSection";
import Navbar from "../components/widgets/Navbar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
export default function Client() {
  const location = useLocation();
  const [scrollEl, setScrollEl] = useState();

  useLayoutEffect(() => {
    if (scrollEl) {
      scrollEl.scrollTop = 0;
      scrollEl.scrollLeft = 0;
    }
  }, [location.pathname, scrollEl]);

  return (
    <>
      <PerfectScrollbar
        containerRef={setScrollEl}
        className="absolute w-screen"
      >
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <NewLetterSection />
      </PerfectScrollbar>
    </>
  );
}
