/**
 * Utility Functions
 * 
 * Shared helper functions used across the application.
 * Examples: formatDate, classNames, validators, etc.
 */

/**
 * Conditionally join class names, filtering out falsy values.
 * @param  {...string} classes - Class name strings or falsy values
 * @returns {string} Joined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
