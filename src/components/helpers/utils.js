/**
 * Checks if is server side rendering
 * @returns {boolean}
 */
export const isServerSide = () => typeof window === 'undefined';

/**
  * Returns browser width
  * @returns {number}
  */
export const getBrowserWidth = () => !isServerSide() && window.innerWidth;

/**
  * Returns browser size based on breakpoints
  * @param {object} breakpoints
  * @returns {string}
  */
export const getBrowserSize = (width = null, breakpoints) => {
  if (!width) {
    return 'large';
  }
  if (width >= breakpoints.large) {
    return 'large';
  } if (width >= breakpoints.medium && width <= breakpoints.large) {
    return 'medium';
  }
  return 'small';
};