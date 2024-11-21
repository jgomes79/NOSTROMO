import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Locale } from "@/i18n/i18n.types";

import { SettingsState } from "../settings.types";

/**
 * Initial state for the settings.
 */
const initialState: SettingsState = {
  language: Locale.ES,
};

/**
 * Type representing the properties and methods for managing settings state.
 */
type UseSettingsProps = SettingsState & {
  setLanguage: (language: Locale) => void;
};

/**
 * Custom hook to manage settings state with persistence.
 */
export const useSettings = create<UseSettingsProps>()(
  persist(
    (set) => ({
      ...initialState,
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "@nostromo-settings", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
