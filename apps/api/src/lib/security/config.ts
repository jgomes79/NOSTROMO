/**
 * Configuration options for CSRF protection middleware.
 * @property {Object} cookie - The configuration for the cookie to be set by CSRF middleware.
 * @property {string} cookie.key - The name of the cookie.
 * @property {boolean} cookie.sameSite - Strictly set to the same site for CSRF protection.
 * @property {boolean} cookie.httpOnly - Ensures the cookie is sent only over HTTP(S), not accessible through JavaScript.
 * @property {boolean} cookie.secure - Ensures the cookie is sent over HTTPS.
 */
export const csurfConfigOptions = {
  cookie: {
    key: '_csrf',
    sameSite: true,
    httpOnly: true,
    secure: true,
  },
};

// Types
type Domains = Record<'LOCAL' | 'STAGING' | 'PRO', string[]>;

/**
 * Domains configuration for different environments.
 * LOCAL: Domains for local development.
 * DEV: Domains for the development environment.
 * PRO: Domains for the production environment.
 */
const domains: Domains = {
  LOCAL: ['http://127.0.0.1:4200', 'http://localhost:4200'],
  STAGING: [],
  PRO: [''],
};

export default domains;
