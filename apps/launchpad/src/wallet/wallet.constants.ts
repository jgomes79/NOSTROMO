import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";

export const MODULE_WALLET = "wallet";

/**
 * Configuration object for the wallet module.
 *
 * @constant
 * @type {object}
 * @property {string} appName - The name of the application.
 * @property {string} projectId - The project ID for the wallet configuration.
 * @property {Array} chains - The array of supported blockchain networks.
 * @property {boolean} ssr - Server-side rendering flag.
 */
export const walletConfig = getDefaultConfig({
  appName: "Nostromo Launchpad",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});
