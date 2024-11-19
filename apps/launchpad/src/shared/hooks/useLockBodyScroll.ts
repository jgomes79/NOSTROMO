import { useEffect } from "react";

/**
 * A custom React hook that controls the body's overflow property.
 *
 * @param isNavigatorVisible - A boolean indicating whether the navigator (e.g., sidebar, modal) is visible.
 */
export const useLockBodyScroll = (isNavigatorVisible: boolean) => {
  useEffect(() => {
    // Set the body's overflow style based on the visibility of the navigator
    document.body.style.overflow = isNavigatorVisible ? "hidden" : "auto";
    document.body.style.touchAction = isNavigatorVisible ? "none" : "auto";

    // Cleanup: Reset overflow to 'auto' when the component is unmounted or if the dependency changes
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    };
  }, [isNavigatorVisible]);
};
