import { useState, useEffect } from "react";

type Breakpoints =
  | "mobileVertical"
  | "mobileHorizontal"
  | "tabletVertical"
  | "tabletHorizontal"
  | "desktop"
  | "unknown";

interface UseResponsiveReturnProps {
  windowSize: {
    width: number;
    height: number;
  };
  currentBreakpoint: Breakpoints;
  isMobile: boolean;
  isMobileVertical: boolean;
  isMobileHorizontal: boolean;
  isTabletVertical: boolean;
  isTabletHorizontal: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

/**
 * Custom hook to detect screen size and provide responsive breakpoints.
 *
 * @returns {UseResponsiveReturnProps} An object containing the current window size, current breakpoint,
 * and boolean flags for each defined breakpoint.
 */
function useResponsive(): UseResponsiveReturnProps {
  // Initialize state for window size
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Define breakpoints for different screen sizes
  const breakpoints = {
    mobileVertical: { max: 599 },
    mobileHorizontal: { min: 600, max: 767 },
    tabletVertical: { min: 768, max: 1023 },
    tabletHorizontal: { min: 1024, max: 1439 },
    desktop: { min: 1440 },
  };

  /**
   * Determines the current breakpoint based on the window width.
   *
   * @param {number} width - The current width of the window.
   * @returns {Breakpoints} The current breakpoint.
   */
  const getBreakpoint = (width: number): Breakpoints => {
    if (width <= breakpoints.mobileVertical.max) return "mobileVertical";
    if (width >= breakpoints.mobileHorizontal.min && width <= breakpoints.mobileHorizontal.max) {
      return "mobileHorizontal";
    }
    if (width >= breakpoints.tabletVertical.min && width <= breakpoints.tabletVertical.max) return "tabletVertical";
    if (width >= breakpoints.tabletHorizontal.min && width <= breakpoints.tabletHorizontal.max) {
      return "tabletHorizontal";
    }
    if (width >= breakpoints.desktop.min) return "desktop";
    return "unknown";
  };

  // State to track the current breakpoint
  const [currentBreakpoint, setCurrentBreakpoint] = useState(getBreakpoint(window.innerWidth));

  /**
   * Handles the window resize event and updates the state accordingly.
   */
  const handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setWindowSize({ width, height });
    setCurrentBreakpoint(getBreakpoint(width));
  };

  useEffect(() => {
    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Boolean flags to check if the screen is in a specific breakpoint range
  const isMobileVertical = windowSize.width <= breakpoints.mobileVertical.max;
  const isMobileHorizontal =
    windowSize.width >= breakpoints.mobileHorizontal.min && windowSize.width <= breakpoints.mobileHorizontal.max;
  const isTabletVertical =
    windowSize.width >= breakpoints.tabletVertical.min && windowSize.width <= breakpoints.tabletVertical.max;
  const isTabletHorizontal =
    windowSize.width >= breakpoints.tabletHorizontal.min && windowSize.width <= breakpoints.tabletHorizontal.max;
  const isDesktop = windowSize.width >= breakpoints.desktop.min;

  return {
    windowSize,
    currentBreakpoint,
    isMobile: isMobileHorizontal || isMobileVertical,
    isMobileVertical,
    isMobileHorizontal,
    isTabletVertical,
    isTabletHorizontal,
    isTablet: isTabletHorizontal || isTabletVertical,
    isDesktop,
  };
}

export default useResponsive;
