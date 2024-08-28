/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading substring.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  // Return an empty string if the inputs are invalid
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  // Create an array to store parts of strings after stripping the leading substring
  const parts = [];

  // Iterate over each value in the set
  for (const value of set) {
    // Ensure the value is a string and starts with the startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Strip the leading substring and push the result to parts array
      const valueSubStr = value.substring(startString.length);
      if (valueSubStr) {
        parts.push(valueSubStr);
      }
    }
  }

  // Join the parts array with a dash and return the result
  return parts.join('-');
}
