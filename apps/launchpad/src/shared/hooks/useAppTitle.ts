import { useEffect } from "react";

/**
 * A custom React hook that sets the app title.
 *
 * @param title - The title to set for the app (optional).
 * @returns An object with a `set` function to update the app title dynamically.
 */
export const useAppTitle = (title?: string) => {
  /**
   * Sets the app title with a given text.
   *
   * @param text - The text to set as the app title.
   */
  const set = (text: string) => {
    document.title = `Mindney - ${text}`;
  };

  useEffect(() => {
    if (title) {
      set(title);
    }
  }, [title]);

  return {
    set,
  };
};
