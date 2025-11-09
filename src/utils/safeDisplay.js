// src/utils/safeDisplay.js

/**
 * Safely renders any value in your UI.
 * - Converts objects and arrays into JSON strings.
 * - Converts null or undefined into an empty string.
 * - Leaves numbers and strings as they are.
 */
export const safeDisplay = (value) => {
  if (value === null || value === undefined) return "";
  if (typeof value === "object") {
    try {
      return JSON.stringify(value);
    } catch {
      return "[Invalid object]";
    }
  }
  return String(value);
};
